import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold text-[15px] leading-tight min-h-[48px] px-7 py-3 rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)] text-center select-none cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)]",
    secondary:
      "bg-transparent text-[var(--black)] border-[1.5px] border-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
