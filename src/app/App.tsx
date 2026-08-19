import Footer from "@/components/Footer"
import Slide from "@/components/Slide"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

function App() {
  // NOTE: slideIndex starts at -1 because index: -1 is introduction page, 
  // also makes it easier to index through slides array
  const [slideIndex, setSlideIndex] = useState<number>(-1);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Slide slideIndex={slideIndex} setSlideIndex={setSlideIndex} />} />
      </Routes>
      <Footer slideIndex={slideIndex} />
    </main>
  )
}

export default App
