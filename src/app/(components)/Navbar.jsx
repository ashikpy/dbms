import { BsLayoutThreeColumns } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import React from "react";

function Navbar() {
  const size = 20;

  return (
    <nav className="text-bold p-4">
      <div className="container flex items-center justify-between px-2 text-white">
        <BsLayoutThreeColumns size={size} />
        <h1 className="text-lg font-bold">Data Structure Study Material</h1>
        <AiFillHome size={size} />
      </div>
    </nav>
  );
}

export default Navbar;
