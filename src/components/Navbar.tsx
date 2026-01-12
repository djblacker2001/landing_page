"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-qwaste-dark/80 backdrop-blur-md py-3 shadow-lg"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                        <Image
                            src="/LogoIIC.svg"
                            alt="QWaste Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">
                        QWaste <span className="text-qwaste-accent">Digital Factory</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#vision" className="text-zinc-300 hover:text-white transition-colors">Vision</Link>
                    <Link href="#solution" className="text-zinc-300 hover:text-white transition-colors">Solution</Link>
                    <Link href="#impact" className="text-zinc-300 hover:text-white transition-colors">Impact</Link>
                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-qwaste-accent text-qwaste-dark font-bold hover:bg-white transition-colors"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-qwaste-dark/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            <Link href="#vision" onClick={() => setIsOpen(false)} className="text-zinc-200 py-2">Vision</Link>
                            <Link href="#solution" onClick={() => setIsOpen(false)} className="text-zinc-200 py-2">Solution</Link>
                            <Link href="#impact" onClick={() => setIsOpen(false)} className="text-zinc-200 py-2">Impact</Link>
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-qwaste-accent py-2 font-bold">Get Started</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
