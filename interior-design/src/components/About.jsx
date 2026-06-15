export default function About() {
    const stats = [
        { value: '10+', label: 'Years Experience' },
        { value: '250+', label: 'Projects Done' },
        { value: '150+', label: 'Happy Clients' },
        { value: '20+', label: 'Design Awards' }
    ];

    return (
        <section id="about" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto bg-[#131313]">
            {/* Split Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Side: Editorial Philosophy */}
                <div className="space-y-6">
                    {/* <span className="font-sans text-xs font-semibold tracking-widest text-[#8e9192] block">
                        About Us
                    </span> */}
                    <h2 className="font-serif text-3xl md:text-5xl text-[#e4e2e1] leading-[1.2] font-normal">
                        We craft thoughtful, visually stunning spaces that balance beauty and practicality.
                    </h2>
                    <p className="font-sans text-lg text-[#c4c7c7] leading-relaxed max-w-xl">
                        Whether it's a cozy home or a modern workspace, our design philosophy is rooted in architectural rigor and a meticulous selection of materials.
                    </p>

                    {/* Primary Button: 6px corner token */}
                    <div className="pt-4">
                        <button className="bg-[#e4e2e1] text-[#131313] px-8 py-4 rounded-[6px] font-sans text-base font-semibold hover:opacity-90 transition-opacity">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Side: Visual Image Frames (Asymmetric Layout Feel) */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Frame 1: 8px corner token */}
                    <div className="aspect-square rounded-[8px] overflow-hidden bg-[#1b1c1c] shadow-sm">
                        <img
                            className="w-full h-full object-cover grayscale-[10%] contrast-[105%] hover:scale-105 transition-transform duration-700"
                            alt="A close-up of a meticulously styled bedroom featuring high-thread count linens."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIu2WB0JUqt20sRNjToA-_g-WnW5CsgXSAXC6C6Mt8yR2PqUYNxFRjFljkGkICs_vxmGR16dvzDLkwVDpZAn2vIpgCiICz26cRus1ucn8vcgCa-tLlB5VBlvCfzxYo4nMg3MxO0EQ_-UBERYyU9HE09n_QhRbXGM8ubjTfjNOEnDQrSCKZfVgkN9Lh8lNOx2HrlN3xyjZaThdAMurh5smyMW8km1m9dKTC3tEDvs-TG3KQ1F_dSDjCPnS-gEXVyDBPVTgjTljLm5hb"
                        />
                    </div>
                    {/* Frame 2: 8px corner token */}
                    <div className="aspect-square rounded-[8px] overflow-hidden bg-[#1b1c1c] shadow-sm mt-8 md:mt-12">
                        <img
                            className="w-full h-full object-cover grayscale-[10%] contrast-[105%] hover:scale-105 transition-transform duration-700"
                            alt="A sophisticated dining area with a dark oak table and sculptural matte black chairs."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjbXq1IiHyXPYSjp7Sg4xtsxd_fp1qHs3o8Bx8nEbuAkJywE2F5MwwpCdGO9fXbEXg1lOY79NV5Y4UAdExh0RrnrMRxO73TsRCgQhFlvrD7tMcXe973AuYkzs5ainQzbOa0qvNmZWP6RxqB8EPk3JGEWCyx0IeKEFEiZw2t7w2twKRm-tv3FkP3eN3OZn6wcdqjMHU6N8IV9ezuXDOSSeZ7FzHuvhJY-Z36RYeydQ66Ytxz8AAGS_jUtGA5UNDBK6ZKnW7OdzS4d5p"
                        />
                    </div>
                </div>

            </div>

            {/* Bottom Fine-Line Architectural Stat Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-y border-[#444748]/30 py-12">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center space-y-2">
                        <div className="font-serif text-4xl md:text-5xl text-[#c8c6c5] font-light">
                            {stat.value}
                        </div>
                        <div className="font-sans text-xs font-semibold tracking-widest text-[#c4c7c7] ">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}