import { Heading } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { theme } from '../../styles/global'

function LinkPage(actualPage) {
  const history = useHistory()
  const pages = [
    ['Remédios', 'medications'],
    ['Consultas', 'query'],
    ['Vacinas', 'vaccines'],
    ['Profissionais', 'professionals'],
    ['Meu Perfil', 'profile']
  ]

  return (
    <>
      {pages.map(page =>
        page[0] === actualPage ? (
          <Heading
            key={page[1]}
            as='h1'
            fontSize='xl'
            fontWeight='normal'
            p='0px 8px'
            cursor='default'
            borderBottom={`2px solid ${theme.colors.gray[200]}`}
            color={theme.colors.gray[200]}>
            {page[0]}
          </Heading>
        ) : (
          <Heading
            key={page[1]}
            as='h1'
            fontSize='xl'
            fontWeight='normal'
            cursor='pointer'
            onClick={() => history.push(page[1])}
            color={theme.colors.gray[200]}
            p='0px 8px'>
            {page[0]}
          </Heading>
        )
      )}
    </>
  )
}

export default LinkPage
