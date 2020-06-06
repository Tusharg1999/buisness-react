import React, { Component } from 'react'

import LoginSvg from '../../../assets/svgs/loginSvg.svg'
import { LoginContainer, FormContainer, SvgContainer, LoginSvgImage, LoginHeading, LoginForm, LoginBody } from './styles'

class Login extends Component {
    render() {
        return (
            <LoginContainer>
                <FormContainer>
                    <LoginHeading>
                        Welcome Back!
                    </LoginHeading>
                    <LoginForm>
                        <LoginBody>Email Address</LoginBody>
                    </LoginForm>
                </FormContainer>
                <SvgContainer>
                    <LoginSvgImage src={LoginSvg} alt="" />
                </SvgContainer>
            </LoginContainer>
        )
    }
}
export default Login
