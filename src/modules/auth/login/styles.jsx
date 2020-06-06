import styled, { css } from 'styled-components'


const LoginContainer = styled.div`
display:flex;
height:100%;
`

const FormContainer = styled.div`
flex:3;
display:flex;
flex-direction:column;
`
const SvgContainer = styled.div`
flex:2;
`
const LoginSvgImage = styled.img`
  height:100%;
  float:right
`
export { LoginContainer, FormContainer, SvgContainer, LoginSvgImage }