import React from "react";
import Header from "@/components/Header";

function page() {
  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-gradient-to-b from-[#130722] from-20% to-60% to-black/90 text-white flex justify-center items-center space-x-10">
        <div className="w-[400px] h-[500px] rounded-xl border-2 border-[#4F0D77] flex flex-col">
          <div className="w-full h-[400px] rounded-xl flex justify-center items-center hover:scale-110 transition-all">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="grey"
              class="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </div>
          <div className="w-full h-[100px] rounded-b-xl bg-[#4F0D77]"></div>
        </div>
        <div className="w-[300px] h-[500px] rounded-xl flex flex-col">
          <div className="w-[300px] h-[425px] rounded-xl"></div>
          <button className="w-[300px] h-[75px] rounded-xl bg-[#6D13A5] hover:bg-[#310849] flex justify-center items-center hover:scale-105 duration-100">
            <button className="text-lg font-medium">Convert</button>
          </button>
        </div>
        <div className="w-[400px] h-[500px] rounded-xl border-2 border-[#310849] duration-100">
          <div className="w-[400px] h-[400px] rounded-xl flex justify-center items-center hover:scale-110 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="grey"
              class="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
