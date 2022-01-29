import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ModalAddMedication from '../../components/ModalAddMedication'

const objTest = {
  isOpen: true,
  onClose: () => {}
}

describe('Component MedicationCard', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <ModalAddMedication isOpen={objTest.isOpen} onClose={objTest.onClose} />
      </BrowserRouter>
    )

    expect(screen.getByText('Adicionar Medicação')).toBeTruthy()
  })
})
