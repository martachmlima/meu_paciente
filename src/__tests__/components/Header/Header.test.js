import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../../components/Header'

describe('Component Header', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <Header actualPage='Vacinas' />
      </BrowserRouter>
    )

    expect(screen.getByText(/\+Saúde/i)).toBeTruthy()
  })
})
