import { NextResponse } from "next/server";

import { query } from "@/lib/database/db";

export async function GET(req) {
  const limit = req.nextUrl.searchParams.get("limit");
  const offset = req.nextUrl.searchParams.get("offset");
  try {
    const result = await query(
      "SELECT * FROM job_listings where posted_on >= NOW() - INTERVAL '30 days' ORDER BY posted_on DESC LIMIT $1 OFFSET $2",
      [limit, offset]
    );
    return NextResponse.json(result.rows, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Intern Error", status: 500 });
  }
}
