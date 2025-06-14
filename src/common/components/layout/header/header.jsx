/** @format */
"use client";
import CommunitiesPage from "@/app/(client)/(root)/communities/page";
import Explore from "@/app/(client)/(root)/explore/page";
import TrendingPage from "@/app/(client)/(root)/trending/page";
import React, { useEffect, useState } from "react";
import Follow from "../components/follow/follow";
import HomeIcon from "../components/home/home";
import Language from "../components/language";
import Logo from "../components/logo/logo";
import Messages from "../components/messages";
import Notifications from "../components/notifications";
import SearchButton from "../components/search/search";
import SettingsProfile from "../components/settings";
import DarkMode from "../components/theme";

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`sticky  justify-between top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-sm shadow-md h-16" : "bg-background h-16"
        } `}>

        <div className="relative overflow-hidden">

          <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />



          <div className="relative  pr-2 pl-2 max-w-screen-lg mx-auto">
            <div className="flex h-16 items-center justify-between w-full">
              <Logo />
              <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
                <ul className="flex items-center p-1 bg-muted/50 rounded-full">
                  <li>
                    <HomeIcon />
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
                <Language />
                <SettingsProfile />
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
