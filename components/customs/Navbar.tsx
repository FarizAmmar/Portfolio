"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const sections = ["home", "skills", "projects", "experience", "contact"];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");

    // Detect scroll position for navbar styling
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scrollspy logic using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries.filter((entry) => entry.isIntersecting);

                if (visibleSections.length > 0) {
                    const topMost = visibleSections.reduce((prev, current) =>
                        prev.boundingClientRect.top < current.boundingClientRect.top
                            ? prev
                            : current,
                    );
                    setActiveSection(topMost.target.id);
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -60% 0px",
                threshold: 0.1,
            },
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-colors duration-300 ease-in-out ${isScrolled
                    ? "bg-[#0a0a0f]/80 shadow-lg backdrop-blur-md border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
                {/* Left: Logo */}
                <div className="font-bold text-lg">
                    <span>Fariz </span>
                    <span className="text-primary">Ammar.</span>
                </div>

                {/* Middle: Navigation */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`relative pb-1 transition hover:text-primary ${activeSection === section ? "text-primary" : "text-white/70"
                                }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                            {activeSection === section && (
                                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-primary rounded-full" />
                            )}
                        </a>
                    ))}
                </div>

                {/* Right: Download CV */}
                <div className="flex items-center gap-2">
                    <a
                        href="/documents/CV Fariz Ammar 2026 V1.pdf"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition duration-300 shadow-lg shadow-primary/20"
                    >
                        Download CV
                        <Download className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;