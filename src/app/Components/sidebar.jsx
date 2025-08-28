import Image from "next/image";
import { MdSpeed } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="shadow-lg w-20 h-310 ml-5 mt-3 items-center bg-white rounded-xl flex flex-col">
      <div className="shadow-lg m-2.5 ">
        <Image
          src={"/images/profilepic.jpg"}
          width={1920}
          height={1080}
          className="rounded-xl"
          alt="profile"
        />
      </div>
      <div>
        <MdSpeed color="black" className="size-6 mt-8" />
      </div>
    </div>
  );
};

export default SideBar;
