import React, { Suspense } from "react";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { Container } from "@/components/ui/Container";

export default function BlogDetailPage() {
  return (
    <Suspense
      fallback={
        <main className="w-full bg-[var(--white)] py-28">
          <Container className="flex flex-col items-center justify-center gap-3 text-[var(--text-muted)]">
            <p className="text-xs font-bold uppercase tracking-[0.14em]">Loading article...</p>
          </Container>
        </main>
      }
    >
      <BlogDetailClient />
    </Suspense>
  );
}
