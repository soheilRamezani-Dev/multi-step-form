import NavigationItem from "./NavigationItem";
import steps from "../../api/steps";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import StateType from "../../redux/stateType";

const Navigation = () => {
  const { pathname } = useLocation();
  const formState = useSelector((state: StateType) => state);
  const [firstStepIsComlete, setFirstStepIsComplete] = useState(false);
  useEffect(() => {
    if (
      formState.yourinfo.name === "" ||
      formState.yourinfo.email === "" ||
      formState.yourinfo.phone === ""
    ) {
      setFirstStepIsComplete(false)
    }else{
      setFirstStepIsComplete(true)
    }
  });
  return (
    <div className="navigation">
      <ul className="navigation-list">
        {steps.map((step, index) => (
          <NavigationItem
            id={index + 1}
            title={step.title}
            url={step.url}
            active={pathname === step.url ? true : false}
            available = {firstStepIsComlete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
