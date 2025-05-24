/** @format */

import { Button } from "@/common/components";
import { Search, X } from "lucide-react";
import React, { useState } from "react";
import ProfileSearch from "./profile-search";

const SearchButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState();
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-muted transition-colors"
        onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="container pt-20 pb-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Search</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ProfileSearch onClose={() => setIsSearchOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchButton;
