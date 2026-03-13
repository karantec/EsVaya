import React from 'react'
import Footer from './Components/Footer'

import GetInTouch from './Components/Contact'
import BlogCarousel from './Components/Blog'
import TypewriterSection from './Components/TypeWriterSection'

const App = () => {
  return (
    <div>
      <TypewriterSection/>
      <BlogCarousel/>
      <GetInTouch/>
      <Footer/>
      
    </div>
  )
}

export default App
