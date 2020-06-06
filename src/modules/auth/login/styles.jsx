import styled from 'styled-components'
import { Heading, SubTitle } from '../../shared/components/typography/'


const LoginContainer = styled.div`
display:flex;
height:100%;
`

const FormContainer = styled.div`
padding:50px;
padding-left:150px;
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
const LoginHeading = styled(Heading)`
font-size:3rem;
`
const LoginForm = styled.form`
display:flex;
align-items:center;
`
const LoginBody = styled(SubTitle)`
`
export { LoginContainer, FormContainer, SvgContainer, LoginSvgImage, LoginHeading, LoginForm, LoginBody }