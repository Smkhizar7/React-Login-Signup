import './Css/index.css';
import profilePic from '../../assests/images/profile-img.jpg';
import coverPic from '../../assests/images/bg.jpg';
import {Nav,Post,Footer} from '../../components';
import { useState } from 'react';
import pic1 from '../../assests/images/1.jpg';

function Profile(){
    const [name,setName] = useState("Shaikh Muhammad Khizar");
    const [light,setLight] = useState(true);
    return (
        <div className={light?"Light Profile":"Dark Profile"} >
            <Nav onClick={()=>setLight(!light)} light={light} />
            <div className="header">
                <img src={coverPic} alt="Cover" className="bgPic" />
                <img src={profilePic} alt="Profile" className="profilePic" />
                <div className="name-div">
                    <h1 className="name">{name}</h1>
                    <h4 className="description">Web Developer</h4>
                </div>
            </div>
            <div className="body">
                <Post light={light} profile={profilePic} name={name} date="5 Jan 2021" text="First Post" pic={pic1} likes="400" comments="918" shares="50" />
                <Post light={light} profile={profilePic} name={name} date="18 Feb 2021" text="First Post" pic={pic1} likes="2M" comments="241" shares="250" />
                <Post light={light} profile={profilePic} name={name} date="02 March 2021" text="Second Post" pic={pic1} likes="80" comments="809" shares="80" />
                <Post light={light} profile={profilePic} name={name} date="25 March 2021" text="Third Post" pic={pic1} likes="5" comments="700" shares="40" />
                <Post light={light} profile={profilePic} name={name} date="10 April 2021" text="Fourth Post" pic={pic1} likes="10M" comments="2050" shares="10" />
                <Post light={light} profile={profilePic} name={name} date="20 May 2021" text="Fifth Post" pic={pic1} likes="10K" comments="2650" shares="5000" />
            </div>
            <Footer />
        </div>
    );
}
export default Profile;