"use client"

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Navbar from "@/components/customs/Navbar";
import Link from "next/link";
import {useEffect, useState} from "react";
import {animate, motion, stagger} from "motion/react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {TypeAnimation} from "react-type-animation";

// Particles Type
type Particle = {
    top: number;
    left: number;
    color: string;
};

// Main layout
const AppLayout = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <div className="flex flex-col space-y-24 scroll-smooth text-white bg-[#0f0f0f]">
                {/* Hero Section */}
                <HeroSection/>

                {/* About Section */}
                <AboutSection/>

                {/* Skills Section */}
                <section id="skills" className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["React", "Next.js", "Laravel", "Tailwind CSS", "TypeScript", "Node.js", "MySQL", "Git"].map((skill) => (
                            <Card key={skill}
                                  className="bg-[#1f1f1f] border-none shadow-md hover:shadow-orange-400/40 transition">
                                <CardContent className="flex items-center justify-center h-24 font-medium text-white">
                                    {skill}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2].map((project) => (
                            <Card key={project}
                                  className="bg-[#1f1f1f] border-none shadow-md hover:shadow-orange-500/30 transition">
                                <CardHeader>
                                    <CardTitle className="text-white">Project {project}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/70">
                                        Description of project {project}. Brief overview of what it does and what stack
                                        you
                                        used.
                                    </p>
                                    <Button variant="link" className="mt-4 p-0 text-primary hover:underline">
                                        View Project →
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="container mx-auto px-4 pb-24">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Contact</h2>
                    <p className="text-white/80 mb-4">
                        Feel free to reach out for collaborations or just a friendly chat.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary text-white">
                        Say Hello
                    </Button>
                </section>
            </div>
        </>
    );
};

// Hero Section
const HeroSection = () => {
    // State lists
    const [particles, setParticles] = useState<Particle[]>([]);

    // On Load
    useEffect(() => {
        // Fade + slide on mount
        animate(
            ".hero-fade",
            {opacity: [0, 1], transform: ["translateY(40px)", "translateY(0px)"]},
            {duration: 0.8, delay: stagger(0.15)}
        );

        // Particle reaction on scroll
        const particles = document.querySelectorAll(".scroll-particle");
        const handleScroll = () => {
            particles.forEach((el) => {
                const dx = (Math.random() - 0.5) * 20;
                const dy = (Math.random() - 0.5) * 20;
                animate(el, {transform: `translate(${dx}px, ${dy}px)`}, {duration: 0.5});
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Particles
    useEffect(() => {
        const colors = ["#ff6b6b", "#6bc1ff", "#a07fff", "#feca57", "#1dd1a1", "#ff9ff3", "#f368e0", "#10ac84"];
        const minDistance = 10;
        const newParticles: Particle[] = [];

        while (newParticles.length < 20) {
            const candidate = {
                top: Math.random() * 100,
                left: Math.random() * 100,
                color: colors[Math.floor(Math.random() * colors.length)],
            };

            const isTooClose = newParticles.some((p) => {
                const dx = p.left - candidate.left;
                const dy = p.top - candidate.top;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < minDistance;
            });

            if (!isTooClose) {
                newParticles.push(candidate);
            }
        }

        setParticles(newParticles);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-svh flex flex-col justify-between bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 md:px-12 py-16 overflow-hidden pt-24"
        >
            {/* Particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-20 h-20 rounded-full blur-xl brightness-100 shadow-[0_0_12px_rgba(255,255,255,0.5)] z-0"
                    initial={{y: 0, x: 0}}
                    animate={{
                        y: [0, -12, 0],
                        x: i % 2 === 0 ? [0, 6, 0] : [0, -6, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        backgroundColor: p.color,
                    }}
                />
            ))}

            {/* Background Glow */}
            <div
                className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-[180px] opacity-20 top-0 -left-32 z-0"/>
            <div
                className="absolute w-[400px] h-[400px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 blur-[160px] opacity-10 bottom-10 right-10 z-0"/>

            {/* Top Hero */}
            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="hero-fade text-4xl md:text-6xl leading-tight text-white">
                        Hi, I’m <span className="font-bold">Fariz Ammar</span>
                    </h1>
                    <p className="hero-fade mt-4 text-xl text-white/80 max-w-md">
                        A Fullstack Developer who crafts modern web applications using{" "}
                        <strong>React</strong>, <strong>Next.js</strong>, and <strong>Laravel</strong>.
                    </p>
                    <div className="hero-fade mt-6 flex flex-wrap">
                        <Link
                            href="#projects"
                            className="bg-primary font-semibold px-4 py-2 rounded-lg hover:bg-secondary-foreground hover:text-zinc-800 transition duration-700 ease-in-out"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>

                {/* Info Card */}
                <div
                    className="hero-fade bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-4 border border-white/10 text-center">
                    {/* Avatar */}
                    <Avatar className="mx-auto w-[100px] h-[100px] border-2 border-white brightness-125 shadow-md">
                        <AvatarImage src="/images/fariz.jpg" alt="Fariz Ammar"/>
                        <AvatarFallback className="text-primary">FA</AvatarFallback>
                    </Avatar>

                    <h3 className="text-white font-semibold text-xl mt-2">Quick Info</h3>

                    <div className="space-y-2 text-white/80 text-sm text-left">
                        <div className="flex justify-between">
                            <span>Location</span>
                            <span>Indonesia</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Experience</span>
                            <span>4+ Years</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Specialty</span>
                            <span>Fullstack Dev</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Stack</span>
                            <span>React + Laravel</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Cards */}
            <div className="relative z-10 max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
                {[
                    {
                        title: "Crafting Modern Interfaces",
                        desc: "I design and develop responsive, accessible, and beautiful UIs with great user experience.",
                    },
                    {
                        title: "Performance & Optimization",
                        desc: "Always optimizing apps for speed, scalability, and maintainability.",
                    },
                    {
                        title: "Reliable Collaboration",
                        desc: "Team player who writes clean code and communicates effectively with devs, designers, and clients.",
                    },
                ].map((card) => (
                    <div
                        key={card.title}
                        className="hero-fade bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-500 ease-in-out"
                    >
                        <h4 className="text-white font-semibold text-lg mb-2">{card.title}</h4>
                        <p className="text-white/70 text-sm">{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// About Section
const AboutSection = () => {
    // State lists
    const [particles, setParticles] = useState<{ top: number; left: number; char: string; color: string }[]>([]);

    // On load
    useEffect(() => {
        const colors = ["#ff6b6b", "#6bc1ff", "#a07fff", "#feca57", "#1dd1a1", "#ff9ff3", "#f368e0", "#10ac84"];
        const chars = ["X", "O"];
        const newParticles = [];

        while (newParticles.length < 20) {
            newParticles.push({
                top: Math.random() * 100,
                left: Math.random() * 100,
                char: chars[Math.floor(Math.random() * chars.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        setParticles(newParticles);
    }, []);

    return (
        <section id="about" className="container mx-auto max-w-6xl z-10 relative">
            {/* Particle background */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute text-5xl font-bold select-none pointer-events-none"
                    initial={{y: 0, x: 0}}
                    animate={{
                        y: [0, -10, 0],
                        x: i % 2 === 0 ? [0, 6, 0] : [0, -6, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        color: p.color,
                        position: 'absolute',
                        opacity: 0.6,
                    }}
                >
                    {p.char}
                </motion.div>
            ))}

            <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-lg">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center"
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.4,
                        scale: {type: "spring", visualDuration: 0.4, bounce: 0.4}
                    }}
                    viewport={{once: true, amount: 0.5}}
                >
                    About Me
                </motion.h2>

                <TypeAnimation
                    className="text-white text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16"
                    sequence={[
                        'I’m a passionate fullstack web developer. I specialize in building interactive and high-performance applications. Using technologies like React, Next.js, and Laravel. I enjoy solving complex problems and crafting smooth, user-friendly experiences.'
                    ]}
                    wrapper="p"
                    speed={60}
                    repeat={0}
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            type: 'spring',
                            bounce: 0.2,
                        }}
                        viewport={{once: true, amount: 0.5}}>
                        <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-lg font-medium">Diploma – Computer Engineering</p>
                                <p className="text-muted-foreground text-sm">Universitas Pakuan – Graduated in 2021</p>
                            </div>
                            <div>
                                <p className="text-lg font-medium">High School – Computer and Network Engineering</p>
                                <p className="text-muted-foreground text-sm">SMK Taruna Terpadu – Graduated in 2018</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            type: 'spring',
                            bounce: 0.2,
                        }}
                        viewport={{once: true, amount: 0.9}}>
                        <h3 className="text-2xl font-semibold text-primary mb-4">Work Experience</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-lg font-medium">Fullstack Developer – PT Tripilar Digital Kreasi</p>
                                <p className="text-muted-foreground text-sm">2023–Present</p>
                                <p className="text-muted-foreground text-sm mt-1">
                                    Building and maintaining scalable web applications using Laravel, MySQL, and React.
                                    Collaborate with UI/UX designers and backend teams to deliver responsive,
                                    high-performance user experiences.
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-medium">Fullstack Developer – Ringkat Teknologi
                                    Muliautama</p>
                                <p className="text-muted-foreground text-sm">2021–2023</p>
                                <p className="text-muted-foreground text-sm mt-1">
                                    Developed internal tools and business applications using C#, DevExpress, and SQL
                                    Server.
                                    Designed and implemented
                                    robust back-office features, optimized database queries, and maintained a smooth
                                    user
                                    experience in enterprise environments.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AppLayout;
