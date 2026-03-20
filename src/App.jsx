
import { Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <>
      <EsvayaHero />
    

      <Routes>
        <Route
          path="/"
          element={
            <>  <Hero/>
              <TypewriterSection />
              <EsvayaSection/>
               <BlogCarousel/>
              <GetInTouch/>
             
             
            
            </>
          }
        />
        <Route path="/journal/:slug" element={<BlogDetail />} />
        <Route path="/blog" element={<ProdJournal />} />
        <Route path="/thearchitecture" element={<Prod />} />
        <Route path="/story" element={<ProdStory />} />
        <Route path="/faq" element={<EsvayaFAQ />} />
  <Route path="/policies" element={<EsvayaPolicies />} />
        {/* <Route path="/postBlogs" element={<BlogEditor />} /> */}
        <Route path="/ritual" element={<Ritual />} />
        {/* <Route path="/blog" element={<BlogCarousel />} /> */}

        {/* <Route path="/contact" element={<GetInTouch />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;