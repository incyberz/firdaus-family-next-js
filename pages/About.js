"use client";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="tentang"
      className="py-16 bg-[var(--background-color)] text-[var(--text-color)]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Gambar */}
          <div className="md:w-1/2">
            <Image
              src="/images/about-family.jpg" // Sesuaikan dengan gambar yang kamu gunakan
              alt="Tentang Keluarga Firdaus"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Konten */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">
              Tentang Kami
            </h2>
            <p className="text-lg leading-relaxed">
              Kami adalah keluarga yang percaya bahwa pendidikan terbaik berasal
              dari pengalaman nyata. Dengan homeschooling sebagai fondasi, kami
              mengajarkan aqidah, adab, ahlak, keterampilan teknologi, pertanian
              organik, dan permaculture kepada anak-anak kami dan para mitra.
            </p>
            <p className="mt-4 text-lg">
              Visi kami adalah membangun lingkungan belajar yang alami,
              inovatif, dan berbasis nilai-nilai keluarga.
            </p>

            <div className="mt-6">
              <a
                href="/tentang"
                className="inline-block bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
