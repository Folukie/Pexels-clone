import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ onSubmit, onChange, value }) => {
  return (
    <form className="relative" onSubmit={onSubmit}>
      <input
        placeholder="Search for free photos and videos"
        className="w-full h-14 px-3 rounded-md py-4 "
        onChange={onChange}
        name="input"
        value={value}
      />
      <button className="absolute right-5 top-5 text-xl">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
