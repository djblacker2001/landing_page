"use client";

import { Section } from "./Section";
import { Check, Layers, Database, BarChart3, Settings, ShieldCheck, Zap } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Solution() {
    const t = useTranslations('Solution');

    const goals = [
        t('goal1'),
        t('goal2'),
        t('goal3'),
        t('goal4'),
        t('goal5')
    ];

    const modules = [
        { icon: Layers, name: t('modCollection') },
        { icon: BarChart3, name: t('modMonitoring') },
        { icon: Database, name: t('modAnalytics') },
        { icon: Settings, name: t('modOptimization') },
        { icon: ShieldCheck, name: t('modMaintenance') },
        { icon: Zap, name: t('modEnergy') },
        { icon: Layers, name: t('modReporting') },
    ];

    return (
        <Section id="solution" bg="light">
            <div className="space-y-16">
                {/* Goals */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-qwaste">
                            {t('goalsTitle')}
                        </h2>
                        <div className="space-y-4">
                            {goals.map((goal, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm border border-zinc-100 hover:border-qwaste-accent/50 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-qwaste-light/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-qwaste" />
                                    </div>
                                    <span className="text-zinc-700 font-medium">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] bg-qwaste rounded-2xl overflow-hidden p-8 text-white flex flex-col justify-center">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <h3 className="text-2xl font-bold mb-6 relative z-10">{t('frameworkTitle')}</h3>
                        <div className="space-y-6 relative z-10">
                            <dl className="space-y-2 border-l-2 border-white/20 pl-4">
                                <dt className="text-qwaste-accent font-semibold text-sm">Connectivity</dt>
                                <dd className="text-zinc-200">OPC UA / MQTT / Modbus TCP</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-white/20 pl-4">
                                <dt className="text-qwaste-accent font-semibold text-sm">Data Hub</dt>
                                <dd className="text-zinc-200">SQL Server / InfluxDB</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-white/20 pl-4">
                                <dt className="text-qwaste-accent font-semibold text-sm">Platform</dt>
                                <dd className="text-zinc-200">Real-time Digital Twin</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="text-center space-y-8">
                    <h2 className="text-3xl font-bold text-qwaste">
                        {t('modulesTitle')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {modules.map((mod, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform">
                                <div className="w-10 h-10 rounded-full bg-qwaste-light/5 flex items-center justify-center text-qwaste">
                                    <mod.icon className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-semibold text-zinc-700">{mod.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
