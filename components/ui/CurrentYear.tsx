"use client";

import { useEffect, useState } from "react";

/** Shows the current year. Starts with a safe default and updates one frame after load. */
export function CurrentYear() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setYear(new Date().getFullYear()));
    return () => cancelAnimationFrame(frame);
  }, []);

  return <>{year}</>;
}
