import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Europe from "./Components/Destinations-single/europe"
import India from "./Components/Destinations-single/india"
import Dubai from "./Components/Destinations-single/dubai"
import Bali from "./Components/Destinations-single/bali"


function App() {
  return (
    <>
    <NavBar/>
    <Router>
        <Routes>
          <>
          <Route path="/" element={<Home/>}/>
          <Route path="/europe" element={<Europe/>}/>
          <Route path="/india" element={<India/>}/>
          <Route path="/dubai" element={<Dubai/>}/>
          <Route path="/bali" element={<Bali/>}/>
          </>
          </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
