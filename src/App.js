import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpg from "./components/landingpage/Landingpg"
import ProtectedRoutes from "./services/protectedRoutes"



function App() {
  return (
   <>

      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />          
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/landingpg" element={<Landingpg />} /> 
          </Route>
                  
        </Routes>
      </BrowserRouter>
      <Footer />

      

   </>
  );
}

export default App;
