import Image from "next/image"
const Banner2 = ()=> {
  return(
    <div className="w-full h-60 bg-orange-400 rounded-2xl grid sm:grid-cols-2 grid-cols-1 overflow-hidden">
      <div className="flex flex-col h-full w-full max-w-[450px] p-8 justify-between">
        <div className="flex flex-col p-2">
          <h1 className="text-white text-2xl font-semibold font-inter leading-loose">Try this out!</h1>
          <p className="text-white/80 font-normal text-[15px] leading-tight font-dm-sans">{"You are 20 coins away from being able to order your saved product Elgato HD60 Capture Card."}</p>
        </div>
        <div className="flex flex-row gap-4">
        <div className="bg-white rounded-full w-fit px-4 py-2 font-inter text-black text-sm font-medium cursor-pointer">Open editor</div>
        <div className="bg-white rounded-full w-fit px-4 py-2 font-inter text-black text-sm font-medium cursor-pointer">Try now</div>
        </div>
      </div>
      <div className="relative w-full hidden sm:block">
        <Image src={"/banners/2.png"} alt="Banner2" width={1600} height={480} className="absolute right-0 object-contain h-[420px] -mt-[32px] -mr-[60px]"/>
      </div>
    </div>
  )
}

export default Banner2