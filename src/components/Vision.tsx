"use client";

import { Section } from "./Section";
import { CheckCircle2 } from "lucide-react";

export function Vision() {
    return (
        <Section id="vision" bg="dark">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-qwaste-accent">Bối cảnh</span> & Tầm nhìn
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Trong nền sản xuất hiện đại, yếu tố cạnh tranh không còn nằm ở việc sở hữu nhiều máy móc hơn,
                        mà ở năng lực tận dụng dữ liệu để tối ưu thời gian, nâng cao hiệu suất và gia tăng lợi nhuận.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        Khi doanh nghiệp buộc phải chuyển đổi dữ liệu sản xuất thành năng suất thực tế, thời gian trở thành
                        <span className="text-white font-medium"> đơn vị tiền tệ của năng suất</span>.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-white">Mỗi giây được tối ưu đồng nghĩa với:</h3>
                        <ul className="space-y-3">
                            {[
                                "Hiệu suất cao hơn: Máy móc vận hành ổn định",
                                "Chi phí thấp hơn: Giảm năng lượng & thời gian chờ",
                                "Năng lượng hiệu quả hơn: Dựa trên dữ liệu thực tế",
                                "Lợi nhuận bền vững hơn: Quản trị minh bạch"
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
                        <h3 className="text-2xl font-bold text-white">Smart Manufacturing</h3>
                        <p className="text-zinc-400">
                            Các quốc gia tiên tiến đã bước sang giai đoạn Sản xuất thông minh,
                            nơi mỗi giây vận hành đều mang giá trị kinh tế.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
