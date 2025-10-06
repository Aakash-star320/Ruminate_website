import { NextRequest, NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Return single blog by id
  if (id) {
    const blog = blogs.find((b) => b.id == id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  }

  // Return list of blog briefs
  const brief = blogs.map(({ id, title, imageUrl, excerpt }) => ({
    id,
    title,
    imageUrl,
    excerpt,
  }));

  return NextResponse.json(brief);
}
