import React, { useState } from "react";
import HomeTab from "./home-tab.component";
import SecondTab from "./second-tab.component";

const TabNames = {
  Home: "home",
  Discover: "discover",
  Videos: "videos",
  Leaderboard: "leaderboard",
  Challenges: "challenges",
};
const tabs = {
  [TabNames.Home]: <HomeTab />,
  [TabNames.Discover]: <SecondTab />,
  [TabNames.Videos]: <SecondTab />,
  [TabNames.Leaderboard]: <SecondTab />,
  [TabNames.Challenges]: <SecondTab />,
};

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(TabNames.Home);

  return (
    <div>
      <div className="shadow ">
        <ul className="nav flex justify-between w-2/5 mx-auto sm:w-full sm:overflow-scroll sm:px-3 sm:space-x-10 md:w-4/5">
          {Object.keys(tabs).map((tab, idx) => (
            <li
              key={idx}
              className={`font-medium text-lg cursor-pointer capitalize pt-6 pb-3 hover:text-primary ${
                activeTab === tab
                  ? "text-primary border-b-4 border-primary transition "
                  : "text-secondary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div className=" m-10 sm:m-3">{tabs[activeTab] || "Invalid"}</div>
    </div>
  );
};

export default TabContent;
