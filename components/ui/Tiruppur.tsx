import React from "react";

interface TiruppurProps {
  className?: string;
}

export function Tiruppur({ className = "" }: TiruppurProps) {
  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className="font-medium tracking-normal text-[0.98em]">திருப்பூர்</span>
      <span>(Tiruppur)</span>
    </span>
  );
}
