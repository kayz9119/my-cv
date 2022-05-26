import ProfileCard from "./components/ProfileCard";
import ProfileFacts from "./components/ProfileFacts";
import ProfileButtons from "./components/ProfileButtons";
import TabsButtons from "./components/TabsButtons";
import TabsContent from "./components/TabsContent";
import {MainContext} from "./components/MainContext";
import { useState } from "react";


function App() {
  const [active, setActive] = useState(0);

  const data = {
    active,
    setActive
  }
  return (
    <MainContext.Provider value={data}>
      <div className="container">
        <div className="btn-change-theme">Button</div>
        <ProfileCard />
        <ProfileFacts />
        <ProfileButtons />
        <TabsButtons />
        <TabsContent />
      </div>
    </MainContext.Provider>
  );
}

export default App;
