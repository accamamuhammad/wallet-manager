import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  // State of the current vault
  const [currentVault, setCurrentVault] = useState("");

  // To navigate to a different page without using "Link"
  const navigate = useNavigate();

  // Temporary Vaults
  const vaults = ["Phantom Wallet", "MetaMask", "SafePal", "BitGet Wallet"];

  // set, navigate and pass data to wallet page
  const handleCurrentVaultToWalletPage = (vault) => {
    setCurrentVault(vault);
    navigate(`/wallet/${vault}`); // Navigates to WalletPage with selected vault
  };

  return (
    <main className="w-[380px] h-[100dvh] p-8 gap-5 flex flex-col bg-black">
      {/* Edit */}
      <div className="w-full flex justify-end text-purple-500">
        <p className="text-sm font-medium cursor-pointer">Edit</p>
      </div>
      {/* Header Text */}
      <h1 className="text-3xl text-white font-semibold">Vaults</h1>
      {/* Wallets */}
      <ul className="flex flex-col gap-4">
        {vaults.map((item, index) => (
          <li
            key={index}
            onClick={() => handleCurrentVaultToWalletPage(item)}
            className="cursor-pointer text-white hover:text-purple-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Homepage;
