import "./App.scss";
import AddOns from "./componentts/add-ons/AddOns";
import Navigation from "./componentts/navigation/navigation";
//import Plans from "./componentts/plan/Plans";
//import YourInfo from "./componentts/YourInfo/YourInfo";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        {/* Nsvigation */}
        <Navigation />

        {/* body */}
        <div className="form-container">
          {/* <YourInfo/> */}
          {/* <Plans /> */}
          <AddOns/>

        </div>
      </div>
    </div>
  );
}

export default App;
