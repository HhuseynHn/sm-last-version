/** @format */

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Input,
} from "@/common/components";
import { mockProfiles } from "@/mock/mock-data";
import { Search, UserPlus, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProfileSearch = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("people");

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      const results = mockProfiles.filter((profile) => {
        return (
          profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          profile.username.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        handleSearch();
      } else {
        setSearchResults([]);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <>
      <div className="w-full bg-background rounded-xl shadow-lg border">
        <div className="flex w-full items-center space-x-2 p-3 border-b">
          <div className="bg-gradient-to-r from-fuchsia-500 to-violet-500 p-[1px] rounded-full flex-shrink-0">
            <div className="bg-background rounded-full p-1">
              <Search className="h-4 w-4 text-violet-500" />
            </div>
          </div>
          <Input
            type="text"
            placeholder="Search people, posts, communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
            autoFocus
          />
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="flex-shrink-0 rounded-full hover:bg-muted">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          )}
        </div>

        {/* Search categories */}
        <div className="flex p-2 border-b overflow-x-auto scrollbar-hide">
          {["people", "posts", "communities", "events", "topics"].map(
            (category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                className={`rounded-full px-4 capitalize ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white"
                    : "hover:bg-muted"
                }`}
                onClick={() => setSelectedCategory(category)}>
                {category}
              </Button>
            )
          )}
        </div>

        {isSearching ? (
          <div className="p-8 flex justify-center items-center">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full border-t-2 border-violet-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-t-2 border-fuchsia-500 animate-spin animation-delay-150"></div>
            </div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="max-h-[400px] overflow-y-auto">
            <div className="p-2">
              {searchResults.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3 ring-2 ring-background">
                      <AvatarImage
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">
                        {profile.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{profile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {profile.username}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-full h-8 w-8 p-0">
                    <UserPlus className="h-4 w-4 text-violet-500" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : searchQuery ? (
          <div className="p-8 text-center text-muted-foreground">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-muted mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <p>No results found for "{searchQuery}"</p>
            <p className="text-sm mt-1">Try searching for a different term</p>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 mb-4">
              <Search className="h-6 w-6 text-violet-500" />
            </div>
            <p className="font-medium">Search for people, posts, and more</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try searching for names, usernames, or topics
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileSearch;
