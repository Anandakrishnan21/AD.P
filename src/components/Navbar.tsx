import React from "react";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

function Navbar() {
  return (
    <nav className="nav">
      <div className="navDiv">
        <div>
          <Link href="#intro">
            <p className="text-sm">Anandakrishnan Dinej</p>
          </Link>
        </div>
        <div>
          <span className="text-neutral-400">
            Engineer, Designer, Developer
          </span>
        </div>
        <div className="block">
          <ul className="list-none flex flex-row space-x-5 font-medium">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id} className="hover:text-neutral-300 duration-200">
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
