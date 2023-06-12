import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Documentation from './components/Documentation';
import Tutorial from './components/Tutorials';
import AboutUs from './components/AboutUs';
import './style/index.css'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path='/pages-react' element={ <Home /> } />
        <Route exact path='/documentation' element={ <Documentation /> } />
        <Route exact path='/tutorials' element={ <Tutorial /> } />
        <Route exact path='/aboutus' element={ <AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
