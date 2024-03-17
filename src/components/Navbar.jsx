import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/citymap", label: "City Map" },
    { href: "/recents", label: "Recent Searches" },
  ];
  return (
    <>
      <header className="px-4 py-2 w-full text-[#c0c9fb]">
        <nav className="flex">
          <ul className="flex gap-10 mr-10">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink to={item.href} className="text-sm md:text-lg text-slate-gray">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
