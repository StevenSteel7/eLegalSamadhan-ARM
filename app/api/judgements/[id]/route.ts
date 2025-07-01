// app/api/judgements/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { JudgementCategory } from '@prisma/client';

// --- ADDED --- A helper function to validate the category enum
function isJudgementCategory(value: string): value is JudgementCategory {
  return Object.values(JudgementCategory).includes(value as JudgementCategory);
}

// GET /api/judgements/:id (No changes needed)
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const parsedId = parseInt(params.id, 10);
  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
  }

  try {
    const judgement = await prisma.judgement.findUnique({ where: { id: parsedId } });
    if (!judgement) {
      return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
    }
    return NextResponse.json(judgement);
  } catch (error) {
    console.error('Error fetching judgement:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/judgements/:id - Update an existing judgement
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const parsedId = parseInt(params.id, 10);
  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
  }

  try {
    const body = await request.json();

    // --- MODIFIED --- Destructure and validate the 'category' field
    const { title, caseNumber, court, date, fullContent, summary, category } = body;
    if (!title || !caseNumber || !court || !date || !fullContent || !category) {
      return NextResponse.json({ error: 'Missing required fields, including category' }, { status: 400 });
    }

    // --- ADDED --- Validate the category value
    if (!isJudgementCategory(category)) {
      return NextResponse.json({ error: 'Invalid category provided' }, { status: 400 });
    }

    const updatedJudgement = await prisma.judgement.update({
      where: { id: parsedId },
      data: {
        title,
        caseNumber,
        court,
        date: new Date(date), // Ensure date is stored as a DateTime object
        summary: summary || null,
        fullContent,
        category, // --- ADDED --- Update the category in the database
      },
    });

    return NextResponse.json(updatedJudgement);
  } catch (error) {
    console.error(`Error updating judgement ${parsedId}:`, error);
    if ((error as any).code === 'P2025') {
      return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update judgement' }, { status: 500 });
  }
}

// DELETE /api/judgements/:id (No changes needed)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const parsedId = parseInt(params.id, 10);
  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
  }

  try {
    await prisma.judgement.delete({ where: { id: parsedId } });
    return NextResponse.json({ message: 'Judgement deleted successfully' });
  } catch (error) {
    console.error(`Error deleting judgement ${parsedId}:`, error);
    if ((error as any).code === 'P2025') {
      return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete judgement' }, { status: 500 });
  }
}