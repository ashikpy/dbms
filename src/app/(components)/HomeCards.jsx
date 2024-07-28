function HomeCards({ title, questionNumber }) {
  return (
    <div className="m-2 rounded-lg border-[1px] border-[#ffffff24] bg-[#25252572] p-3 transition duration-100 hover:border-[#ffffff40]">
      <h1 className="flex items-center gap-2 text-xl font-bold">
        ✨ Question {questionNumber}
      </h1>
      <h2 className="mt-2 text-sm text-slate-300"> {title}</h2>
    </div>
  );
}

export default HomeCards;
