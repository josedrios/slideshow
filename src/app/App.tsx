import Footer from "@/components/Footer"
import Slide from "@/components/Slide"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Slide />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
