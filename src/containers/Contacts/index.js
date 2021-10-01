import Container from 'react-bootstrap/Container';
import {ToggleColorMode,Footer} from '../../components';
import { useState } from 'react';
import { auth,signOut} from "../../config/Firebase";
import './Css/index.css';

function Contacts(){
    let user = auth.currentUser;
    const [mode, setMode] = useState('light');
    function UserSignOut(){
        signOut(auth).then(() => {
            console.log("Sign out successfully.");
            }).catch((error) => {
            console.log("Error in Sign out.",error);
            });
    }
    return (
    <Container fluid className={mode==='light'?"Light Contacts":"Dark Contacts"}>
        <ToggleColorMode auth={user} mode={mode} setMode={setMode} title="Contacts" logout={UserSignOut} />
        <div className="Contacts-content">
            <h1>Contacts Page</h1>
        </div>
        <Footer logout={()=>UserSignOut()} />
    </Container>
    );
}
export default Contacts;