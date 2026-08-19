import Footer from "@/components/Footer"
import Slide from "@/components/Slide"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

function App() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
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
