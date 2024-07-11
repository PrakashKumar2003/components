import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const distance = searchParams.get("distance");
  const power_1 = searchParams.get("power_1");
  const power_2 = searchParams.get("power_2");
  const divergence_1 = searchParams.get("divergence_1");
  const divergence_2 = searchParams.get("divergence_2");
  const diametre_1 = searchParams.get("diametre_1");
  const diametre_2 = searchParams.get("diametre_2");

  const url = `https://www.motionlasers.com/?module=products&action=calculate-divergence&distance=${distance}&power_1=${power_1}&power_2=${power_2}&divergence_1=${divergence_1}&divergence_2=${divergence_2}&diametre_1=${diametre_1}&diametre_2=${diametre_2}`;

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
