import { useState } from 'react';

export default function Faq() {
    // Keeps track of which FAQ question index is expanded
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            q: 'What services do you offer?',
            a: 'We provide full-service interior design, including space planning, material selection, project management, and final styling for both residential and commercial projects.'
        },
        {
            q: 'How long does a typical project take?',
            a: 'Timeline varies depending on project scope. A single room may take 4-8 weeks, while full-home renovations can span 6-12 months.'
        },
        {
            q: 'Do you offer on-site visits?',
            a: 'Yes, we provide on-site consultations and regular site visits during the implementation phase to ensure everything matches the design intent.'
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto bg-[#131313]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Left Informational Block */}
                <div className="md:col-span-5 space-y-6">
                    <h2 className="font-serif text-3xl md:text-5xl text-[#e4e2e1] leading-[1.2]">
                        Common Questions
                    </h2>
                    <p className="font-sans text-base text-[#c4c7c7] max-w-sm">
                        Everything you need to know about starting your interior design journey with us.
                    </p>
                    <div className="pt-2">
                        <button className="bg-[#c8c6c5] text-[#313030] px-8 py-3 rounded-[6px] font-sans text-base font-semibold hover:opacity-90 transition-opacity">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right Collapsible Accordion Grid */}
                <div className="md:col-span-7 space-y-2 self-start">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-[#444748]/30 pb-2">
                                <button
                                    className="flex justify-between items-center w-full text-left py-4 group transition-colors"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className={`font-sans text-base font-medium transition-colors ${isOpen ? 'text-[#c8c6c5]' : 'text-[#e4e2e1] group-hover:text-[#c8c6c5]'}`}>
                                        {item.q}
                                    </span>

                                    {/* Micro-interactive Arrow Icon */}
                                    <svg
                                        className={`w-5 h-5 text-[#8e9192] transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c8c6c5]' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>

                                {/* Expandable Answer Window Frame */}
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0 overflow-hidden'}`}>
                                    <div className="overflow-hidden font-sans text-sm text-[#c4c7c7] leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}