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
      className={`text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)] mb-3 ${className}`}
      {...props}
    >
      <span>{children}</span>
    </Component>
  );
}
