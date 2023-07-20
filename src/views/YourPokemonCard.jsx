import React from 'react'
import { useParams } from 'react-router-dom'

function YourPokemonCard () {
  const { name } = useParams()
  return (
    <div className='display-6 mt-5 ms-5'>Hi {name}!
      Below you've got to put the card showing selected pokemon's data
    </div>
  )
}

export default YourPokemonCard
