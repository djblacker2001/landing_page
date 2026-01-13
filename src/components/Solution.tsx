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
        { icon: Layers, name: t('modCollection'), desc: t('modDescCollection') },
        { icon: BarChart3, name: t('modMonitoring'), desc: t('modDescMonitoring') },
        { icon: Database, name: t('modAnalytics'), desc: t('modDescAnalytics') },
        { icon: Settings, name: t('modOptimization'), desc: t('modDescOptimization') },
        { icon: ShieldCheck, name: t('modMaintenance'), desc: t('modDescMaintenance') },
        { icon: Zap, name: t('modEnergy'), desc: t('modDescEnergy') },
        { icon: Layers, name: t('modReporting'), desc: t('modDescReporting') },
    ];

    return (
        <Section id="solution" bg="white">
            <div className="space-y-16">
                {/* Goals */}
                <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cobalt">
                            {t('goalsTitle')}
                        </h2>
                        <div className="space-y-4">
                            {goals.map((goal, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-cobalt/50 transition-colors shadow-sm">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-cobalt" />
                                    </div>
                                    <span className="text-navy font-medium">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] bg-white rounded-2xl overflow-hidden p-8 border border-blue-100 shadow-xl shadow-cobalt/5 flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
                        <h3 className="text-2xl font-bold mb-6 relative z-10 text-cobalt">{t('frameworkTitle')}</h3>
                        <div className="space-y-6 relative z-10">
                            <dl className="space-y-2 border-l-2 border-blue-100 pl-4">
                                <dt className="text-cobalt font-semibold text-sm">Connectivity</dt>
                                <dd className="text-slate-600">OPC UA / MQTT / Modbus TCP</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-blue-100 pl-4">
                                <dt className="text-cobalt font-semibold text-sm">Data Hub</dt>
                                <dd className="text-slate-600">SQL Server / InfluxDB</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-blue-100 pl-4">
                                <dt className="text-cobalt font-semibold text-sm">Platform</dt>
                                <dd className="text-slate-600">Real-time Digital Twin</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="text-center space-y-8">
                    <h2 className="text-3xl font-bold text-cobalt">
                        {t('modulesTitle')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {modules.map((mod, idx) => (
                            <div key={idx} className="relative bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all group hover:border-[#1155CC] hover:shadow-md cursor-help">
                                <div className="w-10 h-10 rounded-full bg-soft flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors shrink-0">
                                    <mod.icon className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-semibold text-navy text-center leading-tight">{mod.name}</span>

                                {/* Hover Tooltip */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible z-20 bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 rounded-lg bg-slate-900 text-white text-xs text-center shadow-xl pointer-events-none">
                                    {mod.desc}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
