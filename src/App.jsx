import React from 'react'
import Footer from './Components/Footer'

import GetInTouch from './Components/Contact'
import BlogCarousel from './Components/Blog'
import TypewriterSection from './Components/TypeWriterSection'
import EsvayaStory from './Components/StorySections'

const App = () => {
  return (
    <div>
      <TypewriterSection/>
      <EsvayaStory/>
      <BlogCarousel/>
      <GetInTouch/>
      <Footer/>
      
    </div>
  )
}

export default App
