/** @format */

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/components";
import { Badge, Bell } from "lucide-react";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full hover:bg-muted transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative h-4 w-4 rounded-full flex items-center justify-center p-0 bg-gradient-to-r from-fuchsia-500 to-violet-500 text-[10px] text-[white]">
                3
              </span>
            </span>
            <span className="sr-only">Notifications</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-80 rounded-xl p-2">
          <DropdownMenuLabel className="text-center font-bold py-2">
            Notifications
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {[1, 2, 3].map((i) => (
            <DropdownMenuItem
              key={i}
              className="flex items-start p-3 cursor-pointer rounded-lg focus:bg-muted">
              <Avatar className="h-10 w-10 mr-3 flex-shrink-0 ring-2 ring-background">
                <AvatarImage
                  src={`/placeholder.svg?height=40&width=40&text=${i}`}
                />
                <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">
                  U{i}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  User {i} liked your post
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="justify-center text-center rounded-lg focus:bg-muted">
            <Link
              href="/notifications"
              className="text-sm font-medium text-violet-500 hover:text-violet-600">
              View all notifications
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Notifications;
