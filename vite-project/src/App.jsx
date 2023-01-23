import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Profil from './Pages/Profil';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Orders from './Pages/Orders';
import Settings from './Pages/Settings';
import Logout from './Pages/Logout';
import Product from './Pages/Product';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/profil' element={<Profil />} >
            <Route path='orders' element={<Orders />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
