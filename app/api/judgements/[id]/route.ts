// app/api/judgements/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/judgements/:id
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
  }

  try {
    const judgement = await prisma.judgement.findUnique({
      where: { id: parsedId },
    });

    if (!judgement) {
      return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
    }

    return NextResponse.json(judgement);
  } catch (error) {
    console.error('Error fetching judgement:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/judgements/:id
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
  }

  try {
    const body = await request.json(); // Correctly using request.json()

    if (!body.title || !body.caseNumber || !body.court || !body.date || !body.fullContent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const updatedJudgement = await prisma.judgement.update({
      where: { id: parsedId },
      data: {
        title: body.title,
        caseNumber: body.caseNumber,
        court: body.court,
        date: body.date,
        summary: body.summary,
        fullContent: body.fullContent,
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

// DELETE /api/judgements/:id
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
  }

  try {
    await prisma.judgement.delete({
      where: { id: parsedId },
    });

    return NextResponse.json({ message: 'Judgement deleted successfully' });
  } catch (error) {
    console.error(`Error deleting judgement ${parsedId}:`, error);
    if ((error as any).code === 'P2025') {
      return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete judgement' }, { status: 500 });
  }
}
