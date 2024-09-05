import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.25rem;
  font-weight: bold;
  flex-wrap: wrap;
  @media ${devices.sm} {
    margin: 10px 0 -40px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
const BaseInput = styled.input`
  background: transparent;
  color: ${(props) => props.theme['gray-100']};
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
  @media ${devices.sm} {
    width: 100%;
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 3.5rem;
`
