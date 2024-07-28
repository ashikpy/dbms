import React from "react";
import Navbar from "./(components)/Navbar";
import Hero from "./(components)/Hero";

function page() {
  return (
    <main className="container mx-auto my-0">
      <Navbar />
      <Hero />
    </main>
  );
}

export default page;
