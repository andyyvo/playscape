"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import breakpointsObserver from "@/utils/breakpointsObserver";
import Image from "next/image";

export const Hero = () => {
  const [breakpoint, setBreakpoint] = useState("");
  useEffect(() => {
    breakpointsObserver(setBreakpoint);
    console.log(breakpoint)
  }, [breakpoint])

  return (
    <div className="relative h-screen bg-cover bg-center text-white px-8 sm:px-36" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("/kid-play.jpg")' }}>
      <nav className="flex justify-between w-full py-6">
        {/* logo */}
        <div className="flex items-center">
          <Link href="#" className="w-64 h-16">
            {breakpoint === "mobile" ? (
              <Image
                className="w-auto h-full"
                src={"/logo_small.svg"}
                alt="Playscape Logo"
                width={0}
                height={0}
              />
            ) : (
              <Image
                className="w-auto h-full"
                src={"/logo_large_white.svg"}
                alt="Playscape Logo"
                width={0}
                height={0}
              />
            )}
          </Link>
        </div>
        {/* nav links */}
        <div className="flex items-center space-x-4">
          <Link href="#mission" className="text-xl">Mission</Link>
          <Link href="#journey" className="text-xl">Journey</Link>
          <Link href="#about" className="text-xl">About</Link>
        </div>
      </nav>
      {/* content */}
      <div className="mt-24 max-w-2xl">
        <h1 className="text-7xl font-bold mb-4 tracking-tight" style={{ lineHeight: '86px' }}>Augmenting the Magic of Outdoor Play</h1>
        <p className="text-xl mb-6">Facilitating outdoor play for all kids! We aim to create play opportunities intertwined with the existing urban environment for diverse communities, addressing declining outdoor play.</p>
        <Link href="https://www.ischool.berkeley.edu/programs/mims/projects" target="_blank" rel="noopener noreferrer"><button className="bg-white text-black hover:bg-primary hover:text-white py-4 px-8 rounded-full">Learn More</button></Link>
      </div>
    </div>
  )
}