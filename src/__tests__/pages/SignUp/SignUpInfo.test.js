import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUpInfo from '../../../pages/SingnUp/SignUpInfo'

describe('Component SignUpInfo', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <SignUpInfo />
      </BrowserRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: '+Saude'
      })
    ).toBeTruthy()
  })
})
