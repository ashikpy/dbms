import React from "react";
import { CodeData } from "@/app/data";
import HomeCards from "./HomeCards";
import Link from "next/link";

function Hero() {
  return (
    <div className="container gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Object.keys(CodeData).map((key) => (
        <Link href={`/question/${key}`} key={key}>
          <HomeCards
            key={key}
            questionNumber={key}
            title={CodeData[key].question}
            output={"hi"}
          ></HomeCards>
        </Link>
      ))}
    </div>
  );
}

export default Hero;
