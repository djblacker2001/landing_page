"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const t = useTranslations('Navbar');
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/#vision", label: t('vision') },
        { href: "/#solution", label: t('solution') },
        { href: "/#impact", label: t('impact') },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20",
                scrolled
                    ? "bg-white/60 backdrop-blur-md py-3 shadow-sm"
                    : "bg-white/60 backdrop-blur-md py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/LogoIIC.svg"
                            alt="QWaste Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-cobalt font-bold text-xl tracking-tight hidden sm:block">
                        QWaste <span className="text-zinc-800">Digital Factory</span>
                    </span>
                    <span className="text-cobalt font-bold text-xl tracking-tight sm:hidden">
                        QWaste
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-zinc-600 hover:text-cobalt font-medium transition-colors">
                            {link.label}
                        </Link>
                    ))}

                    <LanguageSwitcher />

                    <Link
                        href="/#contact"
                        className="px-5 py-2 rounded-full bg-cobalt text-white font-bold hover:bg-navy transition-colors hover:shadow-lg hover:shadow-cobalt/20"
                    >
                        {t('getStarted')}
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher />
                    <button
                        className="text-cobalt p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-zinc-600 py-3 border-b border-zinc-100 hover:text-cobalt font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-cobalt py-3 font-bold hover:text-navy transition-colors">
                                {t('getStarted')}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
