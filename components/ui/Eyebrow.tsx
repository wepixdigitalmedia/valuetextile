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
      className={`text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C8741F] mb-3 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

