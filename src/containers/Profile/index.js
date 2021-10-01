import './Css/index.css';
import profilePic from '../../assests/images/men-avatar.jpg';
import coverPic from '../../assests/images/bg.jpg';
import {ToggleColorMode,Post,Footer} from '../../components';
import { useEffect, useState } from 'react';
import pic1 from '../../assests/images/1.jpg';
import { auth,signOut,db,doc,getDoc } from "../../config/Firebase";
function Profile(){
    const [name,setName] = useState("Loading...");
    const [mode, setMode] = useState('light');
    const user = auth.currentUser;
    function UserSignOut(){
        signOut(auth).then(() => {
            console.log("Sign out successfully.");
            }).catch((error) => {
            console.log("Error in Sign out.",error);
            });
    }
    useEffect(()=>{
        if (user !== null) {
            let userData;
            const uid = user.uid;
            const docRef = doc(db, "users", uid);
            getDoc(docRef).then((res)=>{
                if (res.exists()) {
                    userData = res.data();
                    setName(userData.firstName + " " + userData.lastName);
                } else {
                console.log("No such document!");
                }
            }).catch((err)=>{
                console.log("err ===>",err);
            });
        }
    },[user])
    return (
        <div className={mode==='light'?"Light Profile":"Dark Profile"} >
            <ToggleColorMode auth={user} mode={mode} setMode={setMode} title="Chat" logout={UserSignOut} />
            <div className="header">
                <img src={coverPic} alt="Cover" className="bgPic" />
                <img src={profilePic} alt="Profile" className="profilePic" />
                <div className="name-div">
                    <h1 className="name">{name}</h1>
                    <h4 className="description">Web Developer</h4>
                </div>
            </div>
            <div className="body">
                <Post light={mode==='light'} profile={profilePic} name={name} date="5 Jan 2021" text="First Post" pic={pic1} likes="400" comments="918" shares="50" />
                <Post light={mode==='light'} profile={profilePic} name={name} date="18 Feb 2021" text="First Post" pic={pic1} likes="2M" comments="241" shares="250" />
                <Post light={mode==='light'} profile={profilePic} name={name} date="20 May 2021" text="Fifth Post" pic={pic1} likes="10K" comments="2650" shares="5000" />
            </div>
            <Footer logout={()=>UserSignOut()} />
        </div>
    );
}
export default Profile;