import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ModalAddDisease from '../../components/ModalAddDisease'

describe('Component ModalAddDisease', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <ModalAddDisease isOpen={true} onClose={() => {}} />
      </BrowserRouter>
    )

    expect(screen.getByText('Adicionar Doença')).toBeTruthy()
  })
})
