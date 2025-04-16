import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://status.cloud.google.com/incidents.json', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ status: { description: 'Failed to fetch', indicator: 'major' } }, { status: 500 });
    }

    // Google doesn't have a global status description endpoint like others
    // So we’ll manually determine if there's any active issue
    const incidents = await res.json();

    const ongoing = incidents.some((incident: any) => incident.begin && !incident.end);

    return NextResponse.json({
      status: {
        description: ongoing ? "Degraded" : "All Systems Operational",
        indicator: ongoing ? "minor" : "none"
      }
    });
  } catch (error) {
    console.error("Google status error:", error);
    return NextResponse.json({ status: { description: 'Error fetching status', indicator: 'major' } }, { status: 500 });
  }
}
