import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl font-sans pl-10">
            Fariz Ammar{" "}
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          {/* Toogle Theme */}
          <div className="px-10">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-2 items-center px-10">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {`Hi, I'm`} <span className="text-primary">Fariz Ammar</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A passionate full-stack developer specializing in creating
                beautiful and functional web experiences.
              </p>
              <div className="flex gap-4">
                <Button>
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">View Projects</Button>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/fariz-ammar-4b2a06226/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
                <Link href="mailto:contact@example.com">
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary shadow-xl">
                <Image
                  src="/images/fariz.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="container py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mt-4 text-muted-foreground">
                {`I'm`} a fullstack developer with 5 years of experience building
                web applications. I specialize in React, Laravel, and Next.js,
                creating robust and scalable solutions that combine powerful
                backend systems with intuitive frontend experiences.
              </p>
              <p className="mt-4 text-muted-foreground">
                When {`I'm`} not coding, you can find me hiking in the mountains,
                reading science fiction, or experimenting with new recipes in
                the kitchen.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="mt-2 text-muted-foreground">
                    Diploma in Computer Science
                    <br />
                    Universitas Pakuan
                    <br />
                    Graduated 2021
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <div className="mt-2 space-y-3">
                    <div>
                      <p className="font-medium">
                        PT Ringkat Teknologi Muliatama
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Fullstack Developer
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">PT Tripilar Kreasi Digital</p>
                      <p className="text-sm text-muted-foreground">
                        Fullstack Developer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="container py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Skills & Expertise
            </h2>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Tools & Others</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Redux",
                  ].map((skill) => (
                    <Card key={skill}>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="font-medium">{skill}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "GraphQL",
                    "REST API",
                    "Firebase",
                    "AWS",
                  ].map((skill) => (
                    <Card key={skill}>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="font-medium">{skill}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Git",
                    "GitHub",
                    "Docker",
                    "CI/CD",
                    "Jest",
                    "Figma",
                    "VS Code",
                    "Agile",
                  ].map((skill) => (
                    <Card key={skill}>
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="font-medium">{skill}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="container py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-stack e-commerce solution with payment integration and admin dashboard.",
                  tech: "Next.js, Stripe, MongoDB",
                },
                {
                  title: "Task Management App",
                  description:
                    "A collaborative task management tool with real-time updates and team features.",
                  tech: "React, Firebase, Tailwind CSS",
                },
                {
                  title: "Portfolio Website",
                  description:
                    "A responsive portfolio website showcasing projects and skills.",
                  tech: "Next.js, shadcn/ui, TypeScript",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">Tech: {project.tech}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        View Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Get In Touch
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        contact@example.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-muted-foreground">
                        linkedin.com/in/johndoe
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <Github className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-muted-foreground">
                        github.com/johndoe
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-10">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:contact@example.com">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
