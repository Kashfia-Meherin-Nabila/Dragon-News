import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container my-6 flex justify-between mx-auto items-center">
      {/* left empty div */}
      <div></div>

      {/* nav menus */}
      <ul className="flex gap-3 justify-between items-center text-gray-700 font-semibold">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      {/* avatar and login button div */}
      <div className="flex gap-2 items-center">
        <Image src={userAvatar} alt="user Avatar" width={60} hight={60} />
        <Link href="/login">
          <button className="btn bg-gray-900 text-white">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
