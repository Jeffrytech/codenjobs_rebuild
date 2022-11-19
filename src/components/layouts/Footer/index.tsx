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

const Footer = () => {
  return (
    <footer>
      <h1>footer</h1>
    </footer>
  );
};

export default Footer;
