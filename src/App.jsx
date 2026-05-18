import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"


function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
         
  )
}

export default App
