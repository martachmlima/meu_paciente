import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CardQuery from '../../components/cardQuery'

const objTest = {
  id: 1,
  doctor: 'fulano',
  date: '01/01',
  time: '12:00',
  contact: '999999999'
}

describe('CardQuery component', () => {
  test('should be able to render an CardQuery', () => {
    render(
      <BrowserRouter>
        <CardQuery obj={objTest} />
      </BrowserRouter>
    )

    expect(screen.getByText(/fulano/i)).toBeTruthy()
  })
})
