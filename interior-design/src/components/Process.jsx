export default function Process() {
    const steps = [
        {
            num: '1',
            title: 'Consultation',
            description: 'We begin with an in-depth discussion to understand your vision, lifestyle, and design preferences. This helps us identify your specific needs and project goals.'
        },
        {
            num: '2',
            title: 'Concept & Planning',
            description: 'Our team develops unique design concepts and detailed space plans, incorporating mood boards and initial 3D visualizations to define the aesthetic direction.'
        },
        {
            num: '3',
            title: 'Design & Development',
            description: 'We finalize every detail, from material selection to custom cabinetry drawings, ensuring a seamless transition from concept to the final, stunning execution.'
        }
    ];

    return (
        <section id="process" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto bg-[#131313]">
            <div className="flex flex-col md:flex-row gap-16">

                {/* Left Column: Heading & Visual Showcase */}
                <div className="md:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl md:text-5xl text-[#e4e2e1] leading-[1.2]">
                            How We Bring Your Vision To Life
                        </h2>
                    </div>

                    {/* Studio Process Image - 8px radius token applied strictly */}
                    <div className="rounded-[8px] overflow-hidden aspect-video bg-[#1b1c1c] shadow-sm">
                        <img
                            className="w-full h-full object-cover grayscale-[10%] contrast-[105%]"
                            alt="A professional interior designer's mood board featuring fabric swatches and architectural sketches."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyhZJVbakOcNlKFKgluqoH_m55yROxOT_c2v0AGvD2_lw3vd6pI8t1GtoOf1nMaAE6riO8OmW6Ca8cJS3PcsYQfoVnpwV6K8FiSQTkcqCP13yvz7_xF7_32KKbSyjXQdatEHNr-lvrtz79kALNCbrhRG1iTg1qcXipDzPv3-c3MiSOeYCWFTZ0kNpEjEDab0OrPI5L5DJ24bFrvpdYrsgw4GvkCkvWPZyNb5R-y-NWYiL1kbf1BXGdZ9fK6fG8Qm5v6jINRdSakc2Q"
                        />
                    </div>
                </div>

                {/* Right Column: Step Breakdown Lists */}
                <div className="md:w-1/2 space-y-12 self-end">
                    {steps.map((step) => (
                        <div key={step.num} className="relative pl-16 group">

                            {/* Boxed Number Badge - 6px corner token implemented to replace generic circles */}
                            <div className="absolute left-0 top-0 w-10 h-10 bg-[#1b1c1c] border border-[#444748]/40 flex items-center justify-center rounded-[6px] text-[#c8c6c5] font-serif text-lg group-hover:border-[#c8c6c5] transition-colors duration-300">
                                {step.num}
                            </div>

                            {/* Copy Blocks */}
                            <div className="space-y-2">
                                <h4 className="font-serif text-2xl text-[#e4e2e1]">
                                    {step.title}
                                </h4>
                                <p className="font-sans text-base text-[#c4c7c7] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}