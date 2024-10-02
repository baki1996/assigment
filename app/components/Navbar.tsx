import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg-yellow-500 p-2 text-black font-bold text-xl flex justify-between underline">
        <Link className="ml-5" href={"/"}>
          Home
        </Link>

        <Link href={"/about"}>About Us</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/feedback"}>Feedback</Link>
        <Link href={"/country"}>Country</Link>
        <Link href={"/users"}>Users</Link>
        <Link className="mr-5" href={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </>
  );
};

export default Navbar;