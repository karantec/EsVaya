import React from 'react'
import Footer from './Components/Footer'

import GetInTouch from './Components/Contact'
import BlogCarousel from './Components/Blog'
import TypewriterSection from './Components/TypeWriterSection'
import EsvayaStory from './Components/StorySections'
import EsvayaProductSection from './Components/ProductSection'
import EsvayaHero from './Components/Navbar'

const App = () => {
  return (
    <div>
      <EsvayaHero/>
      <TypewriterSection/>
      <EsvayaProductSection/>
      <EsvayaStory/>
      <BlogCarousel/>
      <GetInTouch/>
      <Footer/>
      
    </div>
  )
}

export default App
