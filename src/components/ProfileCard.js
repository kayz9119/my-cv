import {BsGithub, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function ProfileCard () {
    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src="https://pbs.twimg.com/profile_images/1510473497654575107/fkxhILvd_400x400.jpg" alt="Profile"/>
            </div>
            <div className="profile-info">
                <h1>Kerem Arslantürk</h1>
                <p>Software Engineer</p>
                <div className="social-icons">
                    <BsGithub />
                    <BsTwitter />
                    <BsLinkedin />
                    <BsInstagram />
                </div>
            </div>
        </div>
    )
};
