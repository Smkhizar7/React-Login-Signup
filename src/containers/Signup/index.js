import './Css/index.css';
import {Button,BasicTextFields,Nav,Footer} from '../../components';
import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
function Signup(){
    const [light,setLight] = useState(true);
    return (
        <div className={light?"Light Signup":"Dark Signup"}>
            <Nav onClick={()=>setLight(!light)} light={light} />
            <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="grid"
            >
                <Grid item xs={8}>
                    <h1>Sign Up</h1>
                    <BasicTextFields title="Full Name" type="text" className="login-input" />
                    <BasicTextFields title="Email" type="email" className="login-input" />
                    <BasicTextFields title="Password" type="password" className="login-input" />
                    <Button className="btn" onClick="">Sign Up</Button>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}
export default Signup;