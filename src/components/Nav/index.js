import './Css/index.css';
import {Link} from 'react-router-dom';
// import moon from '../../assests/images/moon-solid.svg';
// import sun from '../../assests/images/sun-solid.svg';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
function Nav({light,onClick}){
    return (
        <div className={light?"Nav Nav-Light":"Nav Nav-Dark"}>
            <button className="icon-btn" onClick={onClick}>
                {light?<NightsStayIcon className="mode-icon"/>:<WbSunnyIcon className="mode-icon" />}
            </button>
            {/* <img src={light?NightsStayIcon:WbSunnyIcon} alt={light?"moon":"sun"} className="mode-icon" onClick={()=>onClick}/> */}
            <Link to="/profile" className="link" >Profile</Link>
            <Link to="/" className="link" >Login</Link>
            <Link to="/signup" className="link" >Sign Up</Link>
        </div>
    );
}
export default Nav;