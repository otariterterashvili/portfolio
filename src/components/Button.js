import styled from 'styled-components'

const Button = styled.button`
  background: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
  padding: 10px 30px;
  cursor: pointer;
  &:hover {
    background-color: #1a90da;
  }
`

// Button.defaultProps = {
//   theme: {
//     bg: 'white',
//     fontColor: 'black',
//   },
// }

export default Button
