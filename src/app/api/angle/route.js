import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const params = {
    angle: searchParams.get("angle"),
    distance: searchParams.get("distance"),
    size: searchParams.get("size"),
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `https://www.motionlasers.com/?module=products&action=calculate-angle&${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
