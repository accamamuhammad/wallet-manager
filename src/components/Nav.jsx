import React from "react";
import searchIcon from "../assets/search-solid.svg";

const Nav = () => {
  return (
    <div className="w-full flex flex-row justify-between items-start">
      <div className="h-7 opacity-60 aspect-square bg-white rounded-full"></div>
      <img
        src={searchIcon}
        alt="search icon"
        className="pt-.5 w-5 cursor-pointer"
      />
    </div>
  );
};

export default Nav;
