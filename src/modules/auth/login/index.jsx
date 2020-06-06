import React, { Component } from 'react'

import LoginSvg from '../../../assets/svgs/loginSvg.svg'
import { LoginContainer, FormContainer, SvgContainer, LoginSvgImage } from './styles'

class Login extends Component {
    render() {
        return (
            <LoginContainer>
                <FormContainer>
                </FormContainer>
                <SvgContainer>
                    <LoginSvgImage src={LoginSvg} alt="" />
                </SvgContainer>
            </LoginContainer>
        )
    }
}
export default Login
