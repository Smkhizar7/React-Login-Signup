import './Css/index.css';
import { auth } from "../../config/Firebase";
import {Link} from 'react-router-dom';
function Footer({logout}){
    let cUser = auth.currentUser;
    return cUser?
        <div className="Footer">
            <div className="Sub-Footer">
                <Link to="/profile" className="link">Profile</Link>
                <Link to="/chat" className="link">Chat</Link>
                <Link to="/contacts" className="link">Contacts</Link>
                <button onClick={logout} className="link-btn">Logout</button>
            </div>
            <p>Copyright by SMK Corporation</p>
        </div>:
        <div className="Footer">
            <div className="Sub-Footer">
                <Link to="/" className="link">Login</Link>
                <Link to="/signup" className="link">Sign Up</Link>
            </div>
            <p>Copyright by SMK Corporation</p>
        </div>;
}
export default Footer;