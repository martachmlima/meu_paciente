import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ModalAddVaccines } from '../../components/ModalAddVaccines'

const objTest = {
  isOpen: true,
  onClose: () => {}
}

describe('Component ModalAddVaccines', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <ModalAddVaccines isOpen={objTest.isOpen} onClose={objTest.onClose} />
      </BrowserRouter>
    )

    expect(screen.getByText('Adicionar vacina')).toBeTruthy()
  })
})
