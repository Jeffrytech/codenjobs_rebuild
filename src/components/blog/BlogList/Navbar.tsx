import Link from "next/link";

const menuItems = [
  { icon: "home", link: "/" },
  { icon: "notifications", link: "" },
  { icon: "lists", link: "" },
  { icon: "drafts", link: "" },
  { icon: "writing", link: "" },
];

const NavBar = () => (
  <aside className="border-r-[3px] space-y-9 pt-8 lg:h-screen w-[80px] top-0 lg:sticky hidden lg:block">
    {menuItems.map(({ icon, link }) => (
      <Link
        className="navbar-menu mx-auto w-fit block"
        passHref
        href={link}
        key={icon}
      >
        <img src={`/static/icons/${icon}.svg`} alt="" />
      </Link>
    ))}
  </aside>
);
export default NavBar;
