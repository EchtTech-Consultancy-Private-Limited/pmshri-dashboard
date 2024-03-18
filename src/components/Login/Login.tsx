import React, { useState } from 'react';
import './Login.scss';
import { Formik } from "formik";
import * as yup from "yup";

const Login = () => {

    const [invalidMessage, setInvalidMessage] = useState<string>('')

    const loginValidationSchema = yup.object({
        email: yup.string().email('Please enter valid email').required(("Email is required")),
        password: yup.string().required(("Password is required"))
    });

    const initialLognValues = {
        email: "",
        password: "",
    };

    const handleLoginSubmit = (values: any) => {
        if (values.email === 'dpgi_admin@gov.in' && values.password === 'admin@1234') {
            localStorage.setItem('isLogin', 'true')
            window.location.reload()
        }
        else {
            setInvalidMessage('Invalid Credentials')
        }

    }
    return (
        <section className="login ptb-60">
            <Formik
                initialValues={initialLognValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleLoginSubmit}>
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-5">
                                <div className="login-form">
                                    <h2 className="login-heading">
                                        Log In
                                    </h2>
                                    <form>
                                        {invalidMessage !== '' && <div className="text-danger">{invalidMessage}</div>}
                                        <div className="mb-4">
                                            <label className="form-label">Email</label>
                                            <input type="email" onChange={handleChange("email") as any} className="form-control" />
                                            {errors.email && touched.email && (
                                                <p className="text-danger">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Password</label>
                                            <input type="password" onChange={handleChange("password") as any} className="form-control" />
                                            {errors.password && touched.password && (
                                                <p className="text-danger">
                                                    {errors.password}
                                                </p>
                                            )}
                                        </div>
                                        <button type="submit" onClick={handleSubmit as any} className="btn blue-solid-btn w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </section>
    )
}

export default Login