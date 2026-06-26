"use client";

import { Button } from "@/components/ui/button";
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
    Send,
} from "lucide-react";
// Scheme
const schema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.email().min(1, "Email is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

// Infer
type FormData = z.infer<typeof schema>;


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
            <div className="max-w-7xl mx-auto">
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

export default ContactSection;