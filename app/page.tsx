import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocationSection from "@/components/LocationSection";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden">
      <Navbar />
      <Header />
      <MenuSection />
      <AboutSection />
      <TestimonialSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
