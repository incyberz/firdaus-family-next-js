const Home = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Keluarga Firdaus
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Homeschooling | Coding | Organic Farming | Permaculture
        </p>
        <a
          href="#about"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>
    </section>
  );
};

export default Home;
