/* eslint-disable jest/valid-title */

import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event"

const typeIntoInputElements=({email,password,confirmPassword})=>{
    const emailInput=screen.getByLabelText('Email address')
    const passwordInput=screen.getByLabelText('Password')
    const confirmPasswordInput=screen.getByLabelText('Confirm Password')
    if(email){
        userEvent.type(emailInput,email)
    }
    if(password){
        userEvent.type(passwordInput,password)
    }
    if(confirmPassword){
        userEvent.type(confirmPasswordInput,confirmPassword)
    }

    return{
        emailInput,
        passwordInput,
        confirmPasswordInput
    }

}
describe('Test App component',()=>{

test('Test Initial render with intial state',()=>{
    render(<App />)
    expect(screen.getByLabelText('Email address').value).toBe('')
    expect(screen.getByLabelText('Password').value).toBe('')
    expect(screen.getByLabelText('Confirm Password').value).toBe('')
})

test('Test input After typing',()=>{
    render(<App/>)
    const {emailInput}=typeIntoInputElements({email:'amira@gmail.com'})
    const {passwordInput}=typeIntoInputElements({password:'asd123'})
    expect(emailInput.value).toBe('amira@gmail.com')
    expect(passwordInput.value).toBe('asd123')
})

test('test Error Rendering',()=>{
    render(<App/>)
    const {emailInput}=typeIntoInputElements({email:'amira@gmail.com'})
    const {passwordInput}=typeIntoInputElements({password:'123'})
    fireEvent.click(screen.getByRole("button",{name:/Submit/i}))

    // const pTag=screen.getByText(/The email you input is invalid./i)
    const pTag=screen.getByText(/The password you entered should contain 5 or more characters./i)
    expect(pTag).toBeInTheDocument()

})

})