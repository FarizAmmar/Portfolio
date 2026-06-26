"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Quote,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Experience Section
// ---------------------------------------------------------------------------
const experiences = [
    {
        period: "2023 – Present",
        role: "Fullstack Developer",
        company: "PT Tripilar Digital Kreasi",
        desc: "Developing scalable web applications using Laravel, MySQL, and React. Collaborating with UI/UX to deliver seamless user experiences.",
        tags: ["Laravel", "React", "MySQL", "REST API", "Git"],
        current: true,
    },
    {
        period: "2022 – 2023",
        role: "Fullstack Developer",
        company: "Ringkat Teknologi Muliautama",
        desc: "Built internal tools with C# & SQL Server, optimized enterprise apps and maintained smooth back-office workflows.",
        tags: ["C#", "SQL Server", "ASP.NET", "JavaScript"],
    },
    {
        period: "2021 – 2022",
        role: "Junior Web Developer",
        company: "Freelance",
        desc: "Built company websites, landing pages, and custom solutions for various clients.",
        tags: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    },
];


const testimonials = [
    {
        quote:
            "Fariz is a dedicated developer who consistently delivers high-quality work. He's proactive, communicates well, and always meets deadlines.",
        name: "Client / Team Lead",
    },
    {
        quote:
            "Reliable and detail-oriented — Fariz turned our requirements into a polished product faster than we expected.",
        name: "Project Manager",
    },
    {
        quote:
            "Great communicator and problem solver. Working with Fariz felt like having an extension of our own team.",
        name: "Product Owner",
    },
];


const ExperienceSection = () => {
    const [active, setActive] = useState(0);

    return (
        <section
            id="experience"
            className="relative scroll-mt-24 py-16 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-2">
                    Experience <span className="w-2 h-2 rounded-full bg-primary" />
                </h2>

                <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
                    {/* Timeline */}
                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role + exp.period}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4"
                            >
                                <div className="relative">
                                    <p
                                        className={`text-sm font-medium ${exp.current ? "text-primary" : "text-white/50"
                                            }`}
                                    >
                                        {exp.period}
                                    </p>
                                    {i < experiences.length - 1 && (
                                        <span className="absolute left-0 top-6 -bottom-10 w-px bg-white/10 hidden sm:block" />
                                    )}
                                    <span
                                        className={`hidden sm:inline-block absolute -left-1.75 top-1 w-3 h-3 rounded-full border-2 ${exp.current
                                            ? "bg-primary border-primary"
                                            : "bg-transparent border-white/30"
                                            }`}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">
                                        {exp.role} – {exp.company}
                                    </h3>
                                    <p className="text-white/60 text-sm mt-1 mb-3">
                                        {exp.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 h-fit"
                    >
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={active}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/80 leading-relaxed mb-6"
                            >
                                {testimonials[active].quote}
                            </motion.p>
                        </AnimatePresence>
                        <p className="text-white font-medium mb-4">
                            — {testimonials[active].name}
                        </p>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    aria-label={`Show testimonial ${i + 1}`}
                                    className={`h-2 rounded-full transition-all cursor-pointer ${i === active ? "w-6 bg-primary" : "w-2 bg-white/20"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;