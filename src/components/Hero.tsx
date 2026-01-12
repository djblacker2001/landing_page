"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Database, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-qwaste-dark text-white selection:bg-qwaste-accent/30">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-qwaste-light/40 via-qwaste-dark to-black" />
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-qwaste-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-cyan-300 backdrop-blur-sm shadow-glow"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span>{t('tagline')}</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 pb-2">
                        {t.rich('title', {
                            accent: (chunks) => <span className="block text-qwaste-accent sm:inline">{chunks}</span>
                        })}
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                        {t.rich('subtitle', {
                            bold: (chunks) => <span className="text-white font-medium">{chunks}</span>,
                            br: () => <br className="hidden sm:block" />
                        })}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <button className="group relative px-8 py-4 rounded-full bg-qwaste-accent text-qwaste-dark font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(0,224,255,0.4)] hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                {t('explore')}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                        <button
                            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            {t('contact')}
                        </button>
                    </motion.div>
                </motion.div>

                {/* Floating Icons/Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden lg:block absolute top-20 left-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <Clock className="w-8 h-8 text-qwaste-accent mb-2" />
                    <div className="text-xs text-zinc-400">Real-time</div>
                    <div className="font-bold">Monitoring</div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="hidden lg:block absolute bottom-40 right-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
                    <div className="text-xs text-zinc-400">Increase</div>
                    <div className="font-bold">Efficiency</div>
                </motion.div>
            </div>

            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        </section>
    );
}
