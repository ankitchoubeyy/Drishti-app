import React from "react";
import Link from "next/link";
import Signup from "../buttons/Signup";
import Signin from "../buttons/Signin";

function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-[#243642] sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1 className="text-3xl text-white font-bold">Drishti</h1>
            <ul className="hidden md:flex gap-x-6 text-white font-bold ">
              <li className="hover:text-[#F2EED7]">
                <Link href="/about">
                  <p>Home</p>
                </Link>
              </li>
              <li className="hover:text-[#F2EED7]">
                <Link href="/contacts">
                  <p>Dashboard</p>
                </Link>
              </li>
            </ul>
            <div className="text-white flex justify-between">
              <Signup/>
              <Signin/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
