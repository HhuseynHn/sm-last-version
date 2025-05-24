/** @format */

import { Button } from "@/common/components";
import { Zap } from "lucide-react";
import React from "react";

const Follow = () => {
  return (
    <>
      <Button
        size="sm"
        className="hidden sm:flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 hover:opacity-90 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
        <Zap className="mr-1 h-4 w-4" />
        Follow
      </Button>
    </>
  );
};

export default Follow;
