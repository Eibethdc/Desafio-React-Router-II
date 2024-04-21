import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import PokeProvider from './context/PokeContext'
import Detail from './views/Detail'

function App() {
  
  return (
    <PokeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/pokemones/' element={ <Pokemones />} />
        <Route path='/pokemones/:name' element={ <Detail />} />
      </Routes>
    </PokeProvider>
  )
}

export default App
