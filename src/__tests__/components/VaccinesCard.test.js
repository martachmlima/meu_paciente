import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { VaccinesCard } from '../../components/VaccinesCard'

const objTest = {
  type: 'test',
  date: '01/01',
  nextshot: '01/02',
  id: 1,
  complete: false
}

describe('Component VaccinesCard', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <VaccinesCard
          type={objTest.type}
          date={objTest.date}
          nextshot={objTest.nextshot}
          id={objTest.id}
          complete={objTest.complete}
        />
      </BrowserRouter>
    )

    expect(screen.getByText(/Ultima dose/i)).toBeTruthy()
  })
})
