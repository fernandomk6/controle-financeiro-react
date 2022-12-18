import React from 'react'
import * as C from './styles'

const ResumeItem = ({ Icon, title, value, color}) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon color={color} />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  )
}

export default ResumeItem