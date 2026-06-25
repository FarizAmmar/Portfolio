"use client";

import { ArrowUp, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const sections = ["home", "skills", "projects", "experience", "contact"];

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socials = [
        {
            label: "GitHub",
            href: "https://github.com/FarizAmmar",
            icon: Github,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/fariz-ammar-4b2a06226/",
            icon: Linkedin,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/f.ammarsyq/",
            icon: Instagram,
        },
        {
            label: "Email",
            href: "mailto:f.ammarsyq11@gmail.com",
            icon: Mail,
        },
    ];

    return (
        <footer className="relative border-t border-white/10 bg-[#0a0a0f]">
            {/* Samakan dengan seluruh section utama */}
            <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-2">
                <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold text-white">
                            Fariz<span className="text-primary">Ammar.</span>
                        </p>

                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
                            Fullstack developer building fast, scalable, and polished web
                            experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav
                        aria-label="Footer navigation"
                        className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/60"
                    >
                        {sections.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className="capitalize transition hover:text-primary"
                            >
                                {section}
                            </a>
                        ))}
                    </nav>

                    {/* Social */}
                    <div className="flex justify-center gap-3 md:justify-end">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:flex-row sm:text-left">
                    <p>
                        © {new Date().getFullYear()} Fariz Ammar. All rights reserved.
                    </p>

                    <p>Built with Next.js, Laravel & Tailwind CSS.</p>
                </div>
            </div>

            {/* Scroll to top */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90 hover:-translate-y-1"
                >
                    <ArrowUp className="h-5 w-5" />
                </button>
            )}
        </footer>
    );
};

export default Footer;