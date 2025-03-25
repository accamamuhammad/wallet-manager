import { useParams } from "react-router-dom";
import { useState } from "react";

const WalletPage = () => {
  // Toggle Private Key
  const [togglePrivateKey, setTogglePrivateKey] = useState(false);

  // "useParams" to get vault name
  const { vaultName } = useParams();

  //?   Temporary Wallets
  const wallets = [
    {
      name: "Main wallet",
      privateKey: "1193njb420ub3131131A",
      publicKey: "1193njb420ub31311318",
    },
    {
      name: "Burner wallet",
      privateKey: "1193njb420ub313113B",
      publicKey: "1193njb420ub31311311",
    },
    {
      name: "Airdrop wallet",
      privateKey: "1193njb420ub3131131C",
      publicKey: "794uwVEwSTSFQ3LqqexhfNA3tddrodBaGWCyP9vL5NV3",
    },
  ];

  const handleTogglePrivateKey = () => {
    setTogglePrivateKey(!togglePrivateKey);
  };

  return (
    <main className="w-[380px] h-[100dvh] p-8 gap-5 flex flex-col bg-black">
      <h1 className="text-2xl font-bold">{vaultName || "No vault selected"}</h1>
      <ul className="flex flex-col gap-5">
        {wallets.map((item, index) => {
          return (
            <>
              <div key={index}>
                <li className="w-full flex justify-between">
                  {item.name}
                  <span
                    className="cursor-pointer"
                    onClick={() => handleTogglePrivateKey()}
                  >
                    👁️
                  </span>
                </li>
                <li className="overflow-clip">{item.publicKey}</li>
              </div>
              <div className={togglePrivateKey ? "flex" : "hidden"}>
                {item.privateKey}
              </div>
            </>
          );
        })}
      </ul>
    </main>
  );
};

export default WalletPage;
