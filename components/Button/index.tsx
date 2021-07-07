import React, { FC } from 'react'
import { StyledButton } from './styles'

export interface IProps {
  onPress: any
  className: string
  color?: string
  name?: string
  value?: number
}

const Button: FC<IProps> = (props) => {
  return (
    <StyledButton
      onPress={props.onPress}
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
