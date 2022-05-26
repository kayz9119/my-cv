import { MainContext, useContext } from "./MainContext";

export default function TabsButtons () {
    const {active, setActive} = useContext(MainContext)
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
