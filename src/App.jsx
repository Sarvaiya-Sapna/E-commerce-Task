import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetail';

const App = () => {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/users' element={<Dashboard />} />
        <Route path='/products' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App
