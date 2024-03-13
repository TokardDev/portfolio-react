'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

import { useEffect, useRef } from "react";

export default function Home() {
  const mainBackGradient = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!mainBackGradient.current) return;
      const { clientX, clientY } = ev;
      mainBackGradient.current.style.setProperty("--x", `${clientX}px`);
      mainBackGradient.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .followGradient {
          height: 100vh;
          width: 100%;
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            #23585d 0%,
            transparent 40%
          );
        }

        @media (max-width: 768px) {
          .followGradient {
            background-image: linear-gradient(#000000, #23585d);
            background-size: cover;
          }
        }
      `}</style>

      <main ref={mainBackGradient} className="followGradient flex min-h-screen flex-col items-left justify-between p-24">
        <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex">
          <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left text-[#EDEDE8] lg:text-6xl">
            Adrien Augeix
            <p className="text-2xl md:text-4xl font-bold bg-clip-text lg:text-4xl">
              Developer
            </p>
          </h1>
        </div>
      </main>
    </>
  );
}
