"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/customs/Navbar";
import Footer from "@/components/customs/Footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate, motion, stagger, AnimatePresence } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Rocket,
  Code2,
  Users,
  Trophy,
  Quote,
  Send,
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
});

// Infer
type FormData = z.infer<typeof schema>;

// Main layout
const AppLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col scroll-smooth bg-[#0a0a0f]">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Projects Section */}
        <ProjectSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
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
    const particleEls = document.querySelectorAll(".scroll-particle");
    let lastScroll = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScroll < 100) return;
      lastScroll = now;
      particleEls.forEach((el) => {
        const dx = (Math.random() - 0.5) * 10;
        const dy = (Math.random() - 0.5) * 10;
        animate(
          el,
          { transform: `translate(${dx}px, ${dy}px)` },
          { duration: 0.5 },
        );
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) return;
    const colors = [
      "#ff6b6b",
      "#6bc1ff",
      "#a07fff",
      "#feca57",
      "#1dd1a1",
      "#ff9ff3",
      "#f368e0",
      "#10ac84",
    ];
    const newParticles: Particle[] = [];
    while (newParticles.length < 8) {
      newParticles.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
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
    { icon: Code2, value: "20+", label: "Projects Completed" },
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Trophy, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 md:px-12 py-20 overflow-hidden pt-28"
    >
      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="scroll-particle absolute w-24 h-24 rounded-full blur-2xl brightness-100 shadow-[0_0_18px_rgba(255,255,255,0.5)] z-0"
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, -14, 0], x: i % 2 === 0 ? [0, 8, 0] : [0, -8, 0] }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            backgroundColor: p.color,
          }}
        />
      ))}

      {/* Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-[180px] opacity-20 top-0 -left-32 z-0" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 blur-[160px] opacity-10 bottom-10 right-10 z-0" />

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
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 via-violet-500/30 to-blue-500/40 rounded-2xl blur-2xl opacity-70 animate-pulse" />

          {/* Card-nya sendiri */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 space-y-6 border border-white/10 text-center shadow-2xl shadow-primary/20">
            <div className="relative inline-block">
              <Avatar className="mx-auto w-[140px] h-[140px] border-2 border-white shadow-xl">
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

// ---------------------------------------------------------------------------
// Stats Section (anchor target for "About")
// ---------------------------------------------------------------------------
const StatsSection = () => {
  // The hero already renders the stat cards for visual continuity with the
  // reference design — this empty, anchorable section just gives the
  // navbar's "About" link a target to scroll to.
  return <div id="about" className="scroll-mt-24" />;
};

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
      <div className="max-w-6xl mx-auto">
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
    desc: "A web-based CRM-like financial management system designed to help companies manage sales processes and client transactions.",
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
    href: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Tech Blog Platform",
    desc: "Blog platform with authentication, markdown editor, and dynamic content.",
    href: "#",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
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
      className="relative scroll-mt-24 py-16 px-6 md:px-12 bg-gradient-to-b from-transparent to-[#0d0d14]"
    >
      <div className="max-w-6xl mx-auto">
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
      <div className="max-w-6xl mx-auto">
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
                    className={`hidden sm:inline-block absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 ${exp.current
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

// ---------------------------------------------------------------------------
// CTA Section
// ---------------------------------------------------------------------------
const CTASection = () => {
  return (
    <section className="px-6 md:px-12 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-gradient-to-r from-primary via-violet-600 to-indigo-600 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl">
              Let’s build something amazing together
            </h3>
            <p className="text-white/80 text-sm mt-1">
              I’m currently available for freelance projects and full-time
              opportunities.
            </p>
          </div>
        </div>
        <Link
          href="#contact"
          className="shrink-0 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition inline-flex items-center gap-2"
        >
          Let’s Work Together →
        </Link>
      </motion.div>
    </section>
  );
};

// ---------------------------------------------------------------------------
// Contact Section
// ---------------------------------------------------------------------------
const ContactSection = () => {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
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

      form.reset();

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent!.",
      });
    } catch (error) {
      console.error("Axios error:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
      });
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "farizammar@gmail.com" },
    { icon: MapPin, label: "Location", value: "Indonesia (Open to remote)" },
    { icon: Clock, label: "Response Time", value: "Usually within 24 hours" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/FarizAmmar" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fariz-ammar-4b2a06226/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/f.ammarsyq/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-16 px-6 md:px-12 pb-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-2">
          Get In Touch <span className="w-2 h-2 rounded-full bg-primary" />
        </h2>
        <p className="text-white/60 mb-10 max-w-xl">
          Have a project in mind or just want to say hello? Feel free to
          reach out!
        </p>

        <div className="grid md:grid-cols-[0.9fr_1.4fr_0.9fr] gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-white font-medium text-sm">
                    {item.label}
                  </p>
                  <p className="text-white/60 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Your Name"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Your Email"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="Your Message"
                {...form.register("message")}
              ></textarea>
              {form.formState.errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <Button
              size="lg"
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white cursor-pointer"
            >
              Send Message <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Follow Me */}
          <div>
            <p className="text-white font-semibold mb-1">Follow Me</p>
            <p className="text-white/60 text-sm mb-4">
              Let’s connect and build something great!
            </p>
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 text-white/80 hover:border-primary/40 hover:text-primary transition"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppLayout;