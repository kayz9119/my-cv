import ProfileCard from "./components/ProfileCard";
import ProfileFacts from "./components/ProfileFacts";
import ProfileButtons from "./components/ProfileButtons";
import TabsButtons from "./components/TabsButtons";
import TabsContent from "./components/TabsContent";
import {MainContext} from "./components/MainContext";
import { useState, useEffect } from "react";


function App() {
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState(0);
  useEffect( () => {
    fetch("https://myportfolioapi-12345.herokuapp.com/portfolio")
        .then(res => res.json())
        .then(res => setPosts([...res]));
    console.log(posts)
  }, []);
  const data = {
    active,
    setActive,
    posts
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
