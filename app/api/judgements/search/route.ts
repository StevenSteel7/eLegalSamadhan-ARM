// app/api/judgements/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { JudgementCategory } from '@prisma/client';

// --- ADDED --- Re-using the helper function
function isJudgementCategory(value: string): value is JudgementCategory {
  return Object.values(JudgementCategory).includes(value as JudgementCategory);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const category = searchParams.get('category'); // Get optional category

  if (!query) {
    return NextResponse.json({ error: 'Search query parameter is required' }, { status: 400 });
  }

  try {
    const textSearchClause = {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { caseNumber: { contains: query, mode: 'insensitive' } },
        { court: { contains: query, mode: 'insensitive' } },
        { summary: { contains: query, mode: 'insensitive' } },
      ],
    };

    let whereClause: any = textSearchClause;

    // If a valid category is provided, combine it with the text search
    if (category && isJudgementCategory(category)) {
      whereClause = {
        AND: [
          { category: category }, // Filter by category
          textSearchClause,      // AND search within that category
        ],
      };
    }

    const judgements = await prisma.judgement.findMany({
      where: whereClause,
      orderBy: {
        date: 'desc',
      },
      select: {
        id: true,
        title: true,
        caseNumber: true,
        court: true,
        date: true,
        summary: true,
        category: true, // --- ADDED ---
      },
    });

    return NextResponse.json(judgements);

  } catch (error) {
    console.error("Error performing judgement search:", error);
    return NextResponse.json({ error: 'Failed to perform search' }, { status: 500 });
  }
}