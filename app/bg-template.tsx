import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0f0f0f]">

      {/* ── Diagonal split background — desktop only ── */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {/* Left dark panel */}
        <div
          className="absolute inset-0 bg-[#0f0f0f]"
          style={{ clipPath: "polygon(0 0, calc(50% + 18vw) 0, 50% 100%, 0 100%)" }}
        />
        {/* Right light panel */}
        <div className="absolute inset-0 bg-[#f5f0e8]" />
        {/* Accent line on the diagonal edge */}
        <div
          className="absolute top-0 left-1/2 w-[5px] h-full bg-[#c8f04a] z-10 pointer-events-none"
          style={{ transform: "skewX(-14deg)", transformOrigin: "top center" }}
        />
      </div>

      {/* ── Content grid ── */}
      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 md:grid-cols-2">

        {/* Left column — Image */}
        <div className="flex items-center justify-center px-8 py-16 md:py-0">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Hero image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right column — Text content */}
        <div className="flex items-center justify-center px-8 pb-16 md:py-0 md:px-12">
          <div className="max-w-md space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-white md:text-[#0f0f0f] opacity-50">
              Your tagline
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white md:text-[#0f0f0f]">
              Your Headline Goes Here
            </h1>
            <p className="text-sm leading-relaxed text-white md:text-[#0f0f0f] opacity-60">
              Replace this with your hero description. Keep it short — two or
              three sentences that tell visitors exactly what you offer and why
              it matters.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="px-7 py-3 bg-[#c8f04a] text-[#0f0f0f] text-sm font-semibold uppercase tracking-wide hover:opacity-80 transition-opacity">
                Get Started
              </button>
              <button className="px-7 py-3 border border-white md:border-[#0f0f0f] text-white md:text-[#0f0f0f] text-sm font-semibold uppercase tracking-wide hover:opacity-60 transition-opacity">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
