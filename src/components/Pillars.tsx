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
            color: "text-blue-600"
        },
        {
            icon: Gauge,
            title: t('efficiency'),
            desc: t('efficiencyDesc'),
            color: "text-green-600"
        },
        {
            icon: DollarSign,
            title: t('cost'),
            desc: t('costDesc'),
            color: "text-amber-500"
        },
        {
            icon: Trophy,
            title: t('competitiveness'),
            desc: t('competitivenessDesc'),
            color: "text-purple-600"
        },
        {
            icon: TrendingUp,
            title: t('revenue'),
            desc: t('revenueDesc'),
            color: "text-rose-500"
        }
    ];

    return (
        <Section id="pillars" bg="soft" className="bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="text-center mb-16 space-y-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-navy">
                    {t('title')}
                </h2>
                <p className="max-w-2xl mx-auto text-blue-900/70 md:text-lg">
                    {t('subtitle')}
                </p>
            </div>

            <div className="relative z-10">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cobalt/20 to-transparent -translate-y-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {pillars.map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-6 rounded-2xl md:min-h-[220px] flex flex-col items-center justify-center text-center gap-4 transition-all hover:bg-white/60 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-200/30">
                                <div className={`w-12 h-12 rounded-full bg-white/50 flex items-center justify-center ${item.color.replace('text-', 'text-opacity-80 text-')}`}>
                                    <item.icon className={`w-6 h-6 ${item.color.replace('text-', 'text-dark-')}`} />
                                </div>
                                <h3 className="font-bold text-xl text-navy">{item.title}</h3>
                                <p className="text-sm text-blue-900/70">{item.desc}</p>

                                {index < pillars.length - 1 && (
                                    <ArrowRight className="md:hidden w-6 h-6 text-cobalt/30 rotate-90 my-2" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
