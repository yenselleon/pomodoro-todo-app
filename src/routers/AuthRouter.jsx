import React from 'react'
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">

                <Switch>

                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route  path="/auth/register" component={RegisterScreen} />

                    <Redirect to="/auth/login"/>

                </Switch>
            
            </div>
        </div>
    )
}

export default AuthRouter
