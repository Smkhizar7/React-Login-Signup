import Container from 'react-bootstrap/Container';
import { ToggleColorMode,VerticalTabs } from '../../components';
import { useState } from 'react';
import { auth,signOut } from "../../config/Firebase";
import './Css/index.css';

function Chat(){
    const [mode, setMode] = useState('light');
    let user = auth.currentUser;
    function UserSignOut(){
        signOut(auth).then(() => {
            console.log("Sign out successfully.");
            }).catch((error) => {
            console.log("Error in Sign out.",error);
            });
    }
    return (
    <Container fluid className={mode==='light'?"Light Chat":"Dark Chat"}>
        <ToggleColorMode auth={user} mode={mode} setMode={setMode} title="Chat" logout={UserSignOut} />
        <VerticalTabs className={mode==='light'?"Chat-content Light":"Dark Chat-content"} />
    </Container>
    );
}
export default Chat;