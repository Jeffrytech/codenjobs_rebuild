import React from "react";
import Link from "next/link";

import { BsDiscord, BsTwitter } from "react-icons/bs";

import TelegramIcon from "@material-ui/icons/Telegram";
import CodeIcon from "@material-ui/icons/Code";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import {
  FooterNav,
  FooterLinkListContainer,
  FooterLinkListLabel,
  FooterLinkListSection,
  FooterList,
  // FooterList,
  Copyright,
  Contact,
} from "./FooterCSS";

import BitcoinImage from "../../../crypto/BitcoinImage";

import ExternalLink from "../../ExternalLink";
import BackgroundColor from "../../BackgroundColor";
import {
  COMPANY_CODE_OF_CONDUCT,
  COMPANY_WEBSITE,
  DISCORD_SERVER,
  TELEGRAM_BOT,
  TELEGRAM_CHANNEL,
  TELEGRAM_GROUP,
  TWITTER,
} from "../../../config/environment";
import { ArrowForwardIosOutlined, KeyboardArrowDown } from "@material-ui/icons";

const DropDown = ({ name }: { name: string }) => (
  <div className="flex items-center justify-between w-full capitalize py-3">
    <p>{name}</p>
    <KeyboardArrowDown fontSize="small" htmlColor="rgba(0,0,0,0.6)" />
  </div>
);

const options = ["Sign In", "For Hire", "Employers", "About"];

const socials = [
  { name: "twitter", link: TWITTER },
  { name: "discord", link: DISCORD_SERVER },
  { name: "telegram", link: TELEGRAM_CHANNEL },
];

const Footer = () => {
  return (
    <footer className="flex items-center min-h-[80px] px-5 sm:px-8 sm:justify-evenly sm:flex-row flex-col sm: gap-5 flex-wrap justify-between bg-white full-bleed py-5">
      <div className="w-full sm:w-fit">
        <div className="flex items-center gap-4">
          <ul className="sm:flex hidden sm:gap-2 sm:text-sm lg:gap-4">
            <li>Browse Jobs</li>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
          <div className="sm:w-fit w-full sm:flex hidden gap-3 items-center">
            {socials.map(({ name, link }) => (
              <a href={link} target="_blank" rel="noreferrer" key={name}>
                <img src={`/static/icons/${name}.svg`} alt={name} />
              </a>
            ))}
          </div>
        </div>

        <div className="sm:hidden flex flex-col gap-3">
          {options.map((o, idx) => (
            <div key={o}>
              <DropDown name={o} />
              {idx !== options.length - 1 ? <hr /> : <div className="mb-9" />}
            </div>
          ))}
        </div>
        <div className="sm:w-fit w-full sm:hidden flex my-5 gap-3 items-center">
          {socials.map(({ name, link }) => (
            <a href={link} target="_blank" rel="noreferrer" key={name}>
              <img src={`/static/icons/${name}.svg`} alt={name} />
            </a>
          ))}
        </div>
      </div>
      <div className="sm:w-fit w-full sm:text-sm">
        <p>© 2022 Code & Jobs. All Rights Reserved</p>
      </div>
      <div className="gap-2 sm:border-t-0 pt-5 sm:pt-0 border-t items-center flex justify-between md:w-fit w-full">
        <p>Hiring ?</p>
        <button className="bg-primary flex items-center justify-center gap-2 rounded text-xs sm:text-sm px-4 text-white p-2">
          Post A Job
          <ArrowForwardIosOutlined className="mt-1" fontSize="inherit" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
