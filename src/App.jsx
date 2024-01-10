import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Slider from './components/Slider/Slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Slider />
              <Products />
            </>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />}/>
          
          
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

