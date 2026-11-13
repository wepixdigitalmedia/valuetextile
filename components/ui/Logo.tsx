import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  inverted?: boolean;
}

/**
 * Value Textiles Official Cotton Flame Logo
 * Using the exact, un-altered asset from "public/images/Value Textiles Cotton Flame Logo.png"
 */
export function Logo({
  className = "",
  imageClassName = "h-11 sm:h-12 md:h-14 lg:h-16 xl:h-[70px] w-auto",
  inverted = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Value Textiles Home"
      className={`inline-flex items-center shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8741F] rounded-xs transition-opacity hover:opacity-95 ${className}`}
    >
      <Image
        src="/images/Value%20Textiles%20Cotton%20Flame%20Logo.png"
        alt="Value Textiles"
        width={2172}
        height={724}
        priority
        className={`object-contain transition-transform duration-200 group-hover:scale-102 ${imageClassName} ${
          inverted ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
