import Image from "next/image"
const Banner2 = ()=> {
  return(
    <div className="w-full h-60 bg-[#CE9B59] rounded-2xl grid sm:grid-cols-2 grid-cols-1 overflow-hidden">
      <div className="flex flex-col h-full w-full px-8 pb-8 pt-12 justify-between mt-4">
        <div className="flex flex-col w-[450px]">
          <h1 className="text-white text-2xl font-semibold font-inter">
            Try this out!
          </h1>
          <div className="text-white/80 font-normal text-[15px] font-dm-sans leading-5 tracking-[0.25px] mt-2">
            {
              "You are 20 coins away from being able to order your saved product Elgato HD60 Capture Card."
            }
          </div>
        </div>
        <div className="flex flex-row gap-4">
        <div className="bg-white rounded-full w-fit px-5 py-3 font-inter text-black text-sm font-semibold cursor-pointer leading-[18px]">Open editor</div>
          <div className="bg-white rounded-full w-fit px-5 py-3 font-inter text-black text-sm font-semibold cursor-pointer leading-[18px]">
            Try now
          </div>
        </div>
      </div>
      <div className="relative w-full hidden sm:block">
        <Image src={"/banners/2.png"} alt="Banner2" width={1600} height={480} className="absolute right-0 object-contain h-[420px] -mt-[32px] -mr-[60px]"/>
      </div>
    </div>
  )
}

export default Banner2