import {Signup,Login,Profile} from '../containers';
import {BrowserRouter as Router,Route,Switch,useLocation} from 'react-router-dom';
import { useEffect } from 'react';
function AppRouter(){
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
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
}
export default AppRouter;