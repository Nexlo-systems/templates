export default function Footer() {
    return (
        <footer className="bg-[#0e0e0e] pt-32 pb-8 border-t border-[#444748]/30">
            <div className="px-6 md:px-16 max-w-[1280px] mx-auto">

                {/* Top Banner Grid: Hero-Level Final CTA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl md:text-5xl text-[#e4e2e1] leading-[1.1]">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-[#c4c7c7] font-sans text-lg max-w-md leading-relaxed">
                            Schedule a complimentary consultation to discuss your vision with our senior design team.
                        </p>
                    </div>
                    <div className="md:text-right">
                        {/* Primary Button Token Implementation - 6px radius, no shadow */}
                        <button className="bg-[#c8c6c5] text-[#313030] px-12 py-5 rounded-[6px] font-sans text-base font-bold hover:opacity-90 active:scale-[0.98] transition-all duration-300">
                            Book a Consultation
                        </button>
                    </div>
                </div>

                {/* Informational Column Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-24">

                    {/* Studio Brand Descriptor */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-2xl text-[#c8c6c5] tracking-tight">Aura Interiors</h4>
                        <p className="text-[#c4c7c7] font-sans text-sm leading-relaxed">
                            Creating atmospheres that inspire. Precision design for the discerning curator.
                        </p>
                    </div>

                    {/* Directory Categorization Links */}
                    <div className="space-y-6">
                        <span className="font-sans text-xs font-semibold tracking-widest text-[#e4e2e1] block">
                            Quick Links
                        </span>
                        <ul className="space-y-3 font-sans text-sm text-[#c4c7c7]">
                            {['Residential', 'Commercial', 'Space Planning'].map((link) => (
                                <li key={link}>
                                    <a className="hover:text-[#c8c6c5] transition-colors" href={`#${link.toLowerCase().replace(' ', '-')}`}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Location Details & Direct Mail Contact */}
                    <div className="space-y-6">
                        <span className="font-sans text-xs font-semibold tracking-widest text-[#e4e2e1] block">
                            Contact
                        </span>
                        <ul className="space-y-3 font-sans text-sm text-[#c4c7c7]">
                            <li>London Studio</li>
                            <li>New York Office</li>
                            <li>
                                <a href="mailto:studio@aurainteriors.com" className="hover:text-[#c8c6c5] transition-colors">
                                    studio@aurainteriors.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Profiles Grid - 6px corner token to match the button shape rules */}
                    <div className="space-y-6">
                        <span className="font-sans text-xs font-semibold tracking-widest text-[#e4e2e1] block">
                            Social
                        </span>
                        <div className="flex gap-3">
                            {[
                                {
                                    name: 'Web',
                                    path: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V13h2v-2h-2V9a1 1 0 0 1 1-1h1V6h-2a3 3 0 0 0-3 3v2H9v2h2v6.93a8 8 0 1 1 2 0z" />
                                },
                                {
                                    name: 'Mail',
                                    path: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                }
                            ].map((icon, i) => (
                                <a
                                    key={i}
                                    className="w-10 h-10 border border-[#444748]/40 rounded-[6px] flex items-center justify-center text-[#8e9192] hover:text-[#c8c6c5] hover:border-[#c8c6c5] transition-colors"
                                    href="#"
                                    aria-label={icon.name}
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        {icon.path}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Lower Legals and Copyright Boundary */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#444748]/30 gap-4">
                    <p className="font-sans text-xs text-[#c4c7c7]">
                        &copy; {new Date().getFullYear()} Aura Interiors. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 font-sans text-xs text-[#c4c7c7]">
                        <a className="hover:text-[#c8c6c5] transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-[#c8c6c5] transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}