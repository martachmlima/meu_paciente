import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ModalLink from '../../../components/Header/ModalLink'

describe('Component ModalLink', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <ModalLink isOpen={true} onClose={() => {}} actualPage='Vacinas' />
      </BrowserRouter>
    )

    expect(screen.getByText(/Vacinas/i)).toBeTruthy()
  })
})
