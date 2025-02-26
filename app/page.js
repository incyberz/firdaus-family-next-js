import About from "@/pages/About";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Services from "@/pages/Services";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
      </main>
    </>
  );
}
