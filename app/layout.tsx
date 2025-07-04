import {Poppins} from "next/font/google";
import {SpeedInsights} from "@vercel/speed-insights/next";

import "@/app/globals.css";
import type React from "react";
import {Analytics} from "@vercel/analytics/next";
import {ThemeProvider} from "@/components/providers/theme-provider";

interface LayoutProps {
    children: React.ReactNode;
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: {
        template: "%s | Fariz Ammar",
        default: "Fariz Ammar",
    },
    description:
        "A professional portfolio website built with Next.js and shadcn/ui",
};

export default function RootLayout({children}: Readonly<LayoutProps>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    );
}
