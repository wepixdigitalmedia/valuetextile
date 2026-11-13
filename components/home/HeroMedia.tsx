"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import { CtaBlock } from "./CtaBlock";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  // Play video safely handling browser play promise rejections
  const safePlay = useCallback(() => {
    if (!videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy or interrupted
          setIsPlaying(false);
        });
    }
  }, []);

  // Pause video safely
  const safePause = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  }, []);

  // Manual toggle by user click
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      safePlay();
    } else {
      safePause();
    }
  };

  // Scroll listener: as soon as user starts scrolling down (scrollY > 40px), pause video immediately
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const scrolled = scrollY > 40;
          setIsScrolledDown(scrolled);

          if (scrolled) {
            // User started scrolling down: pause video to prevent distraction and conserve performance
            if (videoRef.current && !videoRef.current.paused) {
              safePause();
            }
          } else {
            // User scrolled back to the top of the hero fold: resume playing smoothly
            if (videoRef.current && videoRef.current.paused) {
              safePlay();
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [safePause, safePlay]);

  // IntersectionObserver: guarantee video stays paused whenever scrolled out of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
          safePause();
        } else {
          // Only auto-resume if the user is still at the top of the page
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          if (scrollY <= 40) {
            safePlay();
          }
        }
      },
      { threshold: [0, 0.3, 0.6, 1.0] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [safePause, safePlay]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Main Hero Media Container: exact aspect ratio and rounded stadium corners intact */}
      <div
        onClick={togglePlay}
        className="group relative w-full h-[290px] sm:h-[350px] md:h-[380px] lg:h-[410px] xl:h-[430px] bg-[#FAF8F5] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden cursor-pointer select-none"
        title={isPlaying ? "Click to pause video" : "Click to play video"}
      >
        {/* Background Video: Authentic Garment & Clothing Production Factory */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-fabric-flow.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center video-cinema-grade"
        >
          <source src="/videos/hero-factory-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Warm Tone Filter: Unifies video lighting with the warm ivory/amber editorial theme */}
        <div className="absolute inset-0 bg-[#C8741F]/[0.04] pointer-events-none mix-blend-multiply" />

        {/* Minimal Accessible Play/Pause Control (Appears on hover or when paused, no AI/tech tags) */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <div
            className={`w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 ${
              !isPlaying
                ? "opacity-90 scale-100 shadow-md"
                : "opacity-0 group-hover:opacity-75 scale-90 group-hover:scale-100"
            }`}
            aria-hidden="true"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white translate-x-0.5" />
            )}
          </div>
        </div>

        {/* Bottom-right Cut-out Container for the CTA Block with white gap and concave curves */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-0 right-0 z-20 bg-white p-2.5 sm:p-3 rounded-tl-[28px] sm:rounded-tl-[34px] cursor-default"
        >
          {/* Top concave transition curve */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-8 right-0 pointer-events-none"
            aria-hidden="true"
          >
            <path
              d="M32 32V0C32 17.6731 17.6731 32 0 32H32Z"
              fill="#FFFFFF"
            />
          </svg>

          {/* Left concave transition curve */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 -left-8 pointer-events-none"
            aria-hidden="true"
          >
            <path
              d="M32 32H0C17.6731 32 32 17.6731 32 0V32Z"
              fill="#FFFFFF"
            />
          </svg>

          {/* Embedded CTA Block */}
          <CtaBlock />
        </div>
      </div>
    </div>
  );
}
