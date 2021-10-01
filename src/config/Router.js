import {Signup,Login,Profile,Chat,Contacts} from '../containers';
import {BrowserRouter as Router,Route,Redirect,Switch,useLocation} from 'react-router-dom';
import { useState,useEffect } from 'react';
import {auth,onAuthStateChanged} from './Firebase';
function PrivateRoute({auth,component:Component,...rest}){
    return ( 
    <Route {...rest} 
        component={
        ({location})=>
        auth?
        (<Component />)
        :
        (<Redirect
        to={{
            pathname:"/",
            state:{
                from:location.pathname,
            },
        }}
    />)}
    />
    );
}
function PublicRoute({auth,component:Component,...rest}){
    const location = useLocation();
    return ( 
    <Route {...rest} 
        component={
        ()=>
        !auth?
        (<Component />)
        :
        (<Redirect
        to={location.state?.from?location.state.from:"/profile"}
    />)}
    />
    );
}
function AppRouter(){
    const [isAuth,setIsAuth] = useState(false);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            user?setIsAuth(true):setIsAuth(false);
        })
    },[])
    function ScrollToTop(){
        let {pathname} = useLocation();
        useEffect(()=>
            window.scrollTo(0,0)
        ,[pathname])
        return null;
    }
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <PublicRoute auth={isAuth} exact path="/" component={Login} />
                <PublicRoute auth={isAuth} exact path="/login" component={Login} />
                <PublicRoute auth={isAuth} exact path="/signup" component={Signup} />
                <PrivateRoute auth={isAuth} exact path="/profile" component={Profile} />
                <PrivateRoute auth={isAuth} exact path="/chat" component={Chat} />
                <PrivateRoute auth={isAuth} exact path="/contacts" component={Contacts} />
            </Switch>
        </Router>
    );
}
export default AppRouter;