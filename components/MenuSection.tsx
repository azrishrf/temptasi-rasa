import Image from "next/image";

export default function MenuSection() {
  const menuItems: Array<{
    title: string;
    description: string;
    price: string;
    rating: string;
    image: string; // local path under public/images
  }> = [
    {
      title: "Nasi Lemak Ayam Goreng Berempah",
      description: "Ayam goreng berempah rencah, nasi lemak wangi santan dengan sambal istimewa",
      price: "12.90",
      rating: "4.9",
      image: "/images/nasi-lemak-ayam-berempah.jpeg",
    },
    {
      title: "Nasi Lemak Rendang Ayam",
      description: "Rendang ayam empuk, rasa tradisi turun-temurun yang autentik",
      price: "15.90",
      rating: "4.8",
      image: "/images/nasi-lemak-rendang-ayam.jpeg",
    },
    {
      title: "Nasi Lemak Sotong Sambal Petai",
      description: "Sotong segar dengan sambal petai pedas manis yang menggoda selera",
      price: "13.90",
      rating: "4.7",
      image: "/images/nasi-lemak-sotong.jpeg",
    },
    {
      title: "Nasi Lemak Telur & Ikan Bilis",
      description: "Klasik tradisional dengan telur rebus dan ikan bilis rangup",
      price: "8.90",
      rating: "5.0",
      image: "/images/nasi-lemak-telur.jpeg",
    },
  ];

  return (
    <section
      id="menu"
      className="py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center" data-aos="fade-up">
          <h2 className="font-script text-5xl md:text-7xl font-bold text-gray-900 mb-4 decorative-line">
            Menu Pilihan Kami
          </h2>
          {/* <span className="inline-block px-6 py-2 bg-amber-100 border border-amber-300 rounded-full text-amber-700 text-sm font-semibold">
            MENU ISTIMEWA
          </span> */}
          <p className="md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Hidangan signature yang telah menjadi kegemaran pelanggan setia kami
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-elegant hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                {/* WhatsApp Button */}
                {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={`https://wa.me/601234567890?text=Saya berminat untuk order ${item.title}`}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z" />
                    </svg>
                    <span className="text-white text-sm font-medium">Pesan</span>
                  </a>
                </div> */}

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-400">RM {item.price}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center">
          <button className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-orange-900 to-amber-800 text-white rounded-full text-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/50 hover:scale-105">
            <span className="relative z-10">Lihat Menu Lengkap</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-orange-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div> */}
      </div>
    </section>
  );
}
