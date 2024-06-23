import Image from "next/image";
import { RiLayoutRightLine } from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import StarsIcon from "../Elements/Stars";
import { RiSortDesc } from "react-icons/ri";
import UserCard from "../Elements/UserCard";
type UserProps = {
  image: string;
  name: string;
  detail: string;
};
const Sidebar = () => {
  const users: UserProps[] = [
    {
      image: "/users/9b1a245945b47ed2ede3a8206757db34.png",
      name: "Zero Two",
      detail: "Hiro and I, we're always tog...",
    },
    {
      image: "/users/d2aa366114f7341fc160174c97169e87.png",
      name: "Rias Gremory",
      detail: "That would be Issei Hyoudo...",
    },
    {
      image: "/users/6d7ea87a5a64f4967a43a85a8227797b.png",
      name: "Yor Forger",
      detail: "Hm? Oh... Oh! Do you mean,...",
    },
    {
      image: "/users/e3a6e775ef5b56641ea76d7d978e9482.png",
      name: "Gojo Saturo",
      detail: "Ah, that's a bit of a spoiler f...",
    },
  ];
  return (
    <div className="h-screen flex flex-col p-2 bg-black gap-2">
      <div className="bg-card rounded-lg flex flex-col px-2 py-3">
        <div className="flex flex-row sm:justify-between w-full sm:px-3 py-2 justify-center">
          <div className="hidden sm:flex flex-row gap-3">
            <Image src={"/logo.svg"} width={28} height={28} alt="Logo" />
            <span className="font-inter font-bold text-xl text-zinc-200">
              toffee
            </span>
          </div>
          <RiLayoutRightLine className="w-6 h-6 relative text-zinc-400" />
        </div>
        <div className="flex flex-row sm:justify-start w-full sm:px-3 py-2 justify-center gap-4 items-center mt-1">
          <RiHomeLine className="w-6 h-6 relative text-zinc-400" />
          <span className="text-base text-zinc-400 font-inter font-medium hidden sm:block">
            Home
          </span>
        </div>
        <div className="flex flex-row sm:justify-start w-full sm:px-3 py-2 justify-center gap-4 items-center">
          <FiSearch className="w-6 h-6 relative text-zinc-400" />
          <span className="text-base text-zinc-400 font-inter font-medium hidden sm:block">
            Search
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 sm:px-4 sm:py-1.5 p-1.5 bg-button rounded-full">
          <StarsIcon className="w-6 h-6 relative text-neutral-200" />
          <span className="text-base text-neutral-200 font-inter font-medium hidden sm:block">
            Create
          </span>
        </div>
      </div>
      <div className="bg-card rounded-lg flex flex-col px-2 py-3 flex-grow justify-between">
        <div>
          <div className="flex flex-row sm:justify-between w-full sm:px-2 py-2 justify-center">
            <div className="hidden sm:flex flex-row gap-3">
              <span className="font-inter font-medium text-base text-zinc-200">
                Recents
              </span>
            </div>
            <RiSortDesc className="w-6 h-6 relative text-zinc-400" />
          </div>
          <div className="flex flex-col gap-1">
            {users.map((user, index) => (
              <UserCard
                key={index}
                image={user.image}
                name={user.name}
                detail={user.detail}
              />
            ))}
          </div>
        </div>
      <div>
        <div className="bg-button rounded-lg hidden sm:flex flex-row justify-between overflow-hidden items-center h-14 mb-1">
          <span className="text-white text-sm font-medium font-inter p-4">
            Join our discord
          </span>
          <Image src={"/discord.svg"} width={72} height={72} alt="Discord" className="mt-4"/>
        </div>
        <UserCard image="/users/avatar.png" name="John Smith" detail="john@example.xyz" />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
