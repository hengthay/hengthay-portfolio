import About from './Page/About/About'
import Contact from './Page/Contact/Contact'
import Header from './Page/Navigation/Header'
import Project from './Page/Project/Project'
import Resume from './Page/Resume/Resume'
import Skill from './Page/Skill/Skill'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <Header />
      <About />
      <Skill />
      <Project />
      <Resume />
      <Contact />
    </ThemeProvider>
  )
}

export default App
