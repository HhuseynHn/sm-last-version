/** @format */

import { Button } from "@/common/components";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeIcon = () => {
  return (
    <>
      <div className="">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-background"
          asChild>
          <Link href="/home">
            <Home className="h-5 w-5" />
            <span className="sr-only">Home</span>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default HomeIcon;
