import React from "react";
import Image from "next/image";

const Sidebar = ({ close, isOpen }) => {
  return (
    <aside
      className={`sidebar bg-grey overflow-y-auto h-screen p-4 max-w-full w-full z-50 fixed top-0 left-0 hidden sm:block transition-all duration-300 transform ${
        !isOpen ? "translate-x-full" : ""
      }`}
    >
      <div className="flex justify-between pb-10">
        <div className="flex gap-6">
          <Image
            src="/images/pexels-logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
        </div>
        <button onClick={close}>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.0752"
              y1="15.0106"
              x2="14.5102"
              y2="1.57556"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="1.41421"
              y1="2"
              x2="14.8492"
              y2="15.435"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xl opacity-70 hover:opacity-100">
            Home
          </h4>
          <hr />
          {[
            "Discover Photos",
            "Popular Searches",
            "Free Videos",
            "Challenges",
            "Leaderboard",
            "Pexels Blog",
          ].map((item, idx) => (
            <a
              className="text-white font-medium text-xl opacity-70 hover:opacity-100"
              key={idx}
              href="#"
              onClick={close}
            >
              {item}
            </a>
          ))}
          <hr />
        </div>

        <div className="flex flex-col my-4 mb-7 space-y-3 pb-4">
          {["Login", "Join", "Change Language", "License"].map((item, idx) => (
            <a
              className="text-white font-light text-xl opacity-70 hover:opacity-100"
              key={idx}
              href="#"
              onClick={close}
            >
              {item}
            </a>
          ))}
          <hr />
        </div>
        <div className="flex flex-col my-4 mb-7 space-y-3 pb-4">
          {["Apps And Ps Plugin", "FAQ", "About Us", "Imprint & Terms"].map(
            (item, idx) => (
              <a
                className="text-white font-light text-xl opacity-70 hover:opacity-100"
                key={idx}
                href="#"
                onClick={close}
              >
                {item}
              </a>
            )
          )}
          <hr />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
