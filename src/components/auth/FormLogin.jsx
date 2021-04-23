import React from 'react'
import logo from '../../images/primaryLogo.png'
import {
    Link
  } from "react-router-dom";


const FormLogin = () => {
    

    return (
        <form className="formLogin_main">
        <section className="formLogin__section_header">
            <img className="formLofin_header-img mb-5" src={logo} alt=""/>
            <h1 className="formLogin_welcome_tittle mb-1">Welcome to PodomoroTodoApp</h1>
            <span className="mt-1 mb-1 span_form">You don't have an acount? <Link to="/auth/register">Sign up</Link> </span>
        </section>
        

        <div className="field">
            <label className="label label_form">Username</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="text" placeholder="Text input" value="" />
                <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                </span>
            </div>
            <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
            <label className="label label_form">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input" value="" />
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
        </div>


        <div className="field">
            <div className="control">
                <p>
                    <a href="#home">I forgot my password</a>
                </p>
            </div>
        </div>

        <div className="field is-grouped is-justify-content-center">
            <div className="control">
                <button className="button is-link">Login</button>
            </div>
        </div>
    </form>
    )
}

export default FormLogin
