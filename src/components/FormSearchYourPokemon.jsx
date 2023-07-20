import { useContext, useState } from 'react'
import { OverlayTrigger, Tooltip, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'

export default function FormSearchYourPokemon () {
  const [pokemonName, setPokemonName] = useState('Pokemons')
  const navigate = useNavigate()
  const { dataPokeApi } = useContext(GlobalContext)

  const submitHandler = (event) => {
    event.preventDefault()
    if ((pokemonName.trim() === '') || (pokemonName === 'Pokemons')) return null
    navigate(`/search/${pokemonName}`)
  }

  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Click here after choosing your pokemon!
    </Tooltip>
  )

  return (
    <>
      <Form onSubmit={submitHandler} className='ms-5'>
        <Form.Group className='mb-3'>
          <Form.Label>What Pokemon are you looking for?</Form.Label>
          <Form.Select
            defaultValue='Pokemons'
            size='lg' className='w-50'
            onChange={(e) => setPokemonName(e.target.value)}
          >
            <option disabled>Pokemons</option>
            {dataPokeApi.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <OverlayTrigger
          placement='right'
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant='dark' type='submit' className='w-50'>
            Search your Pokemon!
          </Button>
        </OverlayTrigger>
      </Form>
    </>
  )
}
