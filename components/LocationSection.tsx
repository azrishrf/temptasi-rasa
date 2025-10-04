export default function LocationSection() {
  return (
    <section id="lokasi" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-amber-100 border border-amber-300 rounded-full text-amber-700 text-sm font-semibold mb-4">
            LAWATI KAMI
          </span>
          <h2 className="font-script text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Lokasi & Waktu Operasi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Kami sedia menyambut kedatangan anda setiap hari
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map & Address */}
          <div className="bg-white rounded-3xl shadow-elegant overflow-hidden p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">📍 Lokasi Kami</h3>
            </div>

            {/* Google Maps Embed */}
            <div className="relative h-80 rounded-2xl mb-6 overflow-hidden shadow-inner group">
              <iframe
                title="Lokasi Temptasi Rasa (Bandar Saujana Utama)"
                // Plus Code / Alamat baharu: 6F69+PF Bandar Saujana Utama, Sungai Buloh, Selangor, Malaysia
                // Encode '+' sebagai %2B supaya tidak ditafsir sebagai ruang dalam query.
                src="https://www.google.com/maps?q=6F69%2BPF%20Bandar%20Saujana%20Utama%2C%20Sungai%20Buloh%2C%20Selangor%2C%20Malaysia&hl=ms&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              ></iframe>
              {/* Subtle overlay gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Floating hint (Plus Code) */}
              <div className="absolute top-3 left-3 bg-white/85 backdrop-blur-sm text-xs px-3 py-1 rounded-full shadow font-medium text-gray-800 flex items-center gap-1">
                📍 6F69+PF
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=6F69%2BPF%20Bandar%20Saujana%20Utama%2C%20Sungai%20Buloh%2C%20Selangor%2C%20Malaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-amber-500 hover:bg-amber-600 text-black text-xs font-semibold px-4 py-2 rounded-full shadow-lg transition-colors"
              >
                Buka Maps »
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Alamat Lengkap</h4>
                  <p className="text-gray-700 text-lg">
                    Lot 12, Jalan Selera,
                    <br />
                    Taman Maju Jaya,
                    <br />
                    50000 Kuala Lumpur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Hubungi Kami</h4>
                  <p className="text-gray-700 text-lg">+6012-345 6789</p>
                  <a
                    href="tel:+60123456789"
                    className="text-green-600 hover:text-green-700 text-sm font-medium inline-flex items-center gap-1 mt-1"
                  >
                    <span>Tekan untuk call</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-900 to-amber-800 rounded-3xl shadow-elegant overflow-hidden p-8 text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Waktu Operasi</h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { day: "Isnin - Jumaat", time: "8.00 pagi - 11.00 malam", special: false },
                  { day: "Sabtu - Ahad", time: "7.00 pagi - 12.00 tengah malam", special: true },
                  { day: "Cuti Umum", time: "8.00 pagi - 10.00 malam", special: false },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-4 px-5 rounded-xl ${
                      schedule.special ? "bg-amber-400 text-black" : "bg-white/10 backdrop-blur-sm"
                    }`}
                  >
                    <span className="font-semibold text-lg">{schedule.day}</span>
                    <span
                      className={`font-bold ${
                        schedule.special ? "text-orange-900" : "text-amber-300"
                      }`}
                    >
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-amber-300 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-2 text-amber-300">Buka Setiap Hari!</h4>
                    <p className="text-sm text-gray-200">
                      Kami sentiasa bersedia untuk melayan anda dengan hidangan terbaik. Tempahan
                      khas juga diterima.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div className="grid grid-cols-2 gap-4">
              <button className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Tempahan</h4>
                <p className="text-sm text-gray-600">Buat tempahan</p>
              </button>

              <button className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Arah GPS</h4>
                <p className="text-sm text-gray-600">Navigasi ke sini</p>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
