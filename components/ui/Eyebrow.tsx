import React from "react";

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Eyebrow({
  children,
  className = "",
  as: Component = "p",
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={`inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)] mb-3 ${className}`}
      {...props}
    >
      <span
        className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0"
        aria-hidden="true"
      />
      <span>{children}</span>
    </Component>
  );
}
