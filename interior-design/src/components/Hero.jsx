export default function Hero() {
    return (
        <section className="relative h-screen flex items-end pb-32 overflow-hidden bg-[#131313]">
            {/* Ambient Background Media Window */}
            <div className="absolute inset-0 z-0">
                <img
                    className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                    alt="A dramatic, high-end residential interior scene featuring a deep charcoal velvet sofa against a dark wood-paneled wall."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBN_pQDrvDRxQCUH5revpFhBNfuV4rko5A1ibe03K4Tphk38wDtwM1qc6LUttabufn_kOzsFlrl2C4fy9fODqObNAXqmmkabINSGut6mit_SQVoSGF1nZDVCGL6wNSCJu1OWTldbr1eare9PBXN3TTjhIV9AEUlTOWyC7gl03XC8ANv9tIWvPixM8lQZde2eVH1_D_AGq2YrQIdrMcLoJTwifZzY9vtNvvrT4g9OhXG5SD3MgrYrm15TB40cuWpxHK6Eqbrbk-zpyQ"
                />
                {/* Smooth Atmospheric Gradient Shadow overlaying the image */}
                <div className="absolute inset-0 bg-gradient-to-bottom from-[#131313]/40 to-[#131313]/90"></div>
            </div>

            {/* Typography Content Overlays */}
            <div className="relative z-10 px-6 md:px-16 max-w-[1280px] mx-auto w-full">
                <div className="max-w-2xl space-y-6">
                    {/* Editorial Headline - Libre Caslon Text */}
                    <h1 className="font-serif text-4xl md:text-6xl text-[#e4e2e1] leading-[1.1] tracking-tight">
                        Elevate Your Space with Timeless Style
                    </h1>

                    {/* UI Body Copy - Manrope */}
                    <p className="font-sans text-lg text-[#c4c7c7] leading-relaxed max-w-xl">
                        Where creativity meets comfort – beautifully planned interiors that reflect your unique aesthetic and functional needs.
                    </p>

                    {/* Button Group Pair - 6px Border Radius strictly implemented */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-[#c8c6c5] text-[#313030] px-8 py-4 rounded-[6px] font-sans text-base font-semibold hover:opacity-90 transition-opacity">
                            Get Started
                        </button>
                        <button className="border border-[#c8c6c5] text-[#c8c6c5] px-8 py-4 rounded-[6px] font-sans text-base font-semibold hover:bg-[#c8c6c5]/10 transition-colors">
                            View Projects
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}