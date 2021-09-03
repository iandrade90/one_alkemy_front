import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import App from '../App';

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={App}>
                </Route>
                <Route exact path="/contact">
                    <h1>Contact </h1>
                </Route>
                <Route exact path="/about">
                    <h1>About</h1>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;