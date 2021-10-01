import './Css/index.css';
import {Button,BasicTextFields,ToggleColorMode,Footer} from '../../components';
import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Formik } from 'formik';
import {auth,updateProfile,createUserWithEmailAndPassword,db,doc,setDoc} from '../../config/Firebase';
function Signup(){
    let user = auth.currentUser;
    const [mode, setMode] = useState('light');
    const [loading, setLoading] = useState(false);
    const [light,setLight] = useState(true);
    async function UserSignup({fname,lname,email,password}){
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            try {
                updateProfile(auth.currentUser, {
                displayName: (fname + " " + lname)
                }).then(() => {
                    setDoc(doc(db, "users", user.uid), {
                        firstName: fname,
                        lastName: lname,
                        email: email,
                        });
                    setLoading(false);
                }).catch((error) => {
                    setLoading(false);
                    console.log(error);
                });

            }
            catch (e) {
                setLoading(false);
                console.error("Error adding document: ", e);
            }
        })
        .catch((error) => {
            setLoading(false);
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className={mode==="light"?"Light Signup":"Dark Signup"}>
            <ToggleColorMode auth={user} mode={mode} setMode={setMode} title="Sign Up" />
            {/* <Nav onClick={()=>setLight(!light)} light={light} /> */}
            <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="grid"
            >
                <div className="box">
                    <h1>Sign Up</h1>
                    <Formik
                    initialValues={{ fname: '',lname:'',email: '', password: '',cpassword:'' }}
                    validate={values => {
                        const errors = {};
                        if (!values.fname) {
                            errors.fname = 'Required';
                        }else if(values.fname.length>20){
                            errors.fname = "First name not longer than 20 characters."
                        }
                        if (!values.lname) {
                            errors.lname = 'Required';
                        }else if(values.fname.length>20){
                            errors.lname = "Last name not longer than 20 characters."
                        }
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
                        if (!values.cpassword) {
                            errors.cpassword = 'Required';
                            }
                        else if(values.cpassword !== values.password){
                            errors.cpassword = "Password does not match .";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        UserSignup(values);
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
                        error={errors.fname}
                        title="First Name" 
                        type="text" 
                        value={values.fname}
                        name="fname"
                        onBlur={handleBlur}
                        className="login-input" 
                        onChange={handleChange}
                        helperText={errors.fname && touched.fname && errors.fname} 
                        />
                        <BasicTextFields 
                        error={errors.lname}
                        title="Last Name" 
                        type="text" 
                        value={values.lname}
                        name="lname"
                        onBlur={handleBlur}
                        className="login-input" 
                        onChange={handleChange}
                        helperText={errors.lname && touched.lname && errors.lname}
                        />
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
                        <BasicTextFields 
                        error={errors.cpassword}
                        title="Confirm Password" 
                        type="password"
                        value={values.cpassword} 
                        name="cpassword"
                        onBlur={handleBlur} 
                        className="login-input" 
                        onChange={handleChange} 
                        helperText={errors.cpassword && touched.cpassword && errors.cpassword}
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
export default Signup;