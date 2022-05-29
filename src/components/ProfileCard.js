import {BsGithub, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function ProfileCard () {
    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src="https://pbs.twimg.com/profile_images/1510473497654575107/fkxhILvd_400x400.jpg" alt="Profile"/>
            </div>
            <div className="profile-info">
                <h1>Kerem Arslantürk</h1>
                <p>Software Back-End Developer</p>
                <div className="social-icons">
                    <a href="https://github.com/kayz9119/" target="_blank" rel="noreferrer" ><BsGithub /></a>
                    <a href="https://twitter.com/kayzmonroe/" target="_blank" rel="noreferrer" ><BsTwitter /></a>
                    <a href="https://www.linkedin.com/keremarslntrkk/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
                    <a href="https://instagram.com/kayz9119/" target="_blank" rel="noreferrer" ><BsInstagram /></a>
                </div>
            </div>
        </div>
    )
};
