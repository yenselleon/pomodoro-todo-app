import React from 'react'
import FormLogin from '../ui/FormLogin';
import Navbar from '../ui/Navbar'
import cellPhoneImg from '../../images/cellPhoneLogin.svg'

const LoginScreen = () => {
    return (
        <div className="loginScreen_main main ">
            <Navbar/>
            <div className="loginScreen_form_view columns is-flex is-justify-content-center box">
                <div className="loginScreen_viewForm column is-half is-flex is-justify-content-center box">
                    <FormLogin />
                </div>
                <div className="loginScreen_wrapper_image is-hidden-mobile column is-half">
                    <img src={cellPhoneImg} alt=""/>
                </div>

            </div>
        </div>
    )
}

export default LoginScreen;
