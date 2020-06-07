import styled, { css } from 'styled-components'
import { Heading, SubTitle } from '../../shared/components/typography/'
import Input from '../../shared/components/input'
import Button from '../../shared/components/button'

const RegisterContainer = styled.div`
display:flex;
height:100%;
@media (min-width:100px) and (max-width: 1200px){
  justify-content:center;
  align-items:center;
}
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
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:50%;
  height:100%;
  display:flex;
  padding-right:10px;
  padding-left:10px;
  padding-top:0px;
  padding-bottom:40px;

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
const RegisterSvgImage = styled.img`
  height:100%;
  float:left;
`
const RegisterHeading = styled(Heading)`
font-size:3rem;
`
const RegisterForm = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
position: relative;
top:7%;
width:500px;
@media (min-width:100px) and (max-width: 600px){
  width:100%;
}
@media (min-width:500px) and (max-width: 700px){
  width:50%;
}
@media (min-width:700px) and (max-width: 1200px){
  width:50%;
}
`
const RegisterBody = styled(SubTitle)`
margin-top:10px;
`
const RegisterInput = styled(Input)`
margin-top:20px
`
const RegisterButton = styled(Button)`
margin-top:30px

`
export { RegisterContainer, FormContainer, SvgContainer, RegisterSvgImage, RegisterHeading, RegisterForm, RegisterBody, RegisterInput, RegisterButton }