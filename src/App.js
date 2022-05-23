import ProfileCard from "./components/ProfileCard";
import ProfileFacts from "./components/ProfileFacts";
import ProfileButtons from "./components/ProfileButtons";
import TabsButtons from "./components/TabsButtons";
import TabsContent from "./components/TabsContent";
function App() {
  return (
    <div className="container">
      <div className="btn-change-theme">Button</div>
        <ProfileCard />
        <ProfileFacts />
        <ProfileButtons />
        <TabsButtons />
        <TabsContent />
    </div>
  );
}

export default App;
