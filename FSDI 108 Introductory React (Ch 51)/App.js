import './App.css';
import Navbar from '.components/navbar.jsx';
import Footer from '.components/footer.jsx';
import Catalog from '.components/catalog.jsx';
import About from '.components/about.jsx';
import Home from '.components/home.jsx';
import Admin from '.components/admin.jsx';
import Cart from '.components/cart.jsx';
import "boostrap/dist/css/boostrap.min.css";
import "boostrap/dist/css/boostrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
    return (
        <BrowserRouter>
            <div clasName="App">
                <Navbar />
                <Routes>
                    <Route path='/catalog' element={<Catalog />}></Route>
                    <Route path='/abut' element={<About />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/admin' element={<Admin />}></Route>
                    <Route path='/car' element={<Cart />}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}