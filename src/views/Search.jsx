import React from 'react'
import FormSearchYourPokemon from '../components/FormSearchYourPokemon'
import { Container } from 'react-bootstrap'

function Search () {
  return (
    <Container>
      <div className='mt-4 display-6 mt-5 ms-5'>
        <FormSearchYourPokemon />
      </div>
    </Container>
  )
}
export default Search
