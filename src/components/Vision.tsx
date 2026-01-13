"use client";

import { Section } from "./Section";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Vision() {
    const t = useTranslations('Vision');

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "/work_1.jpg",
        "/work_2.jpg",
        "/work_3.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <Section id="vision" bg="soft">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy">
                        {t.rich('title', {
                            accent: (chunks) => <span className="text-cobalt">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-blue-900/70 leading-relaxed">
                        {t('desc1')}
                    </p>
                    <p className="text-blue-900/70 leading-relaxed">
                        {t.rich('desc2', {
                            bold: (chunks) => <span className="text-navy font-medium">{chunks}</span>
                        })}
                    </p>

                    <div className="bg-white/70 backdrop-blur-lg shadow-sm border border-white/40 rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-navy">{t('boxTitle')}</h3>
                        <ul className="space-y-3">
                            {[
                                t('list1'),
                                t('list2'),
                                t('list3'),
                                t('list4')
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-blue-800">
                                    <CheckCircle2 className="w-5 h-5 text-cobalt shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-soft to-cobalt/20 opacity-50 blur-2xl rounded-3xl" />
                    <div className="relative bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-cobalt/5 rounded-2xl overflow-hidden aspect-video">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={currentSlide}
                                src={slides[currentSlide]}
                                alt="Smart Production"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Overlay Controls */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy/80 to-transparent flex items-center justify-between">
                            <div className="text-white">
                                <h3 className="font-bold text-lg">{t('smartFactoryTitle')}</h3>
                                <p className="text-sm text-white/80">{t('smartFactoryDesc')}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
