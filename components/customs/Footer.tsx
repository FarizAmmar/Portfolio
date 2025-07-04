import React from 'react';
import {Github, Instagram, Linkedin} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#111] border-t border-white/10 py-8 mt-24">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
                <p>&copy; {new Date().getFullYear()} Fariz Ammar. All rights reserved.</p>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/FarizAmmar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition"
                    >
                        <Github className="w-4 h-4"/>
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fariz-ammar-4b2a06226/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition"
                    >
                        <Linkedin className="w-4 h-4"/>
                        LinkedIn
                    </a>
                    <a
                        href="https://www.instagram.com/f.ammarsyq/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition"
                    >
                        <Instagram className="w-4 h-4"/>
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;