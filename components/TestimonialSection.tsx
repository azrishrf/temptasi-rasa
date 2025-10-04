import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Siti Nurhaliza",
      location: "Kuala Lumpur",
      rating: 5,
      review:
        "Memang sedap gila! Nasi lemak dia macam yang mak saya buat. Sambal dia pedas cukup-cukup, ayam goreng berempah tu crispy luar dalam juicy. Dah 3 kali seminggu saya makan kat sini!",
      image: "https://i.pravatar.cc/150?img=5",
      date: "2 hari yang lalu",
    },
    {
      name: "Ahmad Fahmi",
      location: "Petaling Jaya",
      rating: 5,
      review:
        "Terbaik! Rendang dia memang power. Daging empuk, rempah sebati. Harga pun reasonable. Service cepat dan mesra. Highly recommended untuk yang nak rasa nasi lemak tradisional yang authentic.",
      image: "https://i.pravatar.cc/150?img=12",
      date: "1 minggu yang lalu",
    },
    {
      name: "Nur Aisyah",
      location: "Shah Alam",
      rating: 5,
      review:
        "Suka sangat dengan ambiance kedai dan rasa makanan dia. Sotong sambal petai memang favorite saya! Setiap kali balik kampung mesti singgah sini untuk tapau.",
      image: "https://i.pravatar.cc/150?img=9",
      date: "3 minggu yang lalu",
    },
    {
      name: "Rizwan Abdullah",
      location: "Subang Jaya",
      rating: 5,
      review:
        "Portion besar, harga berpatutan. Nasi lemak untuk breakfast memang perfect! Telur dan ikan bilis goreng garing. Cucur udang pun sedap. Akan datang lagi dengan family.",
      image: "https://i.pravatar.cc/150?img=14",
      date: "1 bulan yang lalu",
    },
    {
      name: "Farah Liyana",
      location: "Ampang",
      rating: 5,
      review:
        "Best nasi lemak in town! Santan dia wangi, nasi pulen, lauk semua fresh. Staff pun friendly. Tempat clean dan selesa. Memang jadi pilihan utama untuk breakfast dan lunch.",
      image: "https://i.pravatar.cc/150?img=24",
      date: "1 bulan yang lalu",
    },
    {
      name: "Haris Iskandar",
      location: "Cheras",
      rating: 5,
      review:
        "Dah jadi pelanggan tetap! Setiap pagi mesti singgah untuk sarapan. Quality consistent, tak pernah mengecewakan. Thumbs up untuk chef dan team!",
      image: "https://i.pravatar.cc/150?img=33",
      date: "2 bulan yang lalu",
    },
  ];

  return (
    <section
      id="testimoni"
      className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-6 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-sm font-semibold mb-4">
            TESTIMONI PELANGGAN
          </span>
          <h2 className="font-script text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Kata Mereka Tentang Kami
          </h2>
          <p className="md:text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Lebih 10,000+ pelanggan berpuas hati dengan hidangan kami
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover-lift"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
              4.9
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 font-medium">Rating Google</p>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover-lift"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <p className="text-sm text-gray-600 font-medium mt-3">Pelanggan Setia</p>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover-lift"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-sm text-gray-600 font-medium mt-3">Review 5 Bintang</p>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover-lift"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-sm text-gray-600 font-medium mt-3">Kepuasan Pelanggan</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-elegant p-8 hover-lift relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-100 group-hover:text-amber-200 transition-colors">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-14 h-14">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover rounded-full ring-4 ring-amber-100"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-xs text-gray-400">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Tempah sekarang</h3>
            <p className="text-white/90 text-lg mb-6">
              Rasai sendiri kelazatan yang membuat ribuan pelanggan kembali lagi
            </p>
            <a
              href="https://wa.me/60123456789?text=Halo!%20Saya%20nak%20buat%20tempahan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
