"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause } from "lucide-react";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const safePlay = useCallback(() => {
    if (!videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const safePause = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      safePlay();
    } else {
      safePause();
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const scrolled = scrollY > 40;

          if (scrolled) {
            if (videoRef.current && !videoRef.current.paused) {
              safePause();
            }
          } else {
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [safePause, safePlay]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
          safePause();
        } else {
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
      <div
        onClick={togglePlay}
        className="group relative w-full h-[290px] sm:h-[350px] md:h-[380px] lg:h-[410px] xl:h-[430px] bg-[var(--surface)] border border-[var(--line)] rounded-[12px] overflow-hidden cursor-pointer select-none"
        title={isPlaying ? "Click to pause video" : "Click to play video"}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-factory-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Minimal Play/Pause Control */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <div
            className={`w-9 h-9 rounded-full bg-[var(--black)]/65 border border-[var(--white)]/25 text-[var(--white)] flex items-center justify-center transition-all duration-300 ${
              !isPlaying
                ? "opacity-90 scale-100"
                : "opacity-0 group-hover:opacity-80 scale-90 group-hover:scale-100"
            }`}
            aria-hidden="true"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-[var(--white)]" />
            ) : (
              <Play className="w-4 h-4 fill-[var(--white)] translate-x-0.5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
