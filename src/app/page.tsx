'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MyTimeline from "@/components/MyTimeline";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


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

        .parag {
          overflow-y: scroll;
          max-height: 95vh;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .parag::-webkit-scrollbar {
          display: none;
        }

      `}</style>

      <main ref={mainBackGradient} className="followGradient flex min-h-screen flex-col items-left justify-between">
        <div className="grid grid-cols-3 gap-4">
          <div className="md:mt-16 md:ml-16 mt-4 md-4 ml-4 parag">
            <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left text-[#EDEDE8] lg:text-6xl">
              Adrien Augeix
              <p className="text-2xl md:text-4xl font-bold bg-clip-text">
                Developer
              </p>
            </h1>
            <div className="md:mt-5 mt-4">
              <div className="font-bold text-center lg:text-left text-[#EDEDE8] text-3xl md:text-4xl flex">
                <a href="https://github.com/TokardDev" className="mr-4"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/augeix-adrien" className="mr-4"><FaLinkedin /></a>
                <a href="mailto:adrien@augeix.fr" className="mr-4"><IoMdMail /></a>
              </div>
              <div className="border-l-4 border-[#51CAD5]">
                <p className="font-bold text-left text-[#EDEDE8] md:text-xl text-md flex mt-5 ml-5">
                I am a young French developer passionate about technology and innovation.
                </p>
              </div>
              <div className="border-l-4 border-[#45B79A]">
                <p className="font-bold text-left text-[#EDEDE8] md:text-xl text-sm flex mt-5 ml-5">
                  Also a creative thinker, I&apos;m constantly exploring new ideas and approaches to problem-solving.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-2"><MyTimeline /></div>
        </div>
      </main>
    </>
  );
}
