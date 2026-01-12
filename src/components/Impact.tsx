"use client";

import { Section } from "./Section";
import { Check } from "lucide-react";
import { ConsultationForm } from "./ConsultationForm";

export function Impact() {
    const data = [
        { factor: "Time", direct: "Giảm thời gian chờ, tối ưu quy trình", impact: "Tăng sản lượng mỗi ca" },
        { factor: "Efficiency", direct: "Nâng cao hiệu suất máy & nhân sự", impact: "Giảm lỗi, ổn định chất lượng" },
        { factor: "Cost", direct: "Giảm chi phí năng lượng & vận hành", impact: "Tăng biên lợi nhuận" },
        { factor: "Competitiveness", direct: "Giao hàng nhanh hơn, minh bạch hơn", impact: "Củng cố vị thế thị trường" },
        { factor: "Revenue", direct: "Năng suất & sản lượng tăng", impact: "Tăng doanh thu bền vững" },
    ];

    return (
        <Section id="impact" bg="dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Tác động <span className="text-qwaste-accent">Chiến lược</span>
                </h2>
                <p className="text-zinc-400">
                    Hiệu quả đo lường được trên từng chỉ số vận hành
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-4 px-6 text-left text-zinc-400 font-medium uppercase text-sm">Yếu tố</th>
                            <th className="py-4 px-6 text-left text-zinc-400 font-medium uppercase text-sm">Kết quả trực tiếp</th>
                            <th className="py-4 px-6 text-left text-zinc-400 font-medium uppercase text-sm">Tác động cuối cùng</th>
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

            <div className="mt-20 relative rounded-2xl bg-qwaste-light/20 border border-qwaste-light/30 p-8 md:p-12 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-qwaste-dark/50" />
                <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                        “QWaste không chỉ là phần mềm<br />
                        mà là chiến lược tối ưu thời gian của doanh nghiệp sản xuất.”
                    </h3>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                        Giúp doanh nghiệp <span className="text-white font-bold">NHÌN - HIỂU - HÀNH ĐỘNG</span> trên dữ liệu thật,
                        từ đó tăng năng suất, giảm chi phí và phát triển bền vững.
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
                                    <span className="text-xl">📍</span>
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
