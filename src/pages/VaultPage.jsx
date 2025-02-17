import { React, useState } from "react";
import plusIcon from "../assets/plus-solid.svg";
import leftCaret from "../assets/caret-left-solid.svg";
import xmark from "../assets/xmark-solid.svg";
import { Link } from "react-router-dom";

const VaultPage = () => {
  const [popUp, setPopUp] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  let accounts2 = [
    {
      name: "main account",
      secret: [
        "Lighthouse",
        "Echo",
        "Velocity",
        "Cactus",
        "Blueprint",
        "Orbit",
        "Telescope",
        "Horizon",
        "Mosaic",
        "Quantum",
        "Whisper",
        "Ember",
      ],
    },
    { name: "nodepay 2", secret: "1295878056129587805612958780561295878056" },
  ];

  // Toggle the pop up
  const handleTogglePopUp = (title) => {
    setPopUp(!popUp);
    setCurrentAccount(title);
  };

  return (
    <main className="w-full h-[100dvh] pb-5 font-mono flex flex-col items-center justify-center bg-[rgb(3,6,22)]">
      <section className="w-full text-center sm:w-96 h-full border border-[rgb(23,26,40)] p-7 flex flex-col gap-3.5 text-white bg-[rgb(3,6,22)]">
        <div className="w-full flex items-center justify-between">
          <Link to="/">
            <img
              src={leftCaret}
              alt="left caret"
              className="w-3.5 cursor-pointer"
            />
          </Link>
        </div>
        <h1 className="w-full mb-10 mt-1.5 text-3xl font-bold">Meta Mask</h1>
        {/* Add New Wallet */}
        <div className="w-full px-1 flex flex-row items-center justify-between">
          <p className="text-sm opacity-70">My Wallets</p>
          <img src={plusIcon} alt="plus icon" className="cursor-pointer w-4" />
        </div>
        {accounts2.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full p-3 cursor-pointer rounded-md bg-[rgb(23,26,40)] flex flex-row items-center justify-between"
            >
              <li className="text-sm list-none">{item.name}</li>
              {/* Dropdown */}
              <img
                src={leftCaret}
                alt="plus icon"
                onClick={() => handleTogglePopUp(item.name)}
                className="cursor-pointer w-2 rotate-[270deg]"
              />

              {/* Pop up */}
              <div
                className={
                  popUp
                    ? "w-full h-full bg-transparent flex items-center justify-center left-0 top-0 absolute  bg-red-500"
                    : "hidden"
                }
              >
                <div className="w-[90%] sm:w-72 mx-5 h-96 p-5 rounded-md flex flex-col gap-4 bg-[rgb(23,26,40)] items-center justify-start">
                  <div className="w-full flex flex-row justify-between">
                    <h1 className="text-xl">{currentAccount}</h1>

                    <img
                      src={xmark}
                      alt="xmark"
                      className="w-4"
                      onClick={() => handleTogglePopUp(item.name)}
                    />
                  </div>
                  <ul className="w-full h-full list-none">
                    <li>a</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
        <p className=" absolute bottom-8 text-red-500 cursor-pointer text-sm left-[50%] -translate-x-[50%]">
          Delete Wallet
        </p>
      </section>
    </main>
  );
};

export default VaultPage;
