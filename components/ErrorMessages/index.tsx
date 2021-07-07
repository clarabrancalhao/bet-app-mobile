import React from 'react'
import { ErrorText } from './styles'

export const EmailError = () => {
  return <ErrorText>Please enter a valid email.</ErrorText>
}

export const PasswordError = () => {
  return (
    <ErrorText>
      Your password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1
      number
    </ErrorText>
  )
}

export const NewPasswordError = () => {
  return <ErrorText>Passwords don't match!</ErrorText>
}
