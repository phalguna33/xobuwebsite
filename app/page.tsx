import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About />
      <Footer />
    </main>
  );
}