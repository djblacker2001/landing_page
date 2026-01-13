"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export function ConsultationForm() {
    const t = useTranslations('Form');
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch('/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setStatus("success");
        } catch (error) {
            console.error('Error submitting form:', error);
            // Optionally handle error state here, for now just reset to idle or show error
            // For simplicity in this demo, we might just stay in submitting or go back to idle
            alert(t('error'));
            setStatus("idle");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl shadow-2xl shadow-navy/20 border border-white rounded-2xl p-6 md:p-8">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center space-y-4 py-8"
                    >
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900">{t('success')}</h3>
                        <p className="text-zinc-600">
                            {t('subtitle')}
                        </p>
                        <button
                            onClick={() => {
                                setStatus("idle");
                                setFormState({ name: "", phone: "", email: "", message: "" });
                            }}
                            className="mt-4 text-sm text-cobalt hover:text-navy transition-colors font-medium"
                        >
                            {t('submit')}
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">{t('title')}</h3>
                            <p className="text-sm text-zinc-600">{t('subtitle')}</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder={t('name')}
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-soft border border-blue-100 rounded-lg px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder={t('phone')}
                                    value={formState.phone}
                                    onChange={handleChange}
                                    className="w-full bg-soft border border-blue-100 rounded-lg px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder={t('email')}
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-soft border border-blue-100 rounded-lg px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-all"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder={t('message')}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-soft border border-blue-100 rounded-lg px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-all resize-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full flex items-center justify-center gap-2 bg-cobalt text-white font-bold py-3 px-6 rounded-lg hover:bg-navy transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-6 shadow-lg shadow-cobalt/20"
                        >
                            {status === "submitting" ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    {t('submitting')}
                                </>
                            ) : (
                                <>
                                    {t('submit')}
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
