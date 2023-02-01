import React, { useRef, useState } from "react";

// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import CheckButton from 'react-validation/build/button';

import AuthService from "../services/auth.service";
import { Button, Card, CardBody, Form, FormGroup, Input } from "reactstrap";

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="invalid-feedback d-block">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="invalid-feedback d-block">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="invalid-feedback d-block">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState('');

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage('');
        setSuccessful(false);

        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <Card className="m-2" style={{ width: '24rem' }}>
                <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card" />
                <CardBody>
                    <Form onSubmit={handleRegister} ref={form}>
                        {!successful && (
                            <div className="form">
                                <FormGroup>
                                    <label htmlFor="username">Username</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={email}
                                        onChange={onChangeUsername}
                                        validations={[required, vusername]} />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={onChangeEmail}
                                        validations={[required, validEmail]} />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required, vpassword]} />
                                </FormGroup>
                                <FormGroup>
                                    <Button block color="primary" size="lg">Sign Up</Button>
                                </FormGroup>
                            </div>
                        )}
                        {message && (
                            <div className="form-group">
                                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <Input type="checkbox" style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                </CardBody>

            </Card>
        </div>
    );
};

export default Register;