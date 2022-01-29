import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LinkPage from '../../../components/Header/LinkPage'

describe('Component LinkPage', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <LinkPage actualPage='Vacinas' />
      </BrowserRouter>
    )

    expect(screen.getByText(/Vacinas/i)).toBeTruthy()
  })
})
