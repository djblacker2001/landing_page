"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    bg?: "dark" | "light" | "qwaste";
}

export function Section({ id, className, children, bg = "dark" }: SectionProps) {
    const bgStyles = {
        dark: "bg-zinc-950 text-white",
        light: "bg-zinc-50 text-zinc-900",
        qwaste: "bg-qwaste-dark text-white",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 relative overflow-hidden",
                bgStyles[bg],
                className
            )}
        >
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
