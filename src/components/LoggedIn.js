import React, { useState } from 'react';
import { IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const LoggedIn = props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="login">
            <IconButton
                aria-label={props.currentUser}
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Button colo="inherit">
                <Link to="/users" className="text-decoration-none text-white">المستخدمين</Link>
            </Button>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/profile" className="text-decoration-none">حسابي</Link>
                </MenuItem>
                <MenuItem onClick={() => { props.loggedOut(); handleClose() }}>تسجيل خروج</MenuItem>
            </Menu>
        </div>
    );
}

export default LoggedIn;
