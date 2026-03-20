import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Components/Footer";
import GetInTouch from "./Components/Contact";
import BlogCarousel from "./Components/Blog";
import TypewriterSection from "./Components/TypeWriterSection";
import EsvayaStory from "./Components/StorySections";
import EsvayaProductSection from "./Components/ProductSection";
import EsvayaHero from "./Components/Navbar";
import Hero from "./Components/HeroSection";
import EsvayaSection from "./Components/EsvayaSection";
import Ritual from "./Components/Ritual";
import BlogCarouselDetail from "./Components/BlogSection";
import BlogDetail from "./Components/BlogDetail";
import EsvayaPolicies from "./Components/EssayPolicies";
import EsvayaFAQ from "./Components/Faq";
import Prod from "./Components/Prod";
import ProdJournal from "./Components/ProdJournal";
import ProdStory from "./Components/ProdStory";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <>
      <EsvayaHero />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TypewriterSection />
              <EsvayaSection />
              <BlogCarousel />
              <GetInTouch />
            </>
          }
        />
        <Route path="/journal/:slug" element={<BlogDetail />} />
        <Route path="/blog" element={<ProdJournal />} />
        <Route path="/thearchitecture" element={<Prod />} />
        <Route path="/story" element={<ProdStory />} />
        <Route path="/faq" element={<EsvayaFAQ />} />
        <Route path="/policies" element={<EsvayaPolicies />} />
        <Route path="/ritual" element={<Ritual />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;