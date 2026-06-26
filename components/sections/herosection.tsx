"use client";

import Link from 'next/link';
import {
    animate,
    stagger
} from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';

import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    Rocket,
    Code2,
    Users,
    Trophy,
    Send,
} from "lucide-react";

// Particles Type
type Particle = {
    top: number;
    left: number;
    color: string;
};

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
const HeroSection = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        animate(
            ".hero-fade",
            { opacity: [0, 1], transform: ["translateY(40px)", "translateY(0px)"] },
            { duration: 0.8, delay: stagger(0.15) },
        );
    }, []);

    // Starfield dots — generate sekali, ringan (tanpa blur/shadow)
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (prefersReducedMotion) return;

        const newParticles: Particle[] = Array.from({ length: 26 }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            color: "#ffffff",
        }));
        setParticles(newParticles);
    }, []);

    const socials = [
        { icon: Github, href: "https://github.com/FarizAmmar" },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/fariz-ammar-4b2a06226/",
        },
        { icon: Instagram, href: "https://www.instagram.com/f.ammarsyq/" },
        { icon: Mail, href: "mailto:f.ammarsyq11@gmail.com" },
    ];

    const stats = [
        { icon: Rocket, value: "5+", label: "Years Experience" },
        { icon: Code2, value: "5+", label: "Projects Completed" },
        { icon: Users, value: "5+", label: "Happy Clients" },
        { icon: Trophy, value: "87%", label: "Client Satisfaction" },
    ];

    return (
        <section
            id="home"
            className="relative min-h-svh flex flex-col justify-center bg-[#08070d] text-white px-6 md:px-12 py-20 overflow-hidden pt-28"
        >
            {/* Twinkle animation - pure CSS, jalan di compositor thread, sangat ringan */}
            <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.85; }
        }
        .star-dot {
          animation: star-twinkle ease-in-out infinite;
        }
      `}</style>

            {/* Starfield - dot kecil, tanpa blur/shadow, jauh lebih murah dari orb besar */}
            {particles.map((p, i) => (
                <span
                    key={i}
                    className="star-dot absolute rounded-full bg-white pointer-events-none z-0"
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        width: i % 5 === 0 ? "3px" : "2px",
                        height: i % 5 === 0 ? "3px" : "2px",
                        animationDuration: `${3 + (i % 4)}s`,
                        animationDelay: `${(i % 6) * 0.4}s`,
                    }}
                />
            ))}

            {/* Glow statis - tanpa animasi, cuma dirender sekali jadi nggak makan CPU/GPU per frame */}
            <div className="absolute w-175 h-175 bg-violet-600/10 blur-[160px] rounded-full -top-40 -left-40 z-0" />
            <div className="absolute w-125 h-125 bg-blue-600/10 blur-[160px] rounded-full top-10 -right-20 z-0" />

            {/* Main Hero */}
            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                {/* Left */}
                <div>
                    <span className="hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available for work
                    </span>

                    <h1 className="hero-fade text-5xl md:text-7xl leading-[1.1] font-bold text-white">
                        Hi, I’m <span className="text-primary">Fariz Ammar</span>
                    </h1>

                    <p className="hero-fade mt-6 text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed">
                        Fullstack Developer who builds{" "}
                        <span className="text-primary font-semibold">modern</span>,{" "}
                        <span className="text-pink-400 font-semibold">fast</span>, and{" "}
                        <span className="text-blue-400 font-semibold">scalable</span> web
                        applications.
                    </p>

                    <p className="hero-fade mt-4 text-white/60 max-w-xl leading-relaxed">
                        I specialize in building exceptional digital experiences using
                        React, Next.js, Laravel, and modern technologies.
                    </p>

                    <div className="hero-fade mt-8 flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="bg-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition duration-500 ease-in-out shadow-lg shadow-primary/30 inline-flex items-center gap-2"
                        >
                            View My Work →
                        </Link>
                        <Link
                            href="#contact"
                            className="border border-white/20 font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition duration-500 ease-in-out inline-flex items-center gap-2"
                        >
                            Contact Me <Send className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="hero-fade mt-8 flex items-center gap-4">
                        <span className="text-white/50 text-sm">Let’s connect</span>
                        <div className="flex gap-3">
                            {socials.map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-primary hover:border-primary transition"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="hero-fade relative">
                    {/* Glow di belakang card */}
                    <div className="absolute -inset-2 bg-linear-to-br from-primary/40 via-violet-500/30 to-blue-500/40 rounded-2xl blur-2xl opacity-70 animate-pulse" />

                    {/* Card-nya sendiri */}
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 space-y-6 border border-white/10 text-center shadow-2xl shadow-primary/20">
                        <div className="relative inline-block">
                            <Avatar className="mx-auto w-35 h-35 border-2 border-white shadow-xl">
                                <AvatarImage
                                    src="/images/fariz-profile.jpg"
                                    alt="Fariz Ammar"
                                    className="w-full h-full object-cover object-center"
                                />
                                <AvatarFallback className="text-primary">FA</AvatarFallback>
                            </Avatar>
                            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#1c1c2e]" />
                        </div>

                        <h3 className="text-white font-semibold text-2xl">Quick Info</h3>
                        <div className="space-y-3 text-white/80 text-base text-left">
                            <div className="flex justify-between">
                                <span className="text-white/50">Location</span>
                                <span>Indonesia</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/50">Experience</span>
                                <span>5+ Years</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/50">Speciality</span>
                                <span>Fullstack Web Developer</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/50">Stack</span>
                                <span>React • Laravel • Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat cards under hero (kept here for visual continuity with the design) */}
            <div className="relative z-10 max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="hero-fade bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:border-primary/40 transition-all duration-500"
                    >
                        <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                        <p className="text-3xl font-bold text-white">{s.value}</p>
                        <p className="text-white/60 text-sm mt-1">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;