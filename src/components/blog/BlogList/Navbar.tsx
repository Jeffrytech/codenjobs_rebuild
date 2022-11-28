import { Tooltip } from "@material-ui/core";
import Link from "next/link";
import {
  BookmarkIcon,
  HomeIcon,
  NotificationsIcon,
  StoriesIcon,
  WritingIcon,
} from "../../icons";

const menuItems = [
  { icon: <HomeIcon />, link: "/", name: "Home" },
  { icon: <NotificationsIcon />, link: "", name: "Notifications" },
  { icon: <BookmarkIcon />, link: "", name: "Bookmarks" },
  { icon: <StoriesIcon />, link: "", name: "Drafts" },
  { icon: <WritingIcon />, link: "", name: "New Story" },
];

const NavBar = () => (
  <aside className="border-r-[3px] space-y-9 pt-8 lg:h-screen w-[80px] top-0 lg:sticky hidden lg:block">
    {menuItems.map(({ icon, link, name }, idx) => (
      <Tooltip key={idx} title={name} placement="right-end">
        <Link
          className="navbar-menu mx-auto w-fit block"
          passHref
          href={link}
          key={idx}
        >
          {icon}
        </Link>
      </Tooltip>
    ))}
  </aside>
);

export default NavBar;
