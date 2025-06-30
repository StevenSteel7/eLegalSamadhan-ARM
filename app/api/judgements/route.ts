// app/api/judgements/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming prisma client is properly set up

// GET /api/judgements - List all judgements (sorted by createdAt DESC)
export async function GET(request: Request) {
  try {
    const judgements = await prisma.judgement.findMany({
      orderBy: {
        createdAt: 'desc', // 🔥 Core change: Order by system insertion date
      },
      select: {
        id: true,
        title: true,
        caseNumber: true,
        court: true,
        date: true,
        summary: true,
        fullContent: true,  // ⬅️ Optional: Include if your frontend might use fullContent in detail pages or search.
        createdAt: true,    // ⬅️ Important: Include createdAt so frontend can access
      },
    });

    return NextResponse.json(judgements, { status: 200 });
  } catch (error) {
    console.error('Error fetching judgements:', error);
    return NextResponse.json({ error: 'Failed to fetch judgements' }, { status: 500 });
  }
}

// POST /api/judgements - Create a new judgement (admin side)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic input validation
    const { title, caseNumber, court, date, fullContent, summary } = body;
    if (!title || !caseNumber || !court || !date || !fullContent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newJudgement = await prisma.judgement.create({
      data: {
        title,
        caseNumber,
        court,
        date, // Date is user-provided (filing date, etc.)
        fullContent,
        summary: summary || fullContent.substring(0, 150) + '...', // Auto-generate summary fallback
      },
    });

    return NextResponse.json(newJudgement, { status: 201 }); // 201 Created
  } catch (error) {
    console.error('Error creating judgement:', error);
    return NextResponse.json({ error: 'Failed to create judgement' }, { status: 500 });
  }
}
