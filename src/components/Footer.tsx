"use client";

import { Disc } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-zinc-950 border-t border-white/10 py-12 md:py-16 text-center md:text-left">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-xl">
                        <div className="w-8 h-8 relative rounded bg-white p-0.5">
                            <img src="/LogoIIC.svg" alt="QWaste Logo" className="w-full h-full object-contain" />
                        </div>
                        <span>QWaste</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        {t.rich('tagline', {
                            br: () => <br />
                        })}
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">{t('solution')}</h3>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                        <li><a href="#" className="hover:text-qwaste-accent transition-colors">Digital Factory</a></li>
                        <li><a href="#" className="hover:text-qwaste-accent transition-colors">Smart Monitoring</a></li>
                        <li><a href="#" className="hover:text-qwaste-accent transition-colors">OEE Optimization</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">{t('company')}</h3>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                        <li><a href="#" className="hover:text-qwaste-accent transition-colors">{t('about')}</a></li>
                        <li><a href="#" className="hover:text-qwaste-accent transition-colors">{t('contact')}</a></li>
                        <li><a href="#" className="hover:text-qwaste-accent transition-colors">{t('careers')}</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>info@qwaste.com</li>
                        <li>(+84) 123 456 789</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 border-t border-white/5 pt-8 text-center text-zinc-500 text-sm">
                {t('rights', { year: new Date().getFullYear() })}
            </div>
        </footer>
    );
}
