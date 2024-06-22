import Image from "next/image"
const KnowkedgePacks = ()=> {
  return(
    <div className="w-full h-60 bg-violet-600 rounded-2xl relative flex flex-col lg:flex-row overflow-hidden items-center lg:justify-between">
      <div className="flex flex-col h-full w-full max-w-[450px] p-8 justify-between">
        <div className="flex flex-col p-2">
          <h1 className="text-white text-2xl font-semibold font-inter leading-loose">Knowledge Packs</h1>
          <p className="text-white/80 font-normal text-[15px] leading-tight font-dm-sans">{"You are 20 coins away from being able to order your saved product Elgato HD60 Capture Card."}</p>
        </div>
        <div className="bg-white rounded-full w-fit px-4 py-2 font-inter text-black text-sm font-medium cursor-pointer">Try now</div>
      </div>
      <div className="mt-4 mr-4">
        <Image src={"/banners/1.png"} alt="Knowledge Packs" width={375} height={375} />
      </div>
    </div>
  )
}

export default KnowkedgePacks