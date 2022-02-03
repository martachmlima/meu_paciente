import {
  LandingContainer,
  PageContainer,
  Container
} from '../LandingPage/style'
import Button from '../../components/Button'
import { CarouselContainer } from './style'
import { useHistory } from 'react-router-dom'
import React from 'react'

const LandingPage = () => {
  const history = useHistory()

  return (
    <Container>
      <PageContainer>
        <CarouselContainer />
        <LandingContainer>
          <h1>
            Tudo o que você precisa para organizar seus dados e consultas
            médicas.
          </h1>
          <div className='buttons'>
            <Button onClick={() => history.push('/signup')}>Cadastrar</Button>
            <Button className='second' onClick={() => history.push('/login')}>
              Fazer Login
            </Button>
          </div>
        </LandingContainer>
      </PageContainer>
    </Container>
  )
}

export default LandingPage
