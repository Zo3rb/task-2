import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const Header = props => {
    // Creating Render Helper Method For Header (Navbar) Based on The Props
    const renderNavbar = () => {
        if (props.signedIn) {
            return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="home">
                            <Link to="/">الرئيسية</Link>
                        </Typography>
                        <LoggedIn loggedOut={props.loggedOut} />
                    </Toolbar>
                </AppBar>
            )
        }
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="home">
                        <Link to="/">الرئيسية</Link>
                    </Typography>
                    <LoggedOut loggedIn={props.loggedIn} />
                </Toolbar>
            </AppBar>
        )
    }

    return (
        <Fragment>
            {renderNavbar()}
        </Fragment>
    );
}

export default Header;
