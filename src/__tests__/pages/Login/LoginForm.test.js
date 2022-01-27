import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LoginForm from '../../../pages/Login/LoginForm'

describe('Component LoginForm', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <LoginForm handleSubmit={() => {}} errors={''} register={() => {}} />
      </BrowserRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: 'Login'
      })
    ).toBeTruthy()
  })
})
