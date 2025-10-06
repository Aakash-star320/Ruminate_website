import { Suspense } from "react";
import BlogClient from "./BlogClient";

export const dynamic = "force-dynamic"; // ensure this page is client-rendered

export default function BlogViewPage() {
  return (
    <Suspense fallback={<p className="loading-text">Loading blog...</p>}>
      <BlogClient />
    </Suspense>
  );
}
