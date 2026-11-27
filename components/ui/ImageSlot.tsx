import React from "react";
import Image from "next/image";

export interface SlotSize {
  /** Pixel size to export the image at. */
  w: number;
  h: number;
  /** Add the file path here when the real image is ready, e.g. "/images/home/knitting-floor.jpg". */
  src?: string;
}

interface ImageSlotProps {
  /** Short name of the shot, e.g. "Knitting floor". */
  label: string;
  /** What the photo should show. Shown only while there is no image. */
  hint: string;
  desktop: SlotSize;
  mobile: SlotSize;
  /** Alt text for the real image. */
  alt: string;
  /** Optional caption printed on the image once it exists. */
  caption?: string;
  /** Full-bleed slots have square corners and no border. */
  bleed?: boolean;
  className?: string;
}

function Frame({
  size,
  label,
  hint,
  alt,
  sizes,
  other,
  bleed,
}: {
  size: SlotSize;
  label: string;
  hint: string;
  alt: string;
  sizes: string;
  other: SlotSize;
  bleed: boolean;
}) {
  const radius = bleed ? "" : "rounded-[12px]";
  if (size.src) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-[var(--surface)] ${radius}`}
        style={{ aspectRatio: `${size.w} / ${size.h}` }}
      >
        <Image src={size.src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`flex w-full flex-col items-center justify-center gap-2 bg-[var(--surface)] px-6 text-center ${radius} ${
        bleed ? "border-y border-dashed border-[var(--text-muted)]/40" : "border border-dashed border-[var(--text-muted)]/50"
      }`}
      style={{ aspectRatio: `${size.w} / ${size.h}` }}
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
        Photo to add · {label}
      </span>
      <span className="max-w-[460px] text-[13px] leading-[1.5] text-[var(--text-muted)]">{hint}</span>
      <span className="text-[12px] font-semibold text-[var(--black)]">
        This size {size.w}×{size.h}px
        <span className="text-[var(--text-muted)]"> · other screen {other.w}×{other.h}px</span>
      </span>
    </div>
  );
}

/**
 * Placeholder for a photo or banner. Shows a labelled box (with the shot to take and the
 * export sizes for desktop and mobile) until `desktop.src` / `mobile.src` are filled in.
 * Mobile and desktop can be different crops of the same scene.
 */
export function ImageSlot({
  label,
  hint,
  desktop,
  mobile,
  alt,
  caption,
  bleed = false,
  className = "",
}: ImageSlotProps) {
  return (
    <figure className={`relative w-full ${className}`}>
      <div className="md:hidden">
        <Frame size={mobile} other={desktop} label={label} hint={hint} alt={alt} sizes="100vw" bleed={bleed} />
      </div>
      <div className="hidden md:block">
        <Frame
          size={desktop}
          other={mobile}
          label={label}
          hint={hint}
          alt={alt}
          sizes={bleed ? "100vw" : "(max-width: 1280px) 50vw, 640px"}
          bleed={bleed}
        />
      </div>
      {caption && (desktop.src || mobile.src) && (
        <figcaption className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 text-[13px] font-semibold text-[var(--white)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
