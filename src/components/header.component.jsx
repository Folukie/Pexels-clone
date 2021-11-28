import React,{useState} from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import Hamburger from "hamburger-react";
import Sidebar from "./sidebar.component";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="relative">
      <div className="flex justify-between items-center px-4 py-4">
        <a className="text-xl font-medium text-white flex items-center gap-3 cursor-pointer group">
          <Image
            src="/images/pexels-logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="group-hover:opacity-75 sm:hidden">Pexels</span>
        </a>
        <div className="flex items-center gap-10 sm:hidden">
          {["Explore", "License", "Upload"].map((item, idx) => (
            <h4
              key={idx}
              className="text-white font-medium text-base cursor-pointer hover:opacity-75"
            >
              {item}
            </h4>
          ))}
          <ReactTooltip data-background-color="white" />
          <BsThreeDots
            data-tip="Login"
            className="text-white text-2xl cursor-pointer hover:opacity-75"
          />

          <button className="bg-success px-7 py-2 rounded-md text-white font-medium text-base cursor-pointer hover:opacity-75">
            Join
          </button>
        </div>
        
      </div>
      <div className="text-white hidden sm:block absolute right-3 top-3 z-10">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={22}
            easing="ease-in"
            color="#fff"
            duration={0.2}
          />
        </div>
        <Sidebar close={() => setOpen(false)} isOpen={isOpen}/>
    </header>
  );
};

export default Header;
