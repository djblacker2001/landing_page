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
            router.replace(pathname, { locale: nextLocale, scroll: false });
        });
    }

    return (
        <div className="flex items-center gap-1">
            <button
                onClick={() => onSelectChange('vi')}
                className={`text-sm font-medium transition-colors ${locale === 'vi' ? 'text-cobalt font-bold' : 'text-zinc-500 hover:text-cobalt'}`}
            >
                VN
            </button>
            <span className="text-zinc-300">|</span>
            <button
                onClick={() => onSelectChange('en')}
                className={`text-sm font-medium transition-colors ${locale === 'en' ? 'text-cobalt font-bold' : 'text-zinc-500 hover:text-cobalt'}`}
            >
                EN
            </button>
        </div>
    );
}
