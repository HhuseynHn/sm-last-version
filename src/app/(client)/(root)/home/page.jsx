/** @format */

import PostLayout from "@/modules/post/post-layout";
import Stories from "@/modules/user/story";
import React from "react";

const HomePage = () => {
  return (
    <>
      {/* Container */}
      <div className="justify-items-center">
        {/* Stories */}
        <div className="pt-0 pb-1 justify-items-center ">
          <Stories />
        </div>
        {/* Posts */}
        <div className="max-w-screen-lg">
          <PostLayout />
        </div>
      </div>
    </>
  );
};

export default HomePage;
