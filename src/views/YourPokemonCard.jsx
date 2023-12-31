import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../assets/css/yourPokemonStyles.css'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function YourPokemonCard () {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon'
  const { name } = useParams()
  const [pokeProfile, setPokeProfile] = useState()

  const getData = async (url) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setPokeProfile(data)
      console.log(data)
      // return data
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getData(`${endpoint}/${name}`)
  }, [name])

  return (
    <Container className='text-center Fluid'>
      <div className='display-6 mt-5 ms-5'>
        This is {name}!
      </div>
      <Row>
        <Col>
          <img src={pokeProfile?.sprites?.other?.dream_world?.front_default} alt='Pokemon img' width='500' height='600' className='elmntPicture' />
        </Col>
        <Col className='elmntProfile'>
          <ListGroup gap={4} variant='outline-danger'>
            {pokeProfile?.stats?.map(({ base_stat: value, stat: { name } }) => (
              <ListGroup.Item key={name} className='p-2' variant='success'>{name}: {value} </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default YourPokemonCard
