import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl font-sans pl-10">Fariz Ammar </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Toogle Theme */}
        <div className="px-10">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
