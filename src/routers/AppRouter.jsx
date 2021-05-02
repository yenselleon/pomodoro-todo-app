import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import DashBoardScreen from '../pages/DashBoardScreen';
import AuthRouter from './AuthRouter';


const AppRouter = () => {
    return (
        <Router>
            <div>

            <Switch>

                <Route  path="/auth" component={AuthRouter} />
                <Route exact path="/" component={DashBoardScreen}/>

                <Redirect to='/auth/login' />

            </Switch>

            </div>

        </Router>
    )
}

export default AppRouter
