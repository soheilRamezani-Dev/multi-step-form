import "./App.scss";
import Navigation from "./componentts/navigation";
import YourInfo from "./componentts/YourInfo/YourInfo";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        {/* Nsvigation */}
        <Navigation />

        {/* body */}
        
        <YourInfo/>
      </div>
    </div>
  );
}

export default App;
