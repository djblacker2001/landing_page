"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Database, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-aurora text-navy selection:bg-cobalt/20">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-cobalt/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />

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
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-cobalt/10 text-sm md:text-base text-cobalt backdrop-blur-sm shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cobalt"></span>
                        </span>
                        <span>{t('tagline')}</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-navy pb-2">
                        {t.rich('title', {
                            accent: (chunks) => <span className="block text-cobalt sm:inline">{chunks}</span>
                        })}
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-blue-900/80 leading-relaxed font-light">
                        {t.rich('subtitle', {
                            bold: (chunks) => <span className="text-navy font-medium">{chunks}</span>
                        })}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <button className="group relative px-8 py-4 rounded-full bg-cobalt text-white font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(17,85,204,0.3)] hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                {t('explore')}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                        <button
                            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-full bg-white/50 border border-cobalt/20 text-cobalt font-semibold text-lg hover:bg-white/80 transition-colors backdrop-blur-sm shadow-sm hover:shadow"
                        >
                            {t('contact')}
                        </button>
                    </motion.div>
                </motion.div>

                {/* Floating Icons/Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden lg:block absolute top-20 left-10 p-4 rounded-2xl bg-white/80 border border-white/40 backdrop-blur-md shadow-xl shadow-cobalt/5"
                >
                    <Clock className="w-8 h-8 text-cobalt mb-2" />
                    <div className="text-xs text-zinc-500">Real-time</div>
                    <div className="font-bold text-zinc-900">Monitoring</div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="hidden lg:block absolute bottom-40 right-10 p-4 rounded-2xl bg-white/80 border border-white/40 backdrop-blur-md shadow-xl shadow-cobalt/5"
                >
                    <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                    <div className="text-xs text-zinc-500">Increase</div>
                    <div className="font-bold text-zinc-900">Efficiency</div>
                </motion.div>
            </div>

            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />
        </section>
    );
}
