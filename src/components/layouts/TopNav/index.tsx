import React, { useRef, useState } from "react";
import User from "../User";
import LoginPrompt from "../LoginPrompt";
import CenteredInPage from "../../CenteredInPage";
import PrimarySpinner from "../../spinners/PrimarySpinner";
import { useAuth } from "../../../contexts/auth";
import Shadow from "../Shadow";
import Image from "next/image";
import { CloseOutlined } from "@material-ui/icons";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import Tooltip from "@mui/material/Tooltip";
import { useOnOutsideClick } from "../../../useOutsideClick";

const options = [
  {
    idx: 0,
    name: "Brave",
  },
  {
    idx: 1,
    name: "Coinbase Wallet",
  },
  {
    idx: 2,
    name: "Exodus",
  },
  {
    idx: 3,
    name: "Slope",
  },
  {
    idx: 4,
    name: "Phantom",
  },
];

const TopNav = () => {
  const [showWallets, setShowWallets] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const {
    // @ts-ignore
    user,
    // @ts-ignore
    logout,
    // @ts-ignore
    loading,
  } = useAuth();

  const { innerBorderRef: walletRef } = useOnOutsideClick(() =>
    setShowWallets(false)
  );
  const menuRef = useOnClickOutside(() => setShowMenu(false));

  if (loading) {
    return (
      <>
        {/* <LinearProgress /> */}
        <CenteredInPage>
          <PrimarySpinner />
        </CenteredInPage>
      </>
    );
  }

  return (
    <>
      <nav className="border fixed z-30 flex  top-0 w-full bg-white items-center justify-center px-5 py-3 h-[72px]">
        <Shadow />
        <div className="flex justify-between w-full">
          <Image
            width={28}
            height={34}
            src="/static/logo.svg"
            alt="code&jobs"
          />
          <div className="sm:block hidden">
            <ul className="flex gap-4">
              <li>Jobs</li>
              <li>For Hire</li>
              <li>Marketplace</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div ref={menuRef} className="block sm:hidden">
              <img
                src="/static/icons/Menu.svg"
                alt=""
                className="cursor-pointer"
                onClick={() => setShowMenu((c) => !c)}
              />
              {showMenu && (
                <div className="absolute bg-white w-full p-5 my-[17px] mobile-menu right-0 shadow-mm">
                  <ul className="flex-col flex gap-4">
                    <li>Jobs</li>
                    <li>For Hire</li>
                    <li>Marketplace</li>
                    <li>Blog</li>
                  </ul>
                </div>
              )}
            </div>
            <Tooltip placement="top" title="Sign In">
              <div className="glow-container cursor-pointer">
                <div className="glow-icon" />
                <div className="glow-sqr" />
              </div>
            </Tooltip>
            <div ref={walletRef} className="relative">
              <img
                width={28}
                height={34}
                src="/static/icons/wallet.svg"
                alt="code&jobs"
                onClick={() => setShowWallets((c) => !c)}
                className="cursor-pointer"
              />

              {showWallets && (
                <div className="absolute w-[300px] mt-7 m-5 mr-0 bg-white right-0 p-5 space-y-4 shadow-xx rounded-[10px]">
                  <div className="px-3">
                    <div
                      onClick={() => setShowWallets((c) => !c)}
                      className="w-fit text-xs ml-auto  cursor-pointer mb-2"
                    >
                      <CloseOutlined fontSize="small" />
                    </div>
                    <h2 className="text-black font-semibold">
                      Connect a wallet to continue
                    </h2>
                  </div>
                  <div className="space-y-1">
                    {options.map(({ idx, name }) => (
                      <div
                        className="flex items-center gap-2 hover:outline-2 hover:outline focus:outline-2 focus:outline rounded-lg outline-primary cursor-pointer px-3 py-1.5"
                        key={idx}
                      >
                        <Image
                          src={`/static/icons/${name}.svg`}
                          width={20}
                          height={20}
                          alt={name}
                        />
                        <p>{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
