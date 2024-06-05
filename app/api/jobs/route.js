import { NextResponse } from "next/server";

import { query } from "@/lib/database/db";

export async function GET(req) {
  try {
    const result = await query("SELECT * FROM job_listings", []);
    return NextResponse.json(result.rows, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Intern Error", status: 500 });
  }
}
