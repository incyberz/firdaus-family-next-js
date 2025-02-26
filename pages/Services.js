"use client";

import { FaCode, FaLeaf, FaBook, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-[var(--primary-color)]" />,
    title: "Belajar Coding",
    description:
      "Kami memberikan pembelajaran coding berbasis project untuk anak-anak dan dewasa.",
  },
  {
    icon: <FaLeaf className="text-4xl text-[var(--primary-color)]" />,
    title: "Pertanian Organik",
    description:
      "Mengembangkan pertanian berbasis permaculture untuk keberlanjutan lingkungan.",
  },
  {
    icon: <FaBook className="text-4xl text-[var(--primary-color)]" />,
    title: "Homeschooling",
    description:
      "Membantu keluarga dalam menerapkan homeschooling berbasis nilai dan keterampilan hidup.",
  },
  {
    icon: <FaUsers className="text-4xl text-[var(--primary-color)]" />,
    title: "Komunitas Keluarga",
    description:
      "Membangun komunitas keluarga yang berbagi nilai dan pengalaman dalam pendidikan anak.",
  },
];

const Services = () => {
  return (
    <section
      id="layanan"
      className="py-16 bg-[var(--background-color)] text-[var(--text-color)]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--primary-color)]">
            Layanan Kami
          </h2>
          <p className="text-lg mt-3">
            Kami menyediakan berbagai layanan untuk mendukung pendidikan,
            teknologi, dan keberlanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl transition"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
