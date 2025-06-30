// app/api/judgements/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the import path if necessary

// Define the structure of the data returned by the search API
interface JudgementSearchResult {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  summary: string | null;
  // fullContent is not included for performance, only relevant search fields
}

// GET /api/judgements/search?query=... - Search judgements
export async function GET(request: NextRequest) {
  // Get the search query from the URL query parameters
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    // Return 400 Bad Request if the 'query' parameter is missing
    return NextResponse.json({ error: 'Search query parameter is required' }, { status: 400 });
  }

  const lowerCaseQuery = query.toLowerCase(); // Still useful for filtering in DBs that might need it, or if you switch providers later. Though for SQLite 'contains' on text is case-insensitive by default.

  try {
    // Perform the database search using Prisma
    const judgements: JudgementSearchResult[] = await prisma.judgement.findMany({
      where: {
        // Use 'OR' to search across multiple fields
        OR: [
          {
            title: {
              contains: lowerCaseQuery,
              // REMOVED: mode: 'insensitive', // Not supported for SQLite
            },
          },
          {
            caseNumber: {
              contains: lowerCaseQuery,
              // REMOVED: mode: 'insensitive',
            },
          },
          {
            court: {
              contains: lowerCaseQuery,
              // REMOVED: mode: 'insensitive',
            },
          },
          // Include summary in search
          {
            summary: {
              contains: lowerCaseQuery,
              // REMOVED: mode: 'insensitive',
            },
          },
          // Optional: Include fullContent search, but be aware of performance on large datasets
          // {
          //   fullContent: {
          //     contains: lowerCaseQuery,
          //     // REMOVED: mode: 'insensitive',
          //   },
          // },
        ],
      },
      orderBy: {
        date: 'desc', // Or any other sorting preference for search results
      },
      // Select only the necessary fields for the list view results
      select: {
        id: true,
        title: true,
        caseNumber: true,
        court: true,
        date: true,
        summary: true,
        // Do NOT select fullContent here unless you need it in the search results list display
      },
    });

    // Return the search results as JSON
    return NextResponse.json(judgements);

  } catch (error) {
    console.error("Error performing judgement search:", error);
    // Return 500 Internal Server Error on database errors
    return NextResponse.json({ error: 'Failed to perform search' }, { status: 500 });
  }
}

// No other methods (like POST, PUT, DELETE) are typically needed for a search endpoint