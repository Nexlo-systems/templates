export default function PortfolioGrid() {
    const rowOne = [
        {
            title: 'The Obsidian Penthouse',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_6jmb9SREj1l_PUm1JCKQOxNpN3Y0aY64jawrm4Asd_WfSTFNudUtxBicSoTO3g8lU3nK8VwF5PFXvfrb07XPpmiOh-xgE-tAJIWuJcXhmOz1KYJo5huOFUj7kDSAOhgaGtnmNWOgbJpRKlgu0P_lHn47EogOMwEVFD67PjWm4skgD_X9Gn2oWjWEkZR_z06PmHo0MUVhtTgEss3Kz67EnE3W3KsmfdoH7VmfysgOQY9C1DZjXoGW1vNGhD7Cx7G2zSp-1Le8oZvD',
            alt: 'A grand, high-ceilinged modern living room with floor-to-ceiling windows.',
            gridClass: 'md:col-span-8'
        },
        {
            title: 'Studio Noir',

            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwMcTjnflKMiIYMVlBEZ-XiKGQRAdW0PB-i5OMKzNLxTiqvO7xnvMlxsJAPx44RuHyAJPkrPCOYA2ikUdEIP1ISlJLMnpmfULt6QZsQJwNPfa2oyXPj-4k1EXp4WAbGzJ6kGbvf1x6uAkARez5NsYYJSSoRvrHMiI2HgXjJ-a-xg5bBRzIe44_ikz4vWh6n6RS-ulbHT5dwTKiCBJMXaVwOwJ6XT_I6WEKKmUuK0EvZnadlHW6oo3RVr58vv-DyvGcBEvhSBn_hf1k',
            alt: 'A minimalist designer kitchen featuring matte charcoal cabinetry.',
            gridClass: 'md:col-span-4'
        }
    ];

    const rowTwo = [
        {
            title: 'The Arch Hotel',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd637BtQaLA8wC4cK3VI06PnFkxO37ni7Pccs-3piB9iRO8DEJC63t84cROohjPZrX_7R23lVzoVD6XkKZTsTkQT7vbpyGdA7K-jCEGfYrBELsx8bmBhd-zj9dYUWHHcgSfRyM0GDvgro0R7OhQr0vFkJ53nngZfKd3_dQ0PeZF874fAqX5iXv4eJjCCWArkqYA933HbPuRDBmX3IroiFgng0zw-MItxKgCgw66CBTrMKfwdPazNzUkU6ADVmmNPX8XUDC8SPbvjRf',
            alt: 'A boutique hotel lobby featuring a dramatic arched walkway and dark wood paneling.',
            gridClass: 'md:col-span-4'
        },
        {
            title: 'Modern Sanctuary',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhJ-wbWWILFlFdN8hxWIQrGVmwCbH57aQEvGAEKZdQnZZiLcPd7vNUppL7LIKXy1Dd7xDWdE-TCsFc7c-ZJxbRMrxvQxdjAxfTqX061ilhiM7rW0FV7JwfwRLaPWXHkEXCnV7LWRU_WuALQi0FVqtWBIUdbfvWqiUEolrQEsPgpinqr7PY0HVGfxOaDclsBoL3mP9VCCXvlZ1Oa-9BgCKCU-kdK89HRlCVBxoKPxSuuqACmWycrIBeHdCQtgsfppHv7G5wKffShKLf',
            alt: 'A modern, high-end kitchen and dining area with dark cabinetry illuminated by sunset.',
            gridClass: 'md:col-span-8'
        }
    ];

    return (
        <section id="portfolio" className="bg-[#353535] py-32 border-b border-[#444748]/30">
            <div className="px-6 md:px-16 max-w-[1280px] mx-auto">

                {/* Section Title */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-3xl md:text-5xl text-[#e4e2e1]">
                        Showcase of Our Work
                    </h2>
                    <p className="font-sans text-base text-[#c4c7c7] max-w-xl mx-auto">
                        We pride ourselves on attention to detail and delivering spaces that reflect personality.
                    </p>
                </div>

                {/* Clean Aligned Row Architecture */}
                <div className="space-y-6">

                    {/* Row 1 Grid: Enforces a matching aspect ratio baseline height */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {rowOne.map((project, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-[8px] bg-[#131313] aspect-[4/3] md:aspect-auto ${project.gridClass}`}
                            >
                                {/* Image frame locked into a shared explicit height on large desktop screen profiles */}
                                <div className="w-full h-full md:h-[400px] overflow-hidden relative">
                                    <img
                                        className="w-full h-full object-cover grayscale-[5%] contrast-[102%] group-hover:scale-105 transition-transform duration-700"
                                        alt={project.alt}
                                        src={project.image}
                                    />
                                    {/* Hover Overlay Frame */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 space-y-2">
                                        <span className="text-[#c8c6c5] font-sans text-xs font-semibold tracking-widest">
                                            {project.category}
                                        </span>
                                        <h4 className="text-[#e4e2e1] font-serif text-2xl font-normal">
                                            {project.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 Grid: Perfectly balances and encapsulates the alignment at the bottom boundary */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {rowTwo.map((project, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-[8px] bg-[#131313] aspect-[4/3] md:aspect-auto ${project.gridClass}`}
                            >
                                {/* Mirroring exact row baseline measurements (`md:h-[400px]`) so margins align perfectly */}
                                <div className="w-full h-full md:h-[400px] overflow-hidden relative">
                                    <img
                                        className="w-full h-full object-cover grayscale-[5%] contrast-[102%] group-hover:scale-105 transition-transform duration-700"
                                        alt={project.alt}
                                        src={project.image}
                                    />
                                    {/* Hover Overlay Frame */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 space-y-2">
                                        <span className="text-[#c8c6c5] font-sans text-xs font-semibold tracking-widest">
                                            {project.category}
                                        </span>
                                        <h4 className="text-[#e4e2e1] font-serif text-2xl font-normal">
                                            {project.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom CTA Action Button */}
                <div className="mt-16 text-center">
                    <button className="border border-[#c8c6c5] text-[#c8c6c5] px-10 py-4 rounded-[6px] font-sans text-base font-semibold bg-transparent hover:bg-[#c8c6c5] hover:text-[#313030] transition-all duration-300">
                        View All Projects
                    </button>
                </div>

            </div>
        </section>
    );
}