import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ModalEditVaccines from '../../components/ModalEditVaccines'

const objTest = {
  id: 1,
  isOpen: true,
  onClose: () => {}
}

describe('Component ModalEditVaccines', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <ModalEditVaccines
          isOpen={objTest.isOpen}
          onClose={objTest.onClose}
          id={objTest.id}
        />
      </BrowserRouter>
    )

    expect(screen.getByText(/Editar vacina/i)).toBeTruthy()
  })
})
