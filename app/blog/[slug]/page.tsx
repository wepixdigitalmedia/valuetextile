import React, { Suspense } from "react";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { Container } from "@/components/ui/Container";

export default function BlogDetailPage() {
  return (
    <Suspense
      fallback={
        <main className="w-full bg-white py-28">
          <Container className="flex flex-col items-center justify-center gap-3 text-[#78716C]">
            <p className="font-mono text-xs uppercase tracking-wider">Loading article...</p>
          </Container>
        </main>
      }
    >
      <BlogDetailClient />
    </Suspense>
  );
}
