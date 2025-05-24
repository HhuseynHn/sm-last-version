/** @format */

import { Button } from "@/common/components";
import { Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const CommunitiesPage = () => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-background"
        asChild>
        <Link href="/communities">
          <Users className="h-5 w-5" />
          <span className="sr-only">Communities</span>
        </Link>
      </Button>
    </>
  );
};

export default CommunitiesPage;
