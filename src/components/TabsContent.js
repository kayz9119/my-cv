import {MainContext, useContext} from "./MainContext";
import { BsLink } from "react-icons/bs";

export default function TabsContent () {
    const { posts, active } = useContext(MainContext)
    return (
        <div className="profile-tabs-content">
            {active === 1 ? (<div>There is no skill content</div>) : posts.map((post, key) => (
                <div className="project" key={key}>
                    <img src={post.image} className="project-img" alt={post.description} />
                    <div className="project-detail">
                        <h1>{post.name}</h1>
                        <p>{post.description}</p>
                        <div className="project-link">
                            <a href={post.projectLink} target="_blank">
                                <BsLink size="20" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
