function HomeCards({ title, questionNumber }) {
  const formattedTitle = title
    .split(";")
    .map((line, index) => line.trim())
    .filter((line) => line)
    .map((line, index) => <p key={index}>{line}</p>);

  return (
    <div className="m-2 rounded-lg border-[1px] border-[#ffffff24] bg-[#25252572] p-3 transition duration-100 hover:border-[#ffffff40] sm:m-0 sm:h-[12rem]">
      <h1 className="flex items-center gap-2 text-xl font-bold">
        ✨ Question {questionNumber}
      </h1>
      <div className="mt-2 text-sm text-slate-300">{formattedTitle}</div>
    </div>
  );
}

export default HomeCards;