import React from "react";

function Page() {
  return (
    <>
      {/* <div className="h-[35vh] w-screen bg-cyan-400 border-b-2 border-black flex justify-center">
        <h1 className="relative bottom-0">Settings</h1>
      </div> */}
      <div className="pt-[5.25rem] w-screen pb-4 text-center bg-cyan-100 border-b-2 border-black">
        <h1 className="font-semibold text-[2rem]">Settings</h1>
      </div>
      <div className="flex flex-col items-center text-xl text-center leading-[1.2]">
        <div className="border-b border-black py-10 px-[30vw] w-screen">
          <h1>Recieve email notification</h1>
          <button>Enable</button>
        </div>
        <div className="border-b border-black py-10 px-[30vw] w-screen">
          <h1>Recieve email notification</h1>
          <button>Enable</button>
        </div>
        <div className="border-b border-black py-10 px-[30vw] w-screen">
          <h1>Recieve email notification</h1>
          <button>Enable</button>
        </div>
      </div>
    </>
  );
}

export default Page;
