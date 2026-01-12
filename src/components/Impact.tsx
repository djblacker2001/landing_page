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
                    <div className="pt-8 flex justify-center">
                        <ConsultationForm />
                    </div>
                </div>
            </div>
        </Section>
    );
}
