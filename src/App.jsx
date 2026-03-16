
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
        <Route path="/thearchitecture" element={<EsvayaProductSection />} />
        <Route path="/story" element={<EsvayaStory />} />
        <Route path="/ritual" element={<Ritual />} />
        {/* <Route path="/blog" element={<BlogCarousel />} /> */}

        {/* <Route path="/contact" element={<GetInTouch />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;