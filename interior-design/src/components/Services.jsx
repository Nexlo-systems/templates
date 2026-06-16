export default function Services() {
    const servicesList = [
        {
            id: '01',
            title: 'Residential Interior Design',
            description: 'We design personalized living spaces that blend style, comfort, and functionality. From bedrooms to full-home transformations, we create homes that feel inviting and balanced.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn_vdHyh3NtHdbTNjG7dPhDl1UOwzYK0mjFXGRaK5nb8rB8OswciOOvEWsehVS0PDcBkciVIZO4dK7F0qty9Zq7HW5taZGcmuZ1D5b79VqKcUQXcnRV-MpSrfum-Mldxz0CizLbj74wNSu-n6OLemfNKwfHpLr0CdzD7Jhxzbb0sbHi9RuhaHbmTm5-jeXqERumR6oFKnCBAVQ4zD_iYaVzztkvGrQr1wD-sdb3XT0YJ83RVu7y1tPoRbnPejumj8YsLrwkZeC6-Kp',
            alt: 'A luxury residential living room featuring custom-built bookshelves in dark walnut.'
        },
        {
            id: '02',
            title: 'Commercial Interior Design',
            description: 'Our team builds modern, efficient, and brand-focused commercial interiors. We design offices, showrooms, and cafes that improve workflow and reflect brand identity.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJkw-JnDRZ-yOuDa3-ckRT8CMJ63XVfWakt5oR7wEVIAdYCZhYATtvLauAk57ZGbPqV-KBg7lIa7pa4xYT1TqByXPfne-LyFvkRJ48WmyFW-A0JP8JFTxDlV7h6BitYwVaLGhrjbU9hBJ-WbeSfapaadbFVT7xBV68oZC6yzlUEPXGMPXiLljbF2F7LdpOSKT1ozD-kwOAT5QeBFFoEMVcCHg6ylyWUH-J4ypwgplauj7DUdT3OJLbZ5elwQDvz9M_6lZRVL3QE3DD',
            alt: 'A sleek, modern corporate office interior with glass partitions and natural wood accents.',
            reverse: true // Handles the alternate layout on desktop viewports
        },
        {
            id: '03',
            title: 'Space Planning & Layout Design',
            description: 'From small upgrades to full-scale renovations, we handle everything from planning and 3D designs to the final finishing touches with architectural precision.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM4YPtCMgA0ArBC2ID8YHB1PAvrVHbjG8x66lC6rTLz40C4IQLlspJ-bZzQVIK8d38lM29et3G7QmPiqh0ED1OERA8x23ppzxXsfpWqa52PuRrCuyFa4N02JyYWh9dB3yHR84PyMcEnj_TAjzRMOymiwxsoUkziDnf8eqc5uLG2R3LtM4KnvFbQzQYJUL56QADY23eamUgZCcEGlK08pqKDNyvMy8mCzKpUeCWKGBFn1TBuioUmfw76Yd3cZfvbAFQr_dOJ1qheW7X',
            alt: 'An architectural floor plan visualized with a minimalist 3D rendering style.'
        }
    ];

    return (
        <section id="services" className="bg-[#1b1c1c] py-32 border-y border-[#444748]/20">
            <div className="px-6 md:px-16 max-w-[1280px] mx-auto">

                {/* Header Block */}
                <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
                    <h2 className="font-serif text-3xl md:text-5xl text-[#e4e2e1]">
                        Our Interior Design Services
                    </h2>
                    <p className="font-sans text-base text-[#c4c7c7] leading-relaxed">
                        We offer a full range of design solutions that combine creativity, functionality, and expert craftsmanship to transform any space into a stylish sanctuary.
                    </p>
                </div>

                {/* Dynamic Structural Column Layout */}
                <div className="space-y-24">
                    {servicesList.map((service) => (
                        <div
                            key={service.id}
                            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group"
                        >
                            {/* Media Container Window */}
                            <div className={`md:col-span-5 aspect-[4/3] rounded-[8px] overflow-hidden bg-[#131313] ${service.reverse ? 'md:order-last' : ''}`}>
                                <img
                                    className="w-full h-full object-cover grayscale-[10%] contrast-[105%] group-hover:scale-105 transition-transform duration-700"
                                    alt={service.alt}
                                    src={service.image}
                                />
                            </div>

                            {/* Tonal Sequence Index Badge */}
                            <div className="md:col-span-1 font-serif text-3xl text-[#444748] font-light md:text-center">
                                {service.id}
                            </div>

                            {/* Text Description Block */}
                            <div className="md:col-span-6 space-y-4">
                                <h3 className="font-serif text-2xl md:text-3xl text-[#e4e2e1]">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-base text-[#c4c7c7] leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Arrow CTA Action Link */}
                                <div className="pt-2">
                                    <a
                                        className="inline-flex items-center text-[#c8c6c5] hover:text-[#e4e2e1] font-sans text-base font-semibold tracking-wide transition-all group/link"
                                        href={`#contact`}
                                    >
                                        <span>Learn More</span>
                                        <svg
                                            className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1.5 transition-transform duration-300 fill-none stroke-current stroke-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}