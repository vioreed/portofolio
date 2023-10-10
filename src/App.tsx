import './App.css'
import { useState } from "react";
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ProjectComponent from './components/ProjectComponent';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <NavComponent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HomeComponent isDarkMode={isDarkMode} />
      <AboutComponent isDarkMode={isDarkMode} />
      <ProjectComponent isDarkMode={isDarkMode} />
    </>
  )
}

export default App
