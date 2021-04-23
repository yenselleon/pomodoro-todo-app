import React from 'react';
import logo from '../../images/primaryLogo.png';
import {
    Link
  } from "react-router-dom";




const FormRegister = () => {
    return (
        <form className="formLogin_main ">
            <section className="formLogin__section_header">
                <img className="formLofin_header-img mb-5" src={logo} alt=""/>
                <h1 className="formLogin_welcome_tittle mb-1">Welcome to PodomoroTodoApp</h1>
                <span className="mt-1 mb-1 span_form">Already have an acount? <Link to="/auth/login">Sign in</Link> </span>
            </section>
            <div className="field">
                <label className="label label_form">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
            </div>

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
                <label className="label label_form">Birth Date</label>
                <div className="control has-icons-right">
                    <input className="input" type="date" />
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label label_form">Gender</label>
                <div className="control">
                    <div className="select">
                    <select>
                        <option selected disabled>Select your Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="checkbox">
                    <input type="checkbox" />
                    I agree to the <a href="#home">terms and conditions</a>
                    </label>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default FormRegister
