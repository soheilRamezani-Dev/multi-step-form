import NavigationItem from "./NavigationItem";
import steps from "../../api/steps";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <div className="navigation">
      <ul className="navigation-list">
        {steps.map((step, index) => (
          <NavigationItem
            id={index + 1}
            title={step.title}
            url={step.url}
            active={pathname === step.url ? true : false}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
