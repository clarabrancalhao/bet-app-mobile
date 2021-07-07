import React, { FC } from 'react'
import { StyledButton } from './styles'

interface IProps {
  onClick: () => {}
  className: string
  color: string
  name: string
  value: string
}

const Button = (props: IProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      className={props.className}
      color={props.color}
      name={props.name}
      value={props.value}
    >
      {props.children}
    </StyledButton>
  )
}

export default Button
