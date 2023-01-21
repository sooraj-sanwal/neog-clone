import './App.css';
import Header from './components/header/Header';
import Home from './components/Home';
import Footer from './components/footer/Footer';
import About from './components/About';
import NeogLevelZero from './components/NeogLevelZero'
import NeogLevelOne from './components/NeogLevelOne'
import Faq from './components/faq/Faq'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelZeroHero from './components/levelZero/levelzerohero/LevelZeroHero';


function App() {
  return (
   <Router>
   <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/levelZero' element = {<NeogLevelZero/>}/>
      <Route path='/levelOne' element = {<NeogLevelOne/>}/>
      <Route path='/faq' element = {<Faq/>}/>
      <Route path='/levelZeroFaq' element = {<NeogLevelZero/>}/>
      <Route path='/levelzero' element = {<LevelZeroHero/>}/>
    </Routes>
    <Footer/>
   </Router>

  );
}

export default App;
