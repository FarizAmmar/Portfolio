"use client"

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import Navbar from "@/components/customs/Navbar";
import Link from "next/link";
import {useEffect, useState} from "react";
import {animate, motion, stagger} from "motion/react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {TypeAnimation} from "react-type-animation";
import {Github, Instagram, Linkedin} from "lucide-react";
import Footer from "@/components/customs/Footer";
import {useForm} from "react-hook-form";
import {z} from "zod/v4";
import {zodResolver} from "@hookform/resolvers/zod";
import axios, {AxiosError} from "axios";
import Swal from "sweetalert2";

// Particles Type
type Particle = {
    top: number;
    left: number;
    color: string;
};

// Scheme
const schema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.email().min(1, "Email is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

// Infer
type FormData = z.infer<typeof schema>;

// Main layout
const AppLayout = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <div className="flex flex-col space-y-24 scroll-smooth">
                {/* Hero Section */}
                <HeroSection/>

                {/* About Section */}
                <AboutSection/>

                {/* Skills Section */}
                <SkillSection/>

                {/* Projects Section */}
                <ProjectSection/>

                {/* Contact Section */}
                <ContactSection/>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
};

// Hero Section
const HeroSection = () => {
    // State lists
    const [particles, setParticles] = useState<Particle[]>([]);

    // Animate in on mount
    useEffect(() => {
        animate(
            ".hero-fade",
            {opacity: [0, 1], transform: ["translateY(40px)", "translateY(0px)"]},
            {duration: 0.8, delay: stagger(0.15)}
        );

        const particles = document.querySelectorAll(".scroll-particle");
        let lastScroll = 0;

        const handleScroll = () => {
            const now = Date.now();
            if (now - lastScroll < 100) return;
            lastScroll = now;

            particles.forEach((el) => {
                const dx = (Math.random() - 0.5) * 10;
                const dy = (Math.random() - 0.5) * 10;
                animate(el, {transform: `translate(${dx}px, ${dy}px)`}, {duration: 0.5});
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Generate particles only on desktop
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth <= 768) return; // skip mobile

        const colors = ["#ff6b6b", "#6bc1ff", "#a07fff", "#feca57", "#1dd1a1", "#ff9ff3", "#f368e0", "#10ac84"];
        const newParticles: Particle[] = [];

        while (newParticles.length < 8) {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const color = colors[Math.floor(Math.random() * colors.length)];
            newParticles.push({top, left, color});
        }

        setParticles(newParticles);
    }, []);

    return (
        <section
            id="home"
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
    return (
        <section id="about" className="relative scroll-mt-16 py-10 px-6 md:px-8 max-w-6xl mx-auto">
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-zinc-800 dark:text-white"
                initial={{opacity: 0, y: -30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, ease: "easeOut"}}
                viewport={{once: true}}
            >
                About Me
            </motion.h2>

            <TypeAnimation
                className="text-center text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-zinc-700 dark:text-zinc-300 mb-16"
                sequence={[
                    "I'm a passionate fullstack web developer focused on building interactive, scalable, and user-friendly applications using React, Laravel, and modern web technologies.",
                ]}
                wrapper="p"
                speed={60}
                repeat={0}
            />

            <div className="grid md:grid-cols-2 gap-12">
                {/* Education Section */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                    viewport={{once: true}}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-teal-400">🎓 Education</h3>
                    <div className="space-y-5 text-zinc-700 dark:text-zinc-300">
                        <div>
                            <p className="text-lg font-medium">Diploma – Computer Engineering</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Universitas Pakuan, 2021</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium">High School – Network Engineering</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">SMK Taruna Terpadu, 2018</p>
                        </div>
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                    viewport={{once: true}}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-teal-400">💼 Work Experience</h3>
                    <div className="space-y-5 text-zinc-700 dark:text-zinc-300">
                        <div>
                            <p className="text-lg font-medium">Fullstack Developer – PT Tripilar Digital Kreasi</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">2023 – Present</p>
                            <p className="text-sm mt-1">Developing scalable web apps with Laravel, MySQL, and React.
                                Collaborating with UI/UX to deliver seamless user experiences.</p>
                        </div>
                        <div>
                            <p className="text-lg font-medium">Fullstack Developer – Ringkat Teknologi Muliautama</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">2021 – 2023</p>
                            <p className="text-sm mt-1">Built internal tools with C# & SQL Server, optimized enterprise
                                apps and maintained smooth back-office workflows.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Skill Section
const SkillSection = () => {
    // Skill List
    const skillCategories: Record<string, string[]> = {
        Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", 'Bootstrap', 'Shadcn', "WordPress (CMS)", 'Elementor'],
        Backend: ["Laravel", "Node.js", "MySQL", "PostgreSQL"],
        Tools: ["Git"],
    };

    const tabs = Object.keys(skillCategories);

    // State List
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id="skills" className="container scroll-mt-16 mx-auto px-4 py-10">
            <motion.h2
                className="text-3xl font-bold mb-8 text-primary text-center"
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                viewport={{once: true, amount: 0.5}}
            >
                Skills
            </motion.h2>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full border cursor-pointer ${
                            activeTab === tab
                                ? "bg-primary text-white border-primary"
                                : "bg-white/10 border-white/20 text-white hover:bg-primary/20"
                        } transition-all`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillCategories[activeTab].map((skill, i) => (
                    <motion.div
                        key={skill}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: i * 0.05, duration: 0.4}}
                        viewport={{once: true}}
                    >
                        <Card
                            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl hover:shadow-md hover:shadow-primary/30 hover:scale-[1.05] transition-all duration-300">
                            <CardContent
                                className="flex items-center justify-center h-24 font-semibold text-white text-lg text-center px-2">
                                {skill}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// Projects Section
const ProjectSection = () => {
    // Project List
    const projects = [
        {
            id: 1,
            title: "Galadakara",
            desc: "A company profile website built with WordPress and Elementor for an event organizing company. It showcases their services, portfolio, and contact information in a modern and responsive design.",
            img: "/projects/galadakara.png",
            href: "https://galadakara.id/"
        },
        {
            id: 2,
            title: "Sudah Digital",
            desc: "A web-based CRM-like financial management system designed to help companies manage sales processes and client transactions. Built with React and Laravel, it features e-commerce-style interfaces tailored for business operations.",
            img: "/projects/sudahdigital.png",
            href: "https://sudahdigital.com/"
        },
    ];

    return (
        <section id="projects" className="relative scroll-mt-16 py-16 bg-gradient-to-b from-[#1b1b1b] to-[#111]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-primary text-center">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: i * 0.1}}
                            viewport={{once: true}}
                            className="group bg-[#222] rounded-xl overflow-hidden cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"/>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                                <p className="text-white/70">{p.desc}</p>
                                <Link href={p.href}
                                      className="inline-block mt-4 text-primary font-medium group-hover:underline"
                                      target={"_blank"}>
                                    View Project →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Contact Section
const ContactSection = () => {
    // State List
    // Form init
    const form = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
        resolver: zodResolver(schema)
    });

    // Submit
    const onSubmit = async (data: FormData) => {
        // Show loading SweetAlert
        Swal.fire({
            title: "Sending...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const res = await axios.post("/api/send-email", data);

            if (res.status !== 200) throw new Error("Gagal mengirim email");

            // Sukses
            form.reset();

            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Your message has been sent!.",
            });
        } catch (error: AxiosError) {
            console.error("Axios error:", error);
        }
    };

    return (
        <section id="contact" className="container scroll-mt-40 mx-auto px-4 pb-24">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Contact</h2>
            <p className="text-white/80 mb-8 text-center max-w-2xl mx-auto">
                {"I'm"} always open to discuss projects, collaborations, or just a friendly hello. Feel free to drop a
                message!
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Form */}
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div>
                        <label className="block text-white/70 text-sm mb-1" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your Name"
                            {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-white/70 text-sm mb-1" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="you@example.com"
                            {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-white/70 text-sm mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Write your message..."
                            {...form.register("message")}
                        ></textarea>
                        {form.formState.errors.message && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                        )}
                    </div>

                    <Button
                        size="lg"
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-white cursor-pointer"
                    >
                        Send Message
                    </Button>
                </form>

                {/* Contact Info */}
                <div className="text-white/80 space-y-6">
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Email</h4>
                        <a href="mailto:f.ammarsyq11@gmail.com"
                           className="hover:underline text-primary">f.ammarsyq11@gmail.com</a>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Location</h4>
                        <p>Indonesia (Open to remote)</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Socials</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/FarizAmmar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-primary transition"
                            >
                                <Github className="w-5 h-5"/>
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fariz-ammar-4b2a06226/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-primary transition"
                            >
                                <Linkedin className="w-5 h-5"/>
                                LinkedIn
                            </a>
                            <a
                                href="https://www.instagram.com/f.ammarsyq/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-primary transition"
                            >
                                <Instagram className="w-5 h-5"/>
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppLayout;
