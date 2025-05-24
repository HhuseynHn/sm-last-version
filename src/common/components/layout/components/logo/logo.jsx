/** @format */

import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Link href="#" className="flex items-center group">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:shadow-purple-500/40 group-hover:scale-105">
            <div className="absolute inset-[2px] rounded-lg bg-white flex items-center justify-center text-xl font-bold">
              <span className="bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
                V
              </span>
            </div>
          </div>
          <div className="ml-2 hidden sm:block">
            <span className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
              Vibe
            </span>
            <span className="text-xl font-light ml-1">Social</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
