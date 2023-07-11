import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Trending from './components/trending/Trending';
import Categories from  './components/categories/Categories';
import Testimonial from './components/testimonials/Testimonial'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Sidebar from './components/menu/Sidebar';


function App() {
  return (
    <div className="App">
    <Router>
      <Sidebar />
      {/* <Routes>
        <Route path='/home' exact Component={Header}/>
        <Route path='/trending' exact Component={Trending}/>
        <Route path='/categories' exact Component={Categories}/>
      </Routes> */}
      </Router>
    
    
      <Banner/>
      <Trending />
      <Categories />
      <Testimonial />
      <Footer />
      <Card />
    
    </div>
    
      
      
  );
}

export default App;
