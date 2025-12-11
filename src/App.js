import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { Route, Routes } from 'react-router-dom';
import  ProjectDetails  from './Components/ProjectDetails';

function App() {
  return (
    <div >
      <Navbar/>
       
        
      <Routes>
        <Route path="/" element={
          <>
           <Home/>
          <Skills/>
          <Projects/>
          <Contact/>
          </>
         
      }/>
        <Route path='/projectDetails/:projectName' element={<ProjectDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
