import { NextRequest, NextResponse } from "next/server";
import rawTeam from "@/data/team.json";

type Member = {
  name: string;
  role: string;
  img: string;
};

type TeamData = Record<string, Member[]>;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const team = rawTeam as TeamData;

  if (!category || !team[category]) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json(team[category]);
}
