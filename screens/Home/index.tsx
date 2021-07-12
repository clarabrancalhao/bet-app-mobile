import React from 'react'

import SelectGameCard from '../../components/SelectGameCard'
import Header from '../../components/Header'
import { ContentWrapper, Paragraph, Title, Wrapper } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Title>RECENT GAMES</Title>
        <Paragraph>Filters</Paragraph>
        <SelectGameCard type="filter" />
      </ContentWrapper>
    </Wrapper>
  )
}
