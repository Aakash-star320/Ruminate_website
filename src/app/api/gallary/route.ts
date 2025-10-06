import { NextRequest, NextResponse } from "next/server";
import galleryDataRaw from "@/data/gallary.json";

type GalleryImage = { img: string; event: string };
type GalleryData = Record<string, GalleryImage[]>;

const galleryData: GalleryData = galleryDataRaw;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  const event = searchParams.get("event");

  if (!year || !galleryData[year]) {
    return NextResponse.json([]);
  }

  let images = galleryData[year];
  if (event && event !== "All") {
    images = images.filter((img) => img.event === event);
  }

  return NextResponse.json(images);
}
