export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto bg-[#131313]">
            {/* Testimonial Wrapper Card - Strict 8px medium corner token used instead of rounded-3xl */}
            <div className="flex flex-col md:flex-row gap-12 items-center bg-[#1f2020] rounded-[8px] p-8 md:p-12 border border-[#444748]/20">

                {/* Client Portrait Window */}
                <div className="w-full md:w-1/3 max-w-[280px]">
                    <div className="aspect-square rounded-[8px] overflow-hidden border border-[#353535]">
                        <img
                            className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                            alt="A professional portrait of a discerning male client, James Smith."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2iB5_d1vsEpvpdsBxxohuvX4OtgQm8hjFxS2SzbwzwqLxRbQEa26Wje4JeFVRw4J5Qbv5aLi2MzcFBSykEw7qojY95d8uhIG3Pp_302RekmJyeV7hCI4Tj9ZXcg0v2Z12oCiQ8KyRczfJcQuHsYryB5jBQWX5YRNXV77rnXE_BxT5kLECysQtEiP5QoIghKmLcXqvLONQtTPfFjiAjtZtfuhOft-XWmzoCdiUb2jn_yIvd0AvvZLQSyfZdhxnF9uhzG0HSJ9wdAxy"
                        />
                    </div>
                </div>

                {/* Quote Content Frame */}
                <div className="w-full md:w-2/3 space-y-6">
                    {/* Custom Elegant Quote SVG Icon */}
                    <svg className="w-12 h-12 text-[#c8c6c5] fill-current opacity-40" viewBox="0 0 24 24">
                        <path d="M14 17h3l2-4V7h-6v6h3zM3 13h3l2-4V7H2v6h3z" />
                    </svg>

                    <p className="font-serif text-xl md:text-2xl italic text-[#e4e2e1] leading-relaxed font-normal">
                        "Their design transformed our home into a warm and modern space. Every detail was thoughtfully planned, and the final result exceeded our expectations. Aura Interiors truly understands quiet luxury."
                    </p>

                    <div className="pt-2">
                        <h5 className="font-sans text-base font-bold text-[#e4e2e1]">James Smith</h5>
                        <p className="text-[#8e9192] font-sans text-xs font-semibold tracking-widest mt-1">
                            Creative Director, London
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}