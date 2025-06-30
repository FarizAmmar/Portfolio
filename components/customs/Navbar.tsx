import {useEffect, useState} from "react";

const Navbar = () => {
    // State lists
    const [isScrolled, setIsScrolled] = useState(false);

    // On Scroll navbar
    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`
                fixed top-0 left-0 w-full z-20 px-6 md:px-12 py-4 transition-colors duration-300 ease-in-out
                ${isScrolled ? "bg-zinc-900/90 shadow-lg backdrop-blur" : "bg-transparent"}
            `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
                {/* Left: Logo / Brand */}
                <div className="font-bold text-lg">
                    <span>Fariz</span>
                    <span className="text-primary">Dev.</span>
                </div>

                {/* Middle: Navigation menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <a href="#hero" className="hover:text-primary transition">Home</a>
                    <a href="#projects" className="hover:text-primary transition">Projects</a>
                    <a href="#about" className="hover:text-primary transition">About</a>
                    <a href="#contact" className="hover:text-primary transition">Contact</a>
                </div>

                {/* Right: Action */}
                <div>
                    <a
                        href="/FarizAmmar_CV.pdf"
                        target="_blank"
                        className="bg-primary px-4 py-2 rounded-md text-sm font-semibold hover:bg-secondary hover:text-zinc-900 transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
