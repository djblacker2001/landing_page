"use client";

import { Section } from "./Section";
import { ArrowRight, Clock, Gauge, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Pillars() {
    const t = useTranslations('Pillars');

    const pillars = [
        {
            icon: Clock,
            title: t('time'),
            desc: t('timeDesc'),
            color: "text-blue-400"
        },
        {
            icon: Gauge,
            title: t('efficiency'),
            desc: t('efficiencyDesc'),
            color: "text-green-400"
        },
        {
            icon: DollarSign,
            title: t('cost'),
            desc: t('costDesc'),
            color: "text-yellow-400"
        },
        {
            icon: Trophy,
            title: t('competitiveness'),
            desc: t('competitivenessDesc'),
            color: "text-purple-400"
        },
        {
            icon: TrendingUp,
            title: t('revenue'),
            desc: t('revenueDesc'),
            color: "text-red-400"
        }
    ];

    return (
        <Section id="pillars" bg="qwaste">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    {t('title')}
                </h2>
                <p className="max-w-2xl mx-auto text-qwaste-accent/80 md:text-lg">
                    {t('subtitle')}
                </p>
            </div>

            <div className="relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {pillars.map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl md:min-h-[220px] flex flex-col items-center justify-center text-center gap-4 transition-all hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-qwaste-accent/10">
                                <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-xl text-white">{item.title}</h3>
                                <p className="text-sm text-zinc-300">{item.desc}</p>

                                {index < pillars.length - 1 && (
                                    <ArrowRight className="md:hidden w-6 h-6 text-white/20 rotate-90 my-2" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
