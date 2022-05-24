import { useState } from "react";

export default function TabsButtons () {
    const [active, setActive] = useState(0);
    const handleActive = (id) => {
        setActive(id);
    }
    return (
        <div className="profile-tabs">
            <div className={ active === 0 ? 'tab-button active' : 'tab-button' } onClick={() => handleActive(0)} >
                Portfolio
            </div>
            <div className={ active === 1 ? 'tab-button active' : 'tab-button' } onClick={() => handleActive(1)} >
                Skills
            </div>
            <div className="indicator"></div>
        </div>
    )
}
