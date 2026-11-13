import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  bg?: "white" | "ivory";
  borderTop?: boolean;
  borderBottom?: boolean;
  spacing?: "default" | "compact" | "cta" | "none";
}

export function Section({
  children,
  className = "",
  as: Component = "section",
  bg = "white",
  borderTop = false,
  borderBottom = false,
  spacing = "default",
  ...props
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    ivory: "bg-[#FAF8F5]",
  }[bg];

  const spacingClasses = {
    default: "py-20 md:py-28", // 80px mobile, ~112px desktop (within 96-120px spec)
    compact: "py-12 md:py-16",
    cta: "py-14 md:py-20",
    none: "",
  }[spacing];

  const borders = [
    borderTop ? "border-t border-[#E6E2DB]" : "",
    borderBottom ? "border-b border-[#E6E2DB]" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={`relative w-full ${bgClasses} ${spacingClasses} ${borders} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

