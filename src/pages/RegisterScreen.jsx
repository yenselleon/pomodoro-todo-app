import React from 'react'
import FormRegister from '../components/auth/FormRegister'
import Navbar from '../components/ui/Navbar'
import cellPhoneImg from '../images/cellPhoneLogin.svg'

const RegisterScreen = () => {
    return (
        <div className="registerScreen_main main">
            <Navbar />
            <div className="registerScreen_form_view columns is-flex is-justify-content-center box">

                <div className="registerScreen_viewForm column is-half is-flex is-justify-content-center box">
                    <FormRegister />
                </div>
                <div className=" is-hidden-mobile column is-half">
                    <img src={cellPhoneImg} alt=""/>
                </div>

            </div>
        </div>
    )
}

export default RegisterScreen
