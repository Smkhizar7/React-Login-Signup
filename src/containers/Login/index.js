import './Css/index.css';
import {Button,BasicTextFields,Nav,Footer} from '../../components';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import {auth,signInWithEmailAndPassword} from '../../config/Firebase';
import lock from '../../assests/images/lock.png'
import { Formik } from 'formik';

function Login(){
    const [loading, setLoading] = useState(false);
    const [light,setLight] = useState(true);
    function UserSignIn({email,password}){
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className={light?"Light Login":"Dark Login"}>
            <Nav onClick={()=>setLight(!light)} light={light}/>
            <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="grid"
            >
                <div className="box">
                    <h1>Login</h1>
                    <img src={lock} alt="Lock" />
                    <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                            }
                        else if(values.password.length < 8){
                            errors.password = 'Password must be atleast 8 characters long.';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        UserSignIn(values);
                        setSubmitting(false);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                        <BasicTextFields 
                        error={errors.email}
                        title="Email" 
                        type="email" 
                        value={values.email} 
                        name="email" 
                        onBlur={handleBlur} 
                        className="login-input" 
                        onChange={handleChange} 
                        helperText={errors.email && touched.email && errors.email}
                        />
                        <BasicTextFields 
                        error={errors.password}
                        title="Password" 
                        type="password"
                        value={values.password} 
                        name="password"
                        onBlur={handleBlur} 
                        className="login-input" 
                        onChange={handleChange} 
                        helperText={errors.password && touched.password && errors.password}
                        />
                        <Button 
                        className="btn"
                        type="submit"
                        disabled={isSubmitting}
                        >
                            {loading?"Loading...":"Submit"}
                        </Button>
                        </form>
                    )}
                    </Formik>
                </div>
            </Grid>
            <Footer />
        </div>
    );
}
export default Login;