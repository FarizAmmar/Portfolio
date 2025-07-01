import {useEffect, useState} from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

const Navbar = () => {
    // Theme Generator
    const {setTheme} = useTheme()

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
                ${isScrolled ? "bg-zinc-100/20 dark:bg-secondary/80 shadow-lg backdrop-blur" : "bg-transparent"}
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
                <div className="flex items-center justify-between gap-2">
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

                    <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer" asChild>
                            <Button variant="outline" size="icon">
                                <Sun
                                    className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-zinc-900 transition-all dark:scale-0 dark:-rotate-90"/>
                                <Moon
                                    className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
