export default function Header() {
  return (
    <section id="home" className="relative min-h- flex items-center pt-32 pb-20">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-900/50 to-black"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
          style={{
            backgroundImage: "url('/images/header-bg.jpeg')",
          }}
        ></div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          {/* Small Tagline */}
          <div className="mb-8 inline-block">
            <span className="px-6 py-2 bg-amber-400/20 border border-amber-400/50 rounded-full text-amber-400 text-sm font-medium backdrop-blur-sm">
              ✨ Sejak 2020 - Warisan Citarasa Malaysia
            </span>
          </div>

          {/* Main Heading with Script Font */}
          <h1
            className="font-script text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
            data-aos="zoom-in"
          >
            Temptasi Rasa
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="mx-4 text-amber-400 text-2xl">✦</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>

          {/* Subtitle with Serif Font */}
          <h2
            className="font-serif text-3xl md:text-5xl mb-6 text-amber-300 italic"
            data-aos="fade-up"
          >
            Nasi Lemak Asli, Rasa Tradisi
          </h2>

          <p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
          >
            Sajian warisan Malaysia dengan sentuhan moden, dimasak dengan penuh kasih sayang
            menggunakan resipi turun-temurun
          </p>

          {/* CTA Buttons - Modern Style */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
          >
            {/* Primary CTA scrolls to Menu section */}
            <a
              href="#menu"
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full text-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              aria-label="Pergi ke seksyen menu"
            >
              <span className="relative z-10">Lihat Menu Kami</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            {/* Secondary CTA scrolls to Contact section */}
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              className="group relative px-10 py-5 border-2 border-amber-400 text-amber-400 rounded-full text-lg font-bold backdrop-blur-sm bg-white/5 hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              aria-label="Pergi ke seksyen hubungi"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-8 text-white/80"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-sm">10,000+ Pelanggan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Halal & Berkualiti</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
