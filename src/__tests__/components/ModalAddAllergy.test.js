import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ModalAddAllergy from '../../components/ModalAddAllergy'

describe('Component ModalAddAllergy', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <ModalAddAllergy isOpen={true} onClose={() => {}} />
      </BrowserRouter>
    )

    expect(screen.getByText('Adicionar alergia')).toBeTruthy()
  })
})
