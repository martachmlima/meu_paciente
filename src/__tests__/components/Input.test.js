import { render, screen } from '@testing-library/react'
import InputComponent from '../../components/input'
import { BrowserRouter } from 'react-router-dom'

describe('Input Component', () => {
  test('should be able to render an input', () => {
    render(
      <BrowserRouter>
        <InputComponent
          register={() => {}}
          label='teste'
          errors='errors'
          valueRegister='email'
          placeholder='teste'
        />
      </BrowserRouter>
    )

    expect(screen.getByPlaceholderText('teste')).toBeTruthy()
  })
})

// <InputComponent

// label={"Teste de input"}
// errors={"errors"}
// register={register}
// valueRegister={"email"}
// />
