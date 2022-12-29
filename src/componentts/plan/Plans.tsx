import FormHeader from "../FormHeader";
import PlansItem from "./PlansItem";
import NextPrevButtons from "../NextPrevButtons";
import { useState } from "react";
import plans from "../../api/plans_api";
import { useSelector, useDispatch } from "react-redux";
import StateType from "../../redux/stateType";
import { changePeriod } from "../../redux/actions";
import { changePlan } from "../../redux/actions";

const Plans = () => {
  const selector = useSelector((state: StateType) => state.plan);
  const period = selector.period;
  const selectedPlan = selector.selectedPlan;
  const dispatch = useDispatch();
  const [monthlyOrYearly, setMonthlyOrYearly] = useState(period);
  const [activePlan, setActivePlan] = useState(selectedPlan);
  const monthlyOrYearlyHandler = (prevState: string) => {
    if (prevState === "monthly") {
      setMonthlyOrYearly("yearly");
    } else {
      setMonthlyOrYearly("monthly");
    }

    dispatch(changePeriod(monthlyOrYearly));
  };

  const selectPlanHandler = (index:number) :void =>{
    setActivePlan(index.toString());
    dispatch(changePlan(index.toString()));
  }
  return (
    <>
      <FormHeader
        title="Select your plan"
        description="you have the option of monthly or yearly billing"
      />
      <div className="form-body">
        <div className="form-main-part">
          <ul className="plans-list">
            {plans.map((plan, index) => (
              <div onClick={()=>selectPlanHandler(index)}>
                <PlansItem
                  key={index}
                  title={plan.name}
                  icon={plan.icon}
                  monthPrice={plan.monthly_price}
                  yearPrice={plan.yearly_price}
                  description={plan.description}
                  period={monthlyOrYearly}
                  active={index.toString() === activePlan ? true : false}
                />
              </div>
            ))}
          </ul>
          <div
            className={`form-body monthly-yearly-container ${monthlyOrYearly}`}
          >
            <div className="monthly-title">Monthly</div>
            <div
              onClick={() => monthlyOrYearlyHandler(monthlyOrYearly)}
              className="toggle-button"
            >
              <div className="toggle-button-circle"></div>
            </div>
            <div className="yearly-title">Yearly</div>
          </div>
        </div>
        <NextPrevButtons
          back="Go Back"
          back_url="/"
          next="Next Step"
          next_url="/add-ons"
        />
      </div>
    </>
  );
};

export default Plans;
