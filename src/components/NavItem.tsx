import React from "react";

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  return (
    <a
      // className="px-4 py-2 font-semibold hover:text-pink-400 text-sky-50 transition duration-500"
      // className="border-2 rounded border-sky-50 bg-sky-800 p-1 font-semibold hover:text-pink-400 text-sky-50 transition duration-500"
      // className="rounded bg-sky-800 p-1 px-3 font-semibold hover:text-pink-400 hover:bg-sky-700 text-sky-50 transition duration-500"
      className="rounded p-1 px-3 font-semibold hover:bg-sky-700 text-sky-50 transition duration-500"
      href={href}
    >
      {text}
    </a>
  );
};

export default NavItem;
