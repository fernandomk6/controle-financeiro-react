import styled from 'styled-components'

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;

  @media (max-width: 320px) {
    height: 180px;
  }
`

export const Header = styled.h1``

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;
`