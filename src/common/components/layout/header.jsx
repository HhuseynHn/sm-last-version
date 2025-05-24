/** @format */
"use client";
import CommunitiesPage from "@/app/(client)/(root)/communities/page";
import Explore from "@/app/(client)/(root)/explore/page";
import HomePage from "@/app/(client)/(root)/home/page";
import TrendingPage from "@/app/(client)/(root)/trending/page";
import React from "react";
import Follow from "./components/follow/follow";
import Logo from "./components/logo/logo";
import Messages from "./components/messages";
import Notifications from "./components/notifications";
import SearchButton from "./components/search/search";
import DarkMode from "./components/theme";

const Header = () => {
  return (
    <>
      <header className="w-full">
        <div className="flex h-16 items-center justify-between w-full">
          <Logo />
          <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center p-1 bg-muted/50 rounded-full">
              <li>
                <HomePage />
              </li>
              <li>
                <Explore />
              </li>
              <li>
                <TrendingPage />
              </li>
              <li>
                <CommunitiesPage />
              </li>
              <li></li>
            </ul>
          </nav>

          <div className="flex">
            <SearchButton />
            <Follow />
            <Notifications />
            <Messages />
            <DarkMode />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
