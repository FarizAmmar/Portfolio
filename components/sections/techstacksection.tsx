"use client";

import {
    motion,
} from 'motion/react';
import { Button } from '@/components/ui/button';

import {
    Code2,
} from "lucide-react";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiLaravel,
    SiPhp,
    SiMysql,
    SiGit,
    SiDocker,
    SiWordpress,
    SiFigma,
} from "react-icons/si";

// ---------------------------------------------------------------------------
// Tech Stack Section
// ---------------------------------------------------------------------------
const TechStackSection = () => {
    const techStack: { name: string; icon: React.ElementType; color: string }[] = [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "WordPress", icon: SiWordpress, color: "#21759B" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "VS Code", icon: Code2, color: "#3DA5F4" },
    ];

    return (
        <section id="skills" className="relative scroll-mt-24 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Tech Stack <span className="w-2 h-2 rounded-full bg-primary" />
                </motion.h2>
                <p className="text-white/60 max-w-xl mb-8">
                    Technologies and tools I use to bring ideas to life and build
                    powerful digital solutions.
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3 hover:border-primary/40 hover:bg-white/10 transition-all"
                        >
                            <tech.icon
                                className="w-5 h-5 shrink-0"
                                style={{ color: tech.color }}
                            />
                            <span className="text-white text-sm font-medium truncate">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8">
                    <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                        View All Skills →
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;