import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contact'
import Empresa from './components/pages/Company'
import Novoprojeto from './components/pages/NewProject'
import Projetos from './components/pages/Projects'
import Projeto from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <Navbar/>
      <Container customclass="min-height">
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route path='/projects' element={<Projetos />} />
           <Route path='/company' element={<Empresa />} />
           <Route path='/contact' element={<Contato />} />
           <Route path='/newproject' element={<Novoprojeto />} />
           <Route path='/project/:id' element={<Projeto />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
