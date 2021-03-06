import ProfileCard from "./components/ProfileCard";
import ProfileFacts from "./components/ProfileFacts";
import ProfileButtons from "./components/ProfileButtons";
import TabsButtons from "./components/TabsButtons";
import TabsContent from "./components/TabsContent";
import {MainContext} from "./components/MainContext";
import { useState, useEffect } from "react";
import {BiBrightnessHalf} from "react-icons/bi"
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [certs, setCerts] = useState([]);
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState(0);

  const changeTheme = () => {
    setTheme(theme === 0 ? 1 : 0);
  }

  useEffect( () => {
    fetch("https://myportfolioapi-12345.herokuapp.com/portfolio")
        .then(res => res.json())
        .then(res => setPosts([...res]));
  }, []);

  useEffect( () => {
    fetch("https://myportfolioapi-12345.herokuapp.com/certificate")
        .then(res => res.json())
        .then(res => setCerts([...res]));
  }, []);


  const data = {
    active,
    setActive,
    posts,
    certs
  }

  return (
    <MainContext.Provider value={data}>
      <div className={theme === 0 ? "container dark" : "container light"}>
        <button className="btn-change-theme" onClick={changeTheme}>
          <BiBrightnessHalf />
        </button>
        <ProfileCard />
        <ProfileFacts />
        <ProfileButtons />
        <TabsButtons />
        <TabsContent />
        <Footer />
      </div>
    </MainContext.Provider>
  );
}

export default App;
