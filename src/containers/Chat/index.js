import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import {Nav,MenuAppBar,VerticalTabs,Footer} from '../../components';
import { useState } from 'react';
import { auth,signOut} from "../../config/Firebase";
import './Css/index.css';

function Chat(){
    const [light,setLight] = useState(true);
    let cUser = auth.currentUser;
    // const [isLogin,setIsLogin] = useState(true);
    let history = useHistory();
    function UserSignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            // setIsLogin(false);
            console.log("Sign out successfully.");
            history.push("/login");
            }).catch((error) => {
            console.log("Error in Sign out.",error);
            // An error happened.
            });
    }
    return (
    <Container fluid className={light?"Light Chat":"Dark Chat"}>
        {/* <Nav onClick={()=>setLight(!light)} light={light} logout={()=>UserSignOut()} /> */}
        <MenuAppBar auth={cUser} title="Chat" />
        <VerticalTabs className="Chat-content" />
        {/* <Footer logout={()=>UserSignOut()} /> */}
    </Container>
    );
}
export default Chat;