
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navber';
import Pricing from './component/Pricing';
import Item from './component/Item';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Home/>
      <Item/>
      <Pricing/>
      <Footer/>
        <Routes>
        
          <Route path="#home" element={<Home/>}/>
          <Route path="#items" element={ <Item />}/>
          <Route path="#features" element={<Pricing />}/>
          <Route path="#about" element={<Footer />}/>
      
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
