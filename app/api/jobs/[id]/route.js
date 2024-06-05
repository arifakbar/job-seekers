import { NextResponse } from "next/server";

import { query } from "@/lib/database/db";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const result = await query(`SELECT * from job_listings where id=${id} `);
    if (!result)
      return NextResponse.json({
        error: "No job found with this id",
        status: 404,
      });

    return NextResponse.json(result.rows[0], { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Internal error", status: 500 });
  }
}
