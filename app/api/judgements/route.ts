// app/api/judgements/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { JudgementCategory } from '@prisma/client';

// --- ADDED --- A helper function to validate the category enum
function isJudgementCategory(value: string): value is JudgementCategory {
  return Object.values(JudgementCategory).includes(value as JudgementCategory);
}

// GET /api/judgements - List all judgements, with optional category filtering
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let whereClause = {};

    // If a valid category is provided, add it to the filter
    if (category && isJudgementCategory(category)) {
      whereClause = { category: category };
    }

    const judgements = await prisma.judgement.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        caseNumber: true,
        court: true,
        date: true,
        summary: true,
        category: true, // Ensure category is always returned
        createdAt: true,
      },
    });

    return NextResponse.json(judgements, { status: 200 });
  } catch (error) {
    console.error('Error fetching judgements:', error);
    return NextResponse.json({ error: 'Failed to fetch judgements' }, { status: 500 });
  }
}

// POST /api/judgements - Create a new judgement
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // --- MODIFIED --- Destructure and validate the new 'category' field
    const { title, caseNumber, court, date, fullContent, summary, category } = body;
    if (!title || !caseNumber || !court || !date || !fullContent || !category) {
      return NextResponse.json({ error: 'Missing required fields, including category' }, { status: 400 });
    }

    // --- ADDED --- Validate the category value
    if (!isJudgementCategory(category)) {
      return NextResponse.json({ error: 'Invalid category provided' }, { status: 400 });
    }

    const newJudgement = await prisma.judgement.create({
      data: {
        title,
        caseNumber,
        court,
        date: new Date(date), // Ensure date is stored as a DateTime object
        fullContent,
        summary: summary || null, // Store null if summary is empty
        category, // --- ADDED --- Save the category to the database
      },
    });

    return NextResponse.json(newJudgement, { status: 201 });
  } catch (error) {
    console.error('Error creating judgement:', error);
    return NextResponse.json({ error: 'Failed to create judgement' }, { status: 500 });
  }
}