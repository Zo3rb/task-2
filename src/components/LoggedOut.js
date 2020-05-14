import React, { useState, Fragment } from 'react';
import { Button, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoggedOut = props => {

    // Declaring Log In Modal States
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);

    // Declaring State for the Current Phone Number & Password
    const [phone, setPhone] = useState("")
    const [phoneErr, setPhoneErr] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState(false)

    const handleSubmit = e => {
        if (phone.length < 5) {
            setPhoneErr(true)
            e.preventDefault()
        }
        else if (password.length < 5) {
            setPasswordErr(true)
            e.preventDefault()
        }
        else {
            e.preventDefault()
            props.loggedIn()
        }
    }

    return (
        <Fragment>
            <Button color="inherit" className="login" onClick={toggle}>تسجيل الدخول</Button>
            <Button colo="inherit">
                <Link to="/users" className="text-decoration-none text-white">المستخدمين</Link>
            </Button>
            {/* The Modal Body */}
            <Modal
                isOpen={modal}
                toggle={toggle}
                className="text-primary"
            >
                <ModalHeader toggle={toggle}>تسجيل الدخول</ModalHeader>
                <ModalBody>
                    <div className="text-center">
                        <AccountCircle fontSize="large" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className="w-100 my-2"
                            label="التليفون"
                            variant="outlined"
                            type="number"
                            required
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            error={phoneErr}
                            helperText="Please Type 5 or More Digits (Any)"
                        />
                        <TextField
                            className="w-100 my-2"
                            label="الرقم السري"
                            variant="outlined"
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            error={passwordErr}
                            helperText="Please Type 5 or More Digits (Any)"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className="mx-1"
                            type="submit"
                        >
                            دخول
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className="mx-1"
                            type="reset"
                            onClick={() => toggle()}
                        >
                            إلغاء
                        </Button>
                    </form>
                </ModalBody>
            </Modal>
            {/* The Modal Body */}
        </Fragment>
    );
}

export default LoggedOut;
