import {MainContext, useContext} from "./MainContext";
import { BsLink } from "react-icons/bs";

export default function TabsContent () {
    const { posts, certs, active } = useContext(MainContext)
    return (
        <div className="profile-tabs-content">
            {active === 1 ? (certs.map((cert, key) => (
                <div className="project" key={key}>
                    <img src={cert.image} className="project-img" alt={cert.description} />
                    <div className="project-detail">
                        <h1>{cert.name}</h1>
                        <p>{cert.description}</p>
                        <div className="project-link">
                            <a href={cert.projectLink} target="_blank" rel="noreferrer" >
                                <BsLink size="20" />
                            </a>
                        </div>
                    </div>
                </div>
            ))) : posts.map((post, key) => (
                <div className="project" key={key}>
                    <img src={post.image} className="project-img" alt={post.description} />
                    <div className="project-detail">
                        <h1>{post.name}</h1>
                        <p>{post.description}</p>
                        <div className="project-link">
                            <a href={post.projectLink} target="_blank" rel="noreferrer" >
                                <BsLink size="20" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
