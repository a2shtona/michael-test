import Image from "next/image"
const UserCard = ({image, name, detail}: {image: string, name: string, detail: string})=> {
  return(
    <div className="flex flex-row gap-2 items-center hover:bg-button p-2 rounded-lg cursor-pointer">
      <Image src={image} width={40} height={40} alt={name} className="rounded-full object-cover h-10 w-10"/>
      <div className="flex flex-col">
        <span className="text-white text-sm font-medium font-inter">{name}</span>
        <span className="text-zinc-400 text-xs font-normal font-inter">{detail.length>30? detail.slice(0.30) + "...": detail}</span>
      </div>
    </div>
  )
}
export default UserCard