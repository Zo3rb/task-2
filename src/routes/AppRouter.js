import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, UsersPage } from '../pages';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/users" component={UsersPage} />
        </Switch>
    );
}

export default AppRouter;
