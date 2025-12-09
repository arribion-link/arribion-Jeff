import { Route, Routes } from "react-router-dom"
import OpenNavBar from "./components/partials/OpenNavBar"
import Header from "./components/partials/Header"
import Home from "./pages/Home"
import Footer from "./components/partials/Footer"

function App() {
  
  return (
    <>
      <Header />
      <OpenNavBar/>
      <Routes>
        <Route  path="/"  element={<Home/>}   />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
