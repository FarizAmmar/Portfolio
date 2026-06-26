"use client";

import Link from "next/link";
import { motion, } from "motion/react";
import {
    Rocket,
} from "lucide-react";

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
                className="max-w-7xl mx-auto bg-linear-to-r from-primary via-violet-600 to-indigo-600 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
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

export default CTASection;