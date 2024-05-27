import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';


function App() {


  return (
    <>
    <Header />
    < Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/add-product' element={<AddProductPage />}></Route>
    <Route path='/product/:id' element={<ProductDetailsPage />}></Route>
    <Route path='*' element={<NotFoundPage />}></Route>
    </Routes> 
    <Footer />
    </>
  )
};

export default App