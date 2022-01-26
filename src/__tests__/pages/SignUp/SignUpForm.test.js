import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUpForm from '../../../pages/SingnUp/SignUpForm'

describe('Component SignUpForm', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <SignUpForm handleSubmit={() => {}} errors={''} register={() => {}} />
      </BrowserRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: 'Bem vindo!'
      })
    ).toBeTruthy()
  })
})
