import Image from "next/image";

const Lat41 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-2xl font-bold mb-4">
        Latihan 4.1 - Styling Foto Profil
      </h1>

      {/* Menampilkan gambar dengan styling yang diminta */}
      <div className="relative w-1/5 aspect-square border-4 border-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
        <Image
          src="/images/insho.jpg"
          alt="Foto Profil"
          layout="fill"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Lat41;
