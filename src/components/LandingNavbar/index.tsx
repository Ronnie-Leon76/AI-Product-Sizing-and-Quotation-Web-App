import Image from "next/image";
import * as React from "react";

import Link from "next/link";
import { Button } from "../ui/button";
import { currentUser, User } from "@clerk/nextjs/server";


async function NavBar() {
  const user = await currentUser()
  return (
    <nav className="flex justify-between items-center px-7 py-4 border-b border-zinc-200">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logohack.png"
          alt="AI Product Sizing and Quotation"
          width={100}
          height={40}
          className="h-10 w-auto"
        />
        <span className="text-xl font-bold text-neutral-800">AI Sizing & Quotation</span>
      </Link>
      
      <ul className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>

      <Button asChild>
        <Link href={user ? "/dashboard" : "/auth/sign-in"}>
          {user ? "Dashboard" : "Sign In"} <span className="ml-2">→</span>
        </Link>
      </Button>
    </nav>
  );
}

export default NavBar;
