import FormHeader from "../FormHeader";
import NextPrevButtons from "../NextPrevButtons";
import AddOnsItem from "./AddOnsItem";
import add_ons from "../../api/add_ons_api";
import { useSelector } from "react-redux";
import StateType from "../../redux/stateType";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddOns = () => {
  const selector = useSelector((state: StateType) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      selector.yourinfo.name === "" ||
      selector.yourinfo.email === "" ||
      selector.yourinfo.phone === ""
    ) {
      navigate("/");
    }
  }, []);
  const addOnsState = selector.add_ons;
  const period = selector.plan.period;
  return (
    <div className="add-ons">
      <FormHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="form-body">
        <form>
          <div className="form-main-part">
            {add_ons.map((value) => (
              <AddOnsItem
                key={value.id}
                id={value.id}
                title={value.title}
                description={value.description}
                price={period==="monthly" ? value.monthlyPrice:value.yearlylyPrice}
                period={period}
                active={addOnsState.includes(value.id)}
              />
            ))}
          </div>
        </form>
        <NextPrevButtons
          back="Go Back"
          back_url="/plans"
          next="Next Step"
          next_url="/fishing-up"
        />
      </div>
    </div>
  );
};

export default AddOns;
