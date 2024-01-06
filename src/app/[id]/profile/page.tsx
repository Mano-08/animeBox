import Sparkle from "@/components/Sparkle";
import React from "react";

function Page({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <div>
      <div className="h-[23vh] md:h-[35vh] w-screen bg-violet-500 flex justify-center items-end border-b-2 border-black">
        <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full bg-pink-300 relative bottom-[-50px] md:bottom-[-75px] border-black border-2"></div>
      </div>
      <article className="mt-[53px] md:mt-[78px] px-4 md:px-44 w-screen text-center">
        <div>
          <h1 property="" className="text-[2rem] font-semibold">
            John Doe
          </h1>
          <p className="text-lg leading-[1.2]">
            loves watching anime and is now reading death note manga
          </p>
          <div className="flex flex-row items-center justify-center gap-2 my-3">
            <button className="h-8 w-8 rounded-full hover:bg-yellow-200 border-black border-2">
              T
            </button>
            <button className="h-8 w-8 rounded-full hover:bg-yellow-200 border-black border-2">
              D
            </button>

            <button className="flex flex-row items-center gap-2 rounded border-2 hover:bg-yellow-200 border-black py-0.5 px-2.5">
              <p>Suggest</p>
              <Sparkle />
            </button>
          </div>
        </div>

        <nav className="flex flex-row items-center justify-evenly my-6 border-b border-zinc-400">
          <button className="text-lg font-semibold border-b-4 border-black">
            Series
          </button>
          <button className="text-lg font-semibold">Movies</button>
          <button className="text-lg font-semibold">Manga</button>
          <button className="text-lg font-semibold">Suggest</button>
        </nav>
      </article>
    </div>
  );
}

export default Page;
