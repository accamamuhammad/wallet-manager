import React from "react";
import plusIcon from "../assets/plus-solid.svg";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search-solid.svg";
import leftCaret from "../assets/caret-left-solid.svg";

const Homepage = () => {
  const Vaults = ["MetaMask", "Phantom", "Bitget Wallet"];

  // Pass Current Vault Data to firebase
  const handleCurrentVault = (data) => {};

  return (
    <main className="w-full h-[100dvh] pb-5 font-mono flex items-center justify-center bg-[rgb(3,6,22)]">
      <section className="w-full sm:w-96 h-full border border-[rgb(23,26,40)] p-7 flex flex-col gap-10 text-white bg-[rgb(3,6,22)]">
        <div className="w-full flex flex-row justify-between items-start">
          <div className="h-7 opacity-60 aspect-square bg-white rounded-full"></div>
          <img
            src={searchIcon}
            alt="search icon"
            className="pt-.5 w-5 cursor-pointer"
          />
        </div>
        {/* Head Text */}
        <h1 className="text-3xl">
          Manage your <br />
          Privacy 👨🏽‍💻
        </h1>
        <div className="space-y-4">
          {/* Add New Vault */}
          <div className="w-full px-1 flex flex-row items-center justify-between">
            <p className="text-sm opacity-70">My Vaults</p>
            <img
              src={plusIcon}
              alt="plus icon"
              className="cursor-pointer w-4"
            />
          </div>
          {/* Vaults */}
          {Vaults.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleCurrentVault(item)}
                className="w-full p-2.5 cursor-pointer rounded-md bg-[rgb(23,26,40)] flex flex-row items-center justify-between"
              >
                <Link to="/vault" className="w-full">
                  <div className="flex flex-row gap-3 items-center">
                    {/* Replace with image */}
                    <div className="h-8 w-8 bg-[rgb(3,6,22)] rounded-md"></div>
                    <li className="list-none text-sm font-medium">{item}</li>
                  </div>
                </Link>
                <span className="text-xs">1</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
