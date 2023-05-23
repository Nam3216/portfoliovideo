import logo from './logo.svg';
import Skills from './component/pages/Skills';
import Projects from './component/pages/Projects';
import Contact from './component/pages/Contact';
import Home2 from './component/pages/Home2';
import Card from './component/pages/Card';
import SkillsBar from './component/pages/SkillsBar';
import ResponsiveAppBar from './component/pages/Navbar';
import Footer from './component/pages/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
     <Home2/>
     <Skills/>
     <SkillsBar/>
   <Card/>
   <Contact/>
   <Footer/>
   
    </div>
  );
}

export default App;
