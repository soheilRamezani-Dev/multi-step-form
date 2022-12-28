import NavigationItem from "./NavigationItem";
import steps from "../../api/steps";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        {steps.map((step,index)=> <NavigationItem id={index+1} title={step.title} url={step.url} active />)}
        
        {/* <NavigationItem id={2} title={'SELECT PLAN'}/>
        <NavigationItem id={3} title={'ADD-ONS'}/>
        <NavigationItem id={4} title={'SUMMARY'}/> */}
      </ul>
    </div>
  );
};

export default Navigation;
