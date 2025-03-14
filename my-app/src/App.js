import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import NavComponent from './navigation/NavComponent';
import FormComponent from './section/FormComponent';
import Footer from './footer/FootComponent';
import HomeComponent from './header/HomeComponent';
import ServicesComponent from './services/ServicesComponent';



function App() {
  return (
    <BrowserRouter>
    <NavComponent/>
      <Routes>
        <Route path="/src/header/HomeComponent.js" element={<HomeComponent/>} />
        <Route path='/ServicesComponent' element={<ServicesComponent/>} />
        <Route path="/FormComponent" element={<FormComponent/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
