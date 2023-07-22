import React from 'react'
import '../assets/css/homeStyles.css'
import { Container } from 'react-bootstrap'

function Home () {
  return (
    <Container className='text-center mt-5'>
      <div>
        <img src='https://fontmeme.com/permalink/230721/5cdc1d4fca828f3de3a14b5fc0412be4.png' alt='FontImg from Font Source' />
      </div>
      <div className='mt-5'>
        <img className='mainPicContainer' src='./src/assets/img/pokeMaster.png' alt='Img Pokemon Master' />
      </div>
    </Container>
  )
}

export default Home
