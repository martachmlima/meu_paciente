import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LoginInfo from '../../../pages/Login/LoginInfo'

describe('Component LoginInfo', () => {
  test('should be able to render a text', () => {
    render(
      <BrowserRouter>
        <LoginInfo />
      </BrowserRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: '+Saude'
      })
    ).toBeTruthy()
  })
})
