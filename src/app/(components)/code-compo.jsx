"use client";

function CodeCompo({ title, description, code, language, output }) {
  return (
    <div className="">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="xl:w-[60rem]"></div>
    </div>
  );
}

export default CodeCompo;
