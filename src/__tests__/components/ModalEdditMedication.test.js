import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ModalEditMedication from '../../components/ModalEditMedication'

const objTest = {
  id: 1,
  isOpen: true,
  onClose: () => {}
}

describe('Component ModalEditMedication', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <ModalEditMedication
          isOpen={objTest.isOpen}
          onClose={objTest.onClose}
          id={objTest.id}
        />
      </BrowserRouter>
    )

    expect(screen.getByText('Alterar Remédio')).toBeTruthy()
  })
})
