"use client";

import { Section } from "./Section";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Vision() {
    const t = useTranslations('Vision');

    return (
        <Section id="vision" bg="dark">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {t.rich('title', {
                            accent: (chunks) => <span className="text-qwaste-accent">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                        {t('desc1')}
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        {t.rich('desc2', {
                            bold: (chunks) => <span className="text-white font-medium">{chunks}</span>
                        })}
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-white">{t('boxTitle')}</h3>
                        <ul className="space-y-3">
                            {[
                                t('list1'),
                                t('list2'),
                                t('list3'),
                                t('list4')
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                    <CheckCircle2 className="w-5 h-5 text-qwaste-accent shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-qwaste-light to-qwaste-accent opacity-20 blur-2xl rounded-full" />
                    <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 aspect-square flex flex-col justify-center items-center text-center space-y-6">
                        <div className="w-20 h-20 bg-qwaste-accent/10 rounded-full flex items-center justify-center">
                            <img src="/iic4.0.svg" alt="IIC 4.0" className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{t('smartFactoryTitle')}</h3>
                        <p className="text-zinc-400">
                            {t('smartFactoryDesc')}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
