import React, { Component } from 'react'

import LoginSvg from '../../../assets/svgs/loginSvg.svg'
import { LoginContainer, FormContainer, SvgContainer, LoginSvgImage, LoginHeading, LoginForm, LoginBody, LoginInput, LoginButton } from './styles'

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
                        <LoginInput dark />
                        <LoginBody>Password</LoginBody>
                        <LoginInput dark />

                        <LoginButton>Sign In</LoginButton>
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
