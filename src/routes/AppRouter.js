import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, UsersPage, Profile, DetailedUser, SearchUser } from '../pages';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/find-user" component={SearchUser} />
            <Route exact path="/user/:id" component={DetailedUser} />
        </Switch>
    );
}

export default AppRouter;
