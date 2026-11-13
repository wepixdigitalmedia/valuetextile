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
    "inline-flex items-center justify-center font-sans font-semibold text-[15px] leading-tight px-7 py-3.5 rounded-[4px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8741F] text-center select-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#C8741F] text-white hover:bg-[#B36417] active:bg-[#9E5713] shadow-xs hover:-translate-y-px",
    secondary:
      "bg-[#FFFFFF] text-[#1F1F1F] border border-[#1F1F1F] hover:bg-[#FAF8F5] active:bg-[#F2EFE9] hover:-translate-y-px",
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

