import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  bg?: "white" | "surface" | "ivory";
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
    white: "bg-[var(--white)]",
    surface: "bg-[var(--surface)]",
    ivory: "bg-[var(--surface)]",
  }[bg];

  const spacingClasses = {
    default: "py-16 lg:py-24",
    compact: "py-16 lg:py-24",
    cta: "py-16 lg:py-24",
    none: "",
  }[spacing];

  const borders = [
    borderTop ? "border-t border-[var(--line)]" : "",
    borderBottom ? "border-b border-[var(--line)]" : "",
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
