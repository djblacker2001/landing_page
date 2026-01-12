"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { startTransition } from 'react';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(nextLocale: string) {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="flex items-center gap-1">
            <button
                onClick={() => onSelectChange('vi')}
                className={`text-sm font-medium transition-colors ${locale === 'vi' ? 'text-qwaste-accent' : 'text-zinc-400 hover:text-white'}`}
            >
                VN
            </button>
            <span className="text-zinc-600">|</span>
            <button
                onClick={() => onSelectChange('en')}
                className={`text-sm font-medium transition-colors ${locale === 'en' ? 'text-qwaste-accent' : 'text-zinc-400 hover:text-white'}`}
            >
                EN
            </button>
        </div>
    );
}
