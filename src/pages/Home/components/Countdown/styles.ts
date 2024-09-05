import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
    margin-right: 1rem;
  }
  div {
    margin-top: 3rem;
  }
  @media ${devices.sm} {
    flex-direction: column;
    span {
      font-size: 5rem;
      padding: 0.5rem;
      margin: 5px;
    }
    div {
      margin-top: -20px;
    }
    &:nth-last-child(2) {
      margin-top: -10px;
    }
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media ${devices.sm} {
    display: none;
  }
`
