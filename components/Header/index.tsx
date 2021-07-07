import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Wrapper, LogoText, LogoWrapper, Marker } from './style'

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <LogoText>TGL</LogoText>
          <Marker />
        </LogoWrapper>
      </Wrapper>
    )
  }
}
