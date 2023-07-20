import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Search from './views/Search'
import YourPokemonCard from './views/YourPokemonCard'

import GlobalContext from './context/GlobalContext'

function App () {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon'
  const [dataPokeApi, setDataPokeApi] = useState([])

  const getData = async (url) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setDataPokeApi(data.results)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getData(`${endpoint}?limit=10000`)
  }, [])

  const sharedGlobal = { dataPokeApi, setDataPokeApi }
  return (
    <>
      <GlobalContext.Provider value={sharedGlobal}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/search/:name' element={<YourPokemonCard />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
