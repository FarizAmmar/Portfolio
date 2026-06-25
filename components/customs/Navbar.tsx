"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const sections = ["home", "skills", "projects", "experience", "contact"];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isClickScrolling = useRef(false);
    const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;

                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top),
                    );

                if (visibleSections[0]) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: "-90px 0px -55% 0px",
                threshold: 0.1,
            },
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        return () => {
            if (clickTimeout.current) {
                clearTimeout(clickTimeout.current);
            }
        };
    }, []);

    const handleNavClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        section: string,
    ) => {
        event.preventDefault();

        const element = document.getElementById(section);
        if (!element) return;

        setActiveSection(section);
        setIsMobileMenuOpen(false);
        isClickScrolling.current = true;

        const navbarOffset = 88;
        const targetPosition =
            element.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });

        window.history.pushState(null, "", `#${section}`);

        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current);
        }

        clickTimeout.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 900);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled
                ? "border-white/10 bg-[#0a0a0f]/85 shadow-lg backdrop-blur-xl"
                : "border-transparent bg-transparent"
                }`}
        >
            <div className="px-6 md:px-12">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-4">
                    <a
                        href="#home"
                        onClick={(event) => handleNavClick(event, "home")}
                        className="text-lg font-bold text-white transition hover:opacity-80"
                        aria-label="Go to home"
                    >
                        Fariz <span className="text-primary">Ammar.</span>
                    </a>

                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-8 text-sm font-medium md:flex"
                    >
                        {sections.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={(event) => handleNavClick(event, section)}
                                className={`relative py-1 transition ${activeSection === section
                                    ? "text-primary"
                                    : "text-white/70 hover:text-primary"
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}

                                <span
                                    className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary transition-transform duration-300 ${activeSection === section ? "scale-x-100" : "scale-x-0"
                                        }`}
                                />
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center md:flex">
                        <a
                            href="/documents/CV Fariz Ammar 2026 V1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 hover:shadow-primary/30"
                        >
                            Download CV
                            <Download className="h-4 w-4" />
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-primary/40 hover:text-primary md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`overflow-hidden border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav
                    aria-label="Mobile navigation"
                    className="flex flex-col gap-1 px-6 py-4"
                >
                    {sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            onClick={(event) => handleNavClick(event, section)}
                            className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${activeSection === section
                                ? "bg-primary/10 text-primary"
                                : "text-white/70 hover:bg-white/5 hover:text-primary"
                                }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}

                    <a
                        href="/documents/CV Fariz Ammar 2026 V1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                    >
                        Download CV
                        <Download className="h-4 w-4" />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;