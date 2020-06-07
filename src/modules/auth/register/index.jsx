import React, { Component } from 'react'

import RegisterSvg from '../../../assets/svgs/registerSvg.svg'
import { RegisterContainer, FormContainer, SvgContainer, RegisterSvgImage, RegisterHeading, RegisterForm, RegisterBody, RegisterInput, RegisterButton } from './styles'

class Register extends Component {
    render() {
        return (
            <RegisterContainer>
                <SvgContainer>
                    <RegisterSvgImage src={RegisterSvg} alt="" />
                </SvgContainer>
                <FormContainer>
                    <RegisterHeading>
                        Register To Join.
                    </RegisterHeading>
                    <RegisterForm>
                        <RegisterBody>Name</RegisterBody>
                        <RegisterInput dark />
                        <RegisterBody>Email Address</RegisterBody>
                        <RegisterInput dark />
                        <RegisterBody>Password</RegisterBody>
                        <RegisterInput dark />

                        <RegisterButton>Sign In</RegisterButton>
                    </RegisterForm>
                </FormContainer>
            </RegisterContainer>
        )
    }
}
export default Register
