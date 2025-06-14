/** @format */

import Header from "@/common/components/layout/header/header";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="px-2 ">{children}</div>
    </>
  );
}
