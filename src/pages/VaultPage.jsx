import { React, useState } from "react";
import plusIcon from "../assets/plus-solid.svg";
import leftCaret from "../assets/caret-left-solid.svg";
import xmark from "../assets/xmark-solid.svg";

const VaultPage = () => {
  let accounts = ["main account", "nodepay 2", "grass-3"];
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
  const [popUp, setPopUp] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  const handleTogglePopUp = (title) => {
    setPopUp(!popUp);
    setCurrentAccount(title);
  };

  return (
    <main className="w-full h-[100dvh] pb-5 font-mono flex items-center justify-center bg-[rgb(3,6,22)]">
      <section className="w-full sm:w-96 h-full border border-[rgb(23,26,40)] p-7 flex flex-col gap-3.5 text-white bg-[rgb(3,6,22)]">
        <div className="w-full flex items-center justify-between">
          <img
            src={leftCaret}
            alt="left caret"
            className="w-3.5 cursor-pointer"
          />
        </div>
        <h1 className="w-full text-center mb-10 mt-1.5 text-3xl font-bold">
          MetaMask
        </h1>
        {accounts.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full p-3 cursor-pointer rounded-md bg-[rgb(23,26,40)] flex flex-row items-center justify-between"
            >
              <li className="text-sm list-none">{item}</li>
              {/* Dropdown */}
              <img
                src={plusIcon}
                alt="plus icon"
                onClick={() => handleTogglePopUp(item)}
                className="cursor-pointer w-4"
              />
              {/* Pop up */}
              <div
                className={
                  popUp
                    ? "w-full h-full bg-transparent flex items-center justify-center left-0 top-0 absolute  bg-red-500"
                    : "hidden"
                }
              >
                <div className="w-72 h-96 p-5 rounded-md flex flex-col gap-4 bg-[rgb(23,26,40)] items-center justify-start">
                  <div className="w-full flex flex-row justify-between">
                    <h1 className="text-xl">{currentAccount}</h1>
                    <img
                      src={xmark}
                      alt="xmark"
                      className="w-4"
                      onClick={() => handleTogglePopUp(item)}
                    />
                  </div>
                  <ul className="w-full h-full list-decimal">
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default VaultPage;
