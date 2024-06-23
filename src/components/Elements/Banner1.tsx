import Image from "next/image";
const Banner1 = () => {
  return (
    <div className="w-full h-60 bg-[#7046D5] rounded-2xl grid sm:grid-cols-2 grid-cols-1 overflow-hidden">
      <div className="flex flex-col h-full w-full px-8 pb-8 pt-16 justify-between">
        <div className="flex flex-col w-[450px]">
          <h1 className="text-white text-2xl font-semibold font-inter">
            Knowledge Packs
          </h1>
          <div className="text-white/80 font-normal text-[15px] font-dm-sans leading-5 tracking-[0.25px] mt-2">
            {
              "You are 20 coins away from being able to order your saved product Elgato HD60 Capture Card."
            }
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="bg-white rounded-full w-fit px-5 py-3 font-inter text-black text-sm font-semibold cursor-pointer leading-[18px]">
            Try now
          </div>
        </div>
      </div>
      <div className="relative w-full hidden sm:block">
        <Image
          src={"/banners/1.png"}
          alt="Banner1"
          width={375}
          height={240}
          className="absolute right-0 object-cover h-60 mt-4 mr-4"
        />
      </div>
    </div>
  );
};

export default Banner1;
