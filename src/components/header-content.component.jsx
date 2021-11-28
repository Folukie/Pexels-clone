import React, { useState, useContext } from "react";
import Header from "./header.component";
import Search from "./search.component";
import { ImageContext } from "../../image-context";


const HeaderContent = () => {
  const { search } = useContext(ImageContext);

  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(input);
  };
  const items = [
    "dinner",
    "christmas",
    "lights",
    "plane",
    "doctor",
    "3d",
    "laboratory",
    
  ]

  const handleSuggestionClick = (keyword) => {
    setInput(keyword)
    search(keyword);
  };

  return (
    <div className="bg-hero bg-cover h-max bg-top brightness-200">
      <Header />
      <div className="w-5/12 mx-auto mt-14 sm:w-full sm:px-3 md:w-4/5">
        <h2 className="text-4xl font-bold text-white leading-snug mb-3">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h2>
        <Search onSubmit={handleSubmit} onChange={handleChange} value={input} />
        <div className="text-white flex text-sm mt-2">
          <p className="sm:hidden">Suggested: &nbsp;</p>
          <ul className="flex list-none ">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="text-white opacity-75 hover:opacity-100 cursor-pointer"
                onClick ={() => handleSuggestionClick(item)}
              >
                {item},&nbsp;
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
