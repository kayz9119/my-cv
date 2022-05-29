import { HiDownload } from "react-icons/hi";

export default function ProfileButtons () {
    return (
        <div className="profile-buttons">
            <a href="/" className="button button-cv">
                Download CV
                <HiDownload />
            </a>
            <a href="mailto:keremarslntrkk@hotmail.com" className="button">
                Contact Me
            </a>
        </div>
    )
}
