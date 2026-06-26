"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Send,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Projects Section
// ---------------------------------------------------------------------------
type Project = {
    id: number;
    title: string;
    desc: string;
    img?: string;
    href: string;
    tags: string[];
    featured?: boolean;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Sudah Digital",
        desc: "A web-based ERP-like financial management system designed to help companies manage sales processes and client transactions.",
        img: "/projects/sudahdigital.png",
        href: "https://sudahdigital.com/",
        tags: ["Laravel", "MySQL", "React", "Tailwind CSS"],
        featured: true,
    },
    {
        id: 2,
        title: "Galadakara",
        desc: "Company profile website for a corporate event organizer.",
        img: "/projects/galadakara.png",
        href: "https://galadakara.id/",
        tags: ["WordPress", "PHP", "JavaScript"],
    },
    {
        id: 3,
        title: "E-Commerce Dashboard",
        desc: "Admin dashboard for managing products, orders, customers, and analytics.",
        img: "/projects/artisan.png",
        href: "#",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
];


const ProjectSection = () => {
    const featured = projects.find((p) => p.featured) ?? projects[0];
    const rest = projects.filter((p) => p.id !== featured.id);
    const [page, setPage] = useState(0);
    const perPage = 3;
    const pages = Math.max(1, Math.ceil(rest.length / perPage));
    const visible = rest.slice(page * perPage, page * perPage + perPage);

    return (
        <section
            id="projects"
            className="relative scroll-mt-24 py-16 px-6 md:px-12 bg-linear-to-b from-transparent to-[#0d0d14]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
                        Selected Projects{" "}
                        <span className="w-2 h-2 rounded-full bg-primary" />
                    </h2>
                    <Link
                        href="#projects"
                        className="text-primary text-sm font-medium hover:underline hidden sm:block"
                    >
                        View All Projects →
                    </Link>
                </div>

                {/* Featured Project */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8"
                >
                    <div className="relative rounded-xl overflow-hidden bg-black/30 aspect-video">
                        {featured.img ? (
                            <Image
                                src={featured.img}
                                alt={featured.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                                {featured.title}
                            </div>
                        )}
                    </div>
                    <div>
                        <span className="text-primary text-xs font-bold tracking-wider uppercase">
                            Featured Project
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                            {featured.title}
                        </h3>
                        <p className="text-white/70 mb-4">{featured.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {featured.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href={featured.href}
                                target="_blank"
                                className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition inline-flex items-center gap-2"
                            >
                                Live Demo <Send className="w-4 h-4" />
                            </Link>
                            <Link
                                href={featured.href}
                                target="_blank"
                                className="border border-white/20 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition"
                            >
                                View Case Study →
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {visible.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 transition"
                            >
                                <div className="relative h-40 bg-black/30">
                                    {p.img ? (
                                        <Image
                                            src={p.img}
                                            alt={p.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                                            {p.title}
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <h3 className="text-white font-semibold mb-1.5">
                                        {p.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-3 line-clamp-2">
                                        {p.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {p.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={p.href}
                                        target="_blank"
                                        className="text-primary text-sm font-medium hover:underline"
                                    >
                                        View Project →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Pagination dots */}
                {pages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: pages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                aria-label={`Go to project page ${i + 1}`}
                                className={`h-2 rounded-full transition-all cursor-pointer ${i === page ? "w-6 bg-primary" : "w-2 bg-white/20"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;