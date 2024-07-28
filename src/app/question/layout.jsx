import React from "react";
import Navbar from "../(components)/Navbar";

function page({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default page;
