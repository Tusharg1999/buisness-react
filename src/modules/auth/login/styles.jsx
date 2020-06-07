import styled, { css } from 'styled-components'
import { Heading, SubTitle } from '../../shared/components/typography/'
import Input from '../../shared/components/input'
import Button from '../../shared/components/button'

const LoginContainer = styled.div`
display:flex;
height:100%;
`

const FormContainer = styled.div`
box-sizing:border-box;
padding-left:200px;
padding-top:200px;
flex:1;
display:flex;
flex-direction:column;
${({ theme }) => css`
@media (min-width:100px) and (max-width: 1200px){
  height:100%;
  display:flex;
  padding-left:0px;
  padding-top:0px;
  padding:20px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
} 
`}
`
const SvgContainer = styled.div`
flex:1;
${({ theme }) => css`
@media only screen and (max-width: 1200px){
  display:none;
} 
`}
`
const LoginSvgImage = styled.img`
  height:100%;
  float:right
`
const LoginHeading = styled(Heading)`
font-size:3rem;
`
const LoginForm = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
position: relative;
top:100px;
width:500px
`
const LoginBody = styled(SubTitle)`
margin-top:10px;
`
const LoginInput = styled(Input)`
margin-top:20px
`
const LoginButton = styled(Button)`
margin-top:30px

`
export { LoginContainer, FormContainer, SvgContainer, LoginSvgImage, LoginHeading, LoginForm, LoginBody, LoginInput, LoginButton }