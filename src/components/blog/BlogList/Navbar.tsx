import Link from "next/link";

const menuItems = [
  { icon: "home", link: "/" },
  { icon: "notifications", link: "" },
  { icon: "lists", link: "" },
  { icon: "drafts", link: "" },
  { icon: "writing", link: "" },
];

const NavBar = () => (
  <aside className="h-screen justify-center gap-9 w-[80px]  hidden md:flex items-center flex-col fixed overflow-hidden">
    {menuItems.map(({ icon, link }) => (
      <Link className="navbar-menu" passHref href={link} key={icon}>
        <img src={`/static/icons/${icon}.svg`} alt="" />
      </Link>
    ))}
    <div className="border-r-[3px] absolute h-screen right-0 translate-y-1/4" />
  </aside>
);
export default NavBar;
