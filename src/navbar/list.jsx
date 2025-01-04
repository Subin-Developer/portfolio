"use client";

import { Dot } from "lucide-react";
import Link from "next/link";

import { MagneticButton } from "../components/common/button/index";
import { Center } from "../stack/center_styled";
import { navItems } from "../data/nav-items";
import { randomId } from "../util/helpers/random-id";

export function NavbarList() {
  const items = navItems.slice(1).map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id} className="group p-4">
        <Link href={href} passHref>
          <MagneticButton>
            <span className="text-base capitalize text-black">{title}</span>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className="flex items-center max-lg:hidden">{items}</ul>;
}
