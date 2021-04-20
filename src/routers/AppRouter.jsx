import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import HomeScreen from '../components/taskList/HomeScreen';
import AuthRouter from './AuthRouter';


const AppRouter = () => {
    return (
        <Router>
            <div>

            <Switch>

                <Route  path="/auth" component={AuthRouter} />
                <Route exact path="/" component={HomeScreen}/>

                <Redirect to='/auth/login' />

            </Switch>

            </div>

        </Router>
    )
}

export default AppRouter
