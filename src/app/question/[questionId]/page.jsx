import { BiLinkExternal } from "react-icons/bi";
import { CodeData } from "@/app/data";
import React from "react";
import Hero from "./(components)/Hero";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

function page({ params }) {
  if (!CodeData[params.questionId]) {
    return (
      <div className="mt-20 flex flex-col items-center justify-center gap-3">
        <h1 className="w-full text-center text-3xl font-black">
          {" "}
          😭 Question not found 😭
        </h1>
        <h2 className="font-extrabold text-slate-200">
          Head Home and see the answers there
        </h2>
        <Link
          href={`/`}
          className="flex items-center gap-2 rounded-md bg-[#ededed] p-2 px-4 font-bold text-black"
        >
          Home
          <BiLinkExternal />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Hero questionId={params.questionId} />
    </div>
  );
}

export default page;
