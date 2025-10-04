import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="py-24 bg-gradient-to-br from-orange-900 via-amber-800 to-orange-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container  px-4 relative z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-white order-2 lg:order-1" data-aos="fade-right">
            <span className="inline-block px-6 py-2 bg-white/10 border border-white/20 rounded-full text-amber-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              KISAH KAMI
            </span>
            <h2 className="font-script text-5xl md:text-6xl font-bold mb-6 text-amber-300">
              Tentang Kami
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 mb-8 rounded-full"></div>

            <p className="text-xl mb-6 leading-relaxed text-gray-100">
              Sejak 2020, <span className="font-bold text-amber-300">Temptasi Rasa</span> bertekad
              menyajikan Nasi Lemak terbaik dengan resipi turun-temurun yang telah diwarisi selama
              beberapa generasi.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-200">
              Setiap hidangan kami dimasak dengan penuh kasih sayang menggunakan bahan-bahan segar
              pilihan dan sambal pedas manis yang menjadi kebanggaan kami. Kami percaya makanan
              bukan sekadar hidangan, tetapi pengalaman yang menghangatkan hati dan mengikat
              kenangan bersama keluarga.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-amber-300">Resipi Turun Temurun</h3>
                <p className="text-sm text-gray-300">Diwarisi sejak 3 generasi</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-amber-300">Bahan Segar</h3>
                <p className="text-sm text-gray-300">100% halal & berkualiti</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-amber-300">Rating Tinggi</h3>
                <p className="text-sm text-gray-300">4.9/5 dari 10,000+ pelanggan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-amber-300">Dimasak Istimewa</h3>
                <p className="text-sm text-gray-300">Dengan penuh kasih sayang</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 h-[500px]">
                <Image
                  src="/images/about-us-main.jpeg"
                  alt="Tentang Kami - Suasana & Hidangan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>

              {/* Small Image Overlay */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-110 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                    alt="Detail Hidangan Nasi Lemak"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                <div className="bg-amber-400 text-black rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-white animate-pulse">
                  <span className="text-3xl font-bold">4.9</span>
                  <span className="text-xs font-semibold">★★★★★</span>
                  <span className="text-xs mt-1">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
