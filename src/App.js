import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Task from './components/Task';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/task' element={<Task />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
