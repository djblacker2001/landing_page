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
        <section id="impact" className="relative pt-20 pb-0 md:pt-32 md:pb-0 overflow-visible bg-gradient-to-b from-blue-100 to-white">
            {/* Noise/Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                        {t.rich('title', {
                            accent: (chunks) => <span className="text-cobalt">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto rounded-3xl border border-blue-100 bg-white shadow-2xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-500">
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                            <tr className="bg-blue-50/80 border-b border-blue-100">
                                <th className="py-6 px-8 text-left text-cobalt font-bold uppercase text-sm tracking-widest">{t('headerFactor')}</th>
                                <th className="py-6 px-8 text-left text-cobalt font-bold uppercase text-sm tracking-widest">{t('headerDirect')}</th>
                                <th className="py-6 px-8 text-left text-cobalt font-bold uppercase text-sm tracking-widest">{t('headerImpact')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, idx) => (
                                <tr key={idx} className="group border-b border-blue-50 last:border-0 hover:bg-blue-50/30 transition-colors duration-300">
                                    <td className="py-6 px-8 font-bold text-navy text-xl group-hover:text-cobalt transition-colors">
                                        {row.factor}
                                    </td>
                                    <td className="py-6 px-8 text-slate-600 font-medium text-lg">
                                        {row.direct}
                                    </td>
                                    <td className="py-6 px-8 text-navy">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-cobalt group-hover:scale-110 transition-all duration-300">
                                                <Check className="w-5 h-5 text-cobalt group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="font-bold text-cobalt text-lg">{row.impact}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {data.map((row, idx) => (
                        <div key={idx} className="bg-white border border-blue-100 rounded-2xl p-6 space-y-4 shadow-lg shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300">
                            <div className="flex items-center justify-between border-b border-blue-50 pb-4">
                                <h3 className="text-xl font-bold text-navy">{row.factor}</h3>
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                    <Check className="w-5 h-5 text-cobalt" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-2">
                                <div>
                                    <div className="text-xs text-cobalt uppercase font-bold mb-2 tracking-wider">{t('headerDirect')}</div>
                                    <div className="text-slate-700 font-medium">{row.direct}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-cobalt uppercase font-bold mb-2 tracking-wider">{t('headerImpact')}</div>
                                    <div className="text-cobalt font-bold text-lg">{row.impact}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="mt-20 relative rounded-2xl bg-white border border-blue-100 p-8 md:p-12 text-center overflow-hidden shadow-xl shadow-cobalt/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-navy">
                            {t.rich('quote')}
                        </h3>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {t.rich('quoteDesc', {
                                bold: (chunks) => <span className="text-cobalt font-bold">{chunks}</span>
                            })}
                        </p>
                        <div id="consultation-form" className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
                            <div className="w-full min-h-[400px] h-full rounded-xl overflow-hidden border border-blue-100 bg-white relative group shadow-lg">
                                <iframe
                                    src="https://maps.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng%20Qu%E1%BB%91c%20t%E1%BA%BF%20Mi%E1%BB%81n%20%C4%90%C3%B4ng&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-blue-100">
                                    <p className="text-navy font-medium text-sm flex items-center gap-2">
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
            </div>
        </section >
    );
}
