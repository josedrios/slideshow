import Header from "@/components/Header"
import Slide from "@/components/Slide"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Slide />} />
      </Routes>
    </main>
  )
}

export default App
