import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MedicationCard from '../../components/MedicationCard'

const objTest = {
  name: 'test',
  frequency: 0,
  time: '12:00',
  use: 'fulano',
  currentFunction: () => {},
  id: 1
}

describe('Component MedicationCard', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <MedicationCard
          name={objTest.name}
          frequency={objTest.frequency}
          time={objTest.time}
          use={objTest.use}
          currentFunction={objTest.currentFunction}
          id={objTest.id}
        />
      </BrowserRouter>
    )

    expect(screen.getByText(/test/i)).toBeTruthy()
  })
})
