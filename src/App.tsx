import './App.css'
import { useState } from "react";
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ProjectComponent from './components/ProjectComponent';
import SkillComponent from './components/SkillComponent';
import AchievementComponent from './components/AchievementComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <NavComponent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HomeComponent isDarkMode={isDarkMode} />
      <AboutComponent isDarkMode={isDarkMode} />
      <ProjectComponent isDarkMode={isDarkMode} />
      <SkillComponent isDarkMode={isDarkMode} />
      <AchievementComponent isDarkMode={isDarkMode} />
      <ContactComponent isDarkMode={isDarkMode} />
      <FooterComponent isDarkMode={isDarkMode} />
    </>
  )
}

export default App
