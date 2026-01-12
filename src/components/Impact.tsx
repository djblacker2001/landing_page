"use client";

import { Section } from "./Section";
import { Check } from "lucide-react";
import { ConsultationForm } from "./ConsultationForm";
import { useTranslations } from 'next-intl';

export function Impact() {
    const t = useTranslations('Impact');
    const data = [
        { factor: t('row1Factor'), direct: t('row1Direct'), impact: t('row1Impact') },
        { factor: t('row2Factor'), direct: t('row2Direct'), impact: t('row2Impact') },
        { factor: t('row3Factor'), direct: t('row3Direct'), impact: t('row3Impact') },
        { factor: t('row4Factor'), direct: t('row4Direct'), impact: t('row4Impact') },
        { factor: t('row5Factor'), direct: t('row5Direct'), impact: t('row5Impact') },
    ];

    return (
        <Section id="impact" bg="dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t.rich('title', {
                        accent: (chunks) => <span className="text-qwaste-accent">{chunks}</span>
                    })}
                </h2>
                <p className="text-zinc-400">
                    {t('subtitle')}
                </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-4 px-6 text-left text-zinc-400 font-medium uppercase text-sm">{t('headerFactor')}</th>
                            <th className="py-4 px-6 text-left text-zinc-400 font-medium uppercase text-sm">{t('headerDirect')}</th>
                            <th className="py-4 px-6 text-left text-zinc-400 font-medium uppercase text-sm">{t('headerImpact')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                <td className="py-6 px-6 font-bold text-white text-lg group-hover:text-qwaste-accent transition-colors">
                                    {row.factor}
                                </td>
                                <td className="py-6 px-6 text-zinc-300">
                                    {row.direct}
                                </td>
                                <td className="py-6 px-6 text-white flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-400" />
                                    {row.impact}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {data.map((row, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">{row.factor}</h3>
                            <Check className="w-5 h-5 text-qwaste-accent" />
                        </div>
                        <div className="space-y-2">
                            <div>
                                <div className="text-xs text-zinc-500 uppercase font-medium mb-1">{t('headerDirect')}</div>
                                <div className="text-zinc-300">{row.direct}</div>
                            </div>
                            <div className="pt-2 border-t border-white/5">
                                <div className="text-xs text-zinc-500 uppercase font-medium mb-1">{t('headerImpact')}</div>
                                <div className="text-green-400 font-medium">{row.impact}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 relative rounded-2xl bg-qwaste-light/20 border border-qwaste-light/30 p-8 md:p-12 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-qwaste-dark/50" />
                <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                        {t.rich('quote', {
                            br: () => <br />
                        })}
                    </h3>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                        {t.rich('quoteDesc', {
                            bold: (chunks) => <span className="text-white font-bold">{chunks}</span>
                        })}
                    </p>
                    <div id="consultation-form" className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
                        <div className="w-full min-h-[400px] h-full rounded-xl overflow-hidden border border-white/10 bg-white/5 relative group">
                            <iframe
                                src="https://maps.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng%20Qu%E1%BB%91c%20t%E1%BA%BF%20Mi%E1%BB%81n%20%C4%90%C3%B4ng&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-qwaste-dark/80 backdrop-blur-md border-t border-white/10">
                                <p className="text-white font-medium text-sm flex items-center gap-2">
                                    Nam Kỳ Khởi Nghĩa, Định Hoà, Thủ Dầu Một, Bình Dương
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end w-full">
                            <ConsultationForm />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
