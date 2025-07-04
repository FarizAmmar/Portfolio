import {useEffect, useState} from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

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
                        prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
                    );
                    setActiveSection(topMost.target.id);
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -60% 0px",
                threshold: 0.1,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-20 px-6 md:px-12 py-4 transition-colors duration-300 ease-in-out ${
                isScrolled
                    ? "bg-zinc-100/20 dark:bg-secondary/80 shadow-lg backdrop-blur"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
                {/* Left: Logo */}
                <div className="font-bold text-lg">
                    <span>Fariz</span>
                    <span className="text-violet-300">Dev.</span>
                </div>

                {/* Middle: Navigation */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`transition hover:text-primary ${
                                activeSection === section ? "text-primary" : "text-white/80"
                            }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>

                {/* Right: Download CV */}
                <div className="flex items-center gap-2">
                    <a
                        href="/FarizAmmar_CV.pdf"
                        target="_blank"
                        className="px-4 py-2 rounded-md text-sm font-semibold transition duration-500 ease-in-out
              bg-primary text-white
              dark:bg-white/10 dark:text-white dark:backdrop-blur-md dark:border dark:border-white/20
              hover:bg-indigo-200 dark:hover:bg-white/20"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
