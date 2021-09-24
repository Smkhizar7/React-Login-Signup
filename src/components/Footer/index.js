import './Css/index.css';
import {Link} from 'react-router-dom';
function Footer(){
    return (
        <div className="Footer">
            <div className="Sub-Footer">
                <Link to="/" className="link">Login</Link>
                <Link to="/signup" className="link">Sign Up</Link>
            </div>
            <p>Copyright by SMK Corporation</p>
        </div>
    );
}
export default Footer;