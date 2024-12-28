"use client";

import { useEffect } from "react";

export function GradientTracker() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.querySelector(".hero-gradient") as HTMLElement;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        hero.style.setProperty("--mouse-x", `${x}%`);
        hero.style.setProperty("--mouse-y", `${y}%`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
