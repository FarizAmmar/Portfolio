"use client";

import { ArrowUp } from "lucide-react";

const sections = ["home", "skills", "projects", "experience", "contact"];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#0a0a0f] border-t border-white/10 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                {/* Left: Logo + Copyright */}
                <div>
                    <p className="text-white font-bold text-lg">
                        Fariz<span className="text-primary">Dev.</span>
                    </p>
                    <p className="text-white/50 mt-1">
                        © {new Date().getFullYear()} Fariz Ammar. All rights reserved.
                    </p>
                </div>

                {/* Middle: Nav Links */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/60">
                    {sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="hover:text-primary transition"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            </div>

            {/* Floating scroll-to-top button */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition cursor-pointer"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
};

export default Footer;