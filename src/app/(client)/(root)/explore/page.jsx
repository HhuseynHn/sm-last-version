/** @format */

import { Button } from "@/common/components";
import { Compass } from "lucide-react";
import Link from "next/link";
import React from "react";

const Explore = () => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-background"
        asChild>
        <Link href="#">
          <Compass className="h-5 w-5" />
          <span className="sr-only">Explore</span>
        </Link>
      </Button>
    </>
  );
};

export default Explore;
