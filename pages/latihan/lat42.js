import Image from "next/image";

const Lat41 = () => {
  return (
    <div className="container mx-auto p-6 pt-28">
      <h1 className="text-2xl font-bold mb-4">Latihan 4.2 - Sticky Heading</h1>
      <h2 className="text-xl font-semibold mb-4">Aplikasi Skripsi Online</h2>

      {[
        {
          id: "bab-1",
          top: 30,
          title: "Bab 1 Pendahuluan",
          content:
            "Bab ini berisi latar belakang penelitian, rumusan masalah, tujuan penelitian, manfaat penelitian, dan sistematika penulisan skripsi.",
        },
        {
          id: "bab-2",
          top: 60,
          title: "Bab 2 Kajian Pustaka",
          content:
            "Bab ini berisi landasan teori dan tinjauan pustaka yang digunakan sebagai referensi dalam penelitian. Sumber yang digunakan mencakup jurnal ilmiah, buku, serta penelitian terdahulu yang relevan. Kajian pustaka bertujuan untuk memahami konsep, teori, dan temuan sebelumnya yang berhubungan dengan topik penelitian. Selain itu, bab ini juga membandingkan berbagai teori dan pendekatan yang telah dikembangkan sebelumnya. Dengan adanya kajian pustaka yang kuat, penelitian ini memiliki dasar yang jelas dan dapat mendukung argumentasi dalam pembahasan. Bab ini juga mencakup kerangka pemikiran yang menjadi dasar analisis penelitian.",
        },

        {
          id: "bab-3",
          top: 100,
          title: "Bab 3 Metodologi Penelitian",
          content:
            "Bab ini menjelaskan metode penelitian yang digunakan dalam penelitian ini. Pendekatan penelitian ditentukan berdasarkan jenis data yang dianalisis, apakah kualitatif atau kuantitatif. Teknik pengumpulan data mencakup observasi, wawancara, kuesioner, atau studi literatur. Metode analisis data disesuaikan dengan tujuan penelitian untuk mendapatkan hasil yang valid dan reliabel. Selain itu, bab ini juga membahas instrumen penelitian yang digunakan serta prosedur pelaksanaannya. Validitas dan reliabilitas data diuji untuk memastikan keakuratan hasil penelitian. Penjelasan sistematis dalam bab ini membantu pembaca memahami bagaimana penelitian dilakukan secara ilmiah.",
        },

        {
          id: "bab-4",
          top: 150,
          title: "Bab 4 Pembahasan",
          content:
            "Bab ini membahas hasil penelitian yang diperoleh berdasarkan data yang telah dikumpulkan. Analisis dilakukan dengan pendekatan teoritis dan empiris untuk memastikan kesesuaian antara temuan dengan hipotesis awal. Data yang diolah dalam bab ini mencerminkan pola, tren, serta faktor-faktor yang mempengaruhi hasil akhir. Selain itu, perbandingan dengan penelitian terdahulu juga dilakukan untuk menilai relevansi dan kebaruan penelitian. Bab ini juga menjelaskan implikasi dari hasil yang diperoleh serta kemungkinan keterbatasan penelitian yang dapat menjadi bahan evaluasi untuk penelitian selanjutnya.",
        },

        {
          id: "bab-5",
          top: 150,
          title: "Bab 5 Penutup",
          content:
            "Bab ini menyajikan kesimpulan dari penelitian yang telah dilakukan, merangkum temuan utama, serta menjawab rumusan masalah yang diajukan. Selain itu, bab ini juga memberikan saran yang dapat menjadi bahan pertimbangan bagi penelitian selanjutnya atau pengembangan lebih lanjut dalam bidang yang relevan. Kesimpulan dibuat berdasarkan hasil analisis dan pembahasan pada bab sebelumnya. Saran yang diberikan diharapkan dapat membantu akademisi, praktisi, atau pihak terkait dalam menerapkan hasil penelitian ini secara optimal. Dengan demikian, penelitian ini dapat memberikan manfaat nyata dalam bidang yang diteliti.",
        },
      ].map((bab) => (
        <div key={bab.id} className="mb-6">
          <h3
            id={bab.id}
            className="text-lg font-semibold judul-bab sticky top-16 shadow-md mb-2 text-blue-400 z-10 bg-black pt-2 pb-2 "
          >
            {bab.title}
          </h3>
          <p className="mb-4">{bab.content}</p>
          <p className="mb-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Lat41;
