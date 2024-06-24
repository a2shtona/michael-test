"use client";
import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import Carousel from "../Elements/Carousel";
const App = () => {
  return (
    <div className="bg-black w-full h-full py-2 pr-2">
      <div className="bg-card rounded-lg w-full h-full flex flex-col">
        <div className="flex flex-row justify-between w-full py-3.5 px-6 ">
          <div className="flex flex-row items-center gap-2">
            <FiSearch className="w-5 h-5 relative text-zinc-400" />
            <input
              className="text-sm text-zinc-400 font-inter font-medium bg-transparent w-full focus:outline-none focus:border-none"
              placeholder="What are you looking for?"
              type="text"
            />
          </div>
          <div className="px-4 py-1.5 bg-gradient-to-r from-[#C28851] to-[#B77536] border border-white/30 justify-center items-center gap-1 inline-flex rounded-full">
            <BsStars className="w-5 h-5 relative text-neutral-200" />
            <span className="text-sm text-neutral-200 font-inter font-medium hidden sm:block">
              Create
            </span>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-white/10"/>
        <div className="px-6 mt-8">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default App;
