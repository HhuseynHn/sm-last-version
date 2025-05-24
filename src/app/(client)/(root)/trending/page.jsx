/** @format */

import { Button } from "@/common/components";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const TrendingPage = () => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-background"
        asChild>
        <Link href="#">
          <Sparkles className="h-5 w-5" />
          <span className="sr-only">Trending</span>
        </Link>
      </Button>
    </>
  );
};

export default TrendingPage;
