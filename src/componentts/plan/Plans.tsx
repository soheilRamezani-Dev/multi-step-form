import FormHeader from "../FormHeader";
import PlansItem from "./PlansItem";
import NextPrevButtons from "../NextPrevButtons";
import { useState } from "react";

const Plans = () => {
  const [monthlyOrYearly , setMonthlyOrYearly] = useState('monthly');
  const monthlyOrYearlyHandler = (prevState:string)=>{
    if(prevState==='monthly') setMonthlyOrYearly('yearly');
    else setMonthlyOrYearly('monthly')
    
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
            <PlansItem
              title="Arcade"
              icon="/assets/images/icon-arcade.svg"
              monthPrice="$9/mo"
              yearPrice="$90/yr"
              description="2 mounth free"
              active
            />
            <PlansItem
              title="Advanced"
              icon="/assets/images/icon-advanced.svg"
              monthPrice="$12/mo"
              yearPrice="$120/yr"
              description="2 mounth free"
            />
            <PlansItem
              title="Pro"
              icon="/assets/images/icon-pro.svg"
              monthPrice="$15/mo"
              yearPrice="$150/yr"
              description="2 mounth free"
            />
          </ul>
          <div className={`form-body monthly-yearly-container ${monthlyOrYearly}`}>
            <div className="monthly-title">Monthly</div>
            <div onClick={()=>monthlyOrYearlyHandler(monthlyOrYearly)} className="toggle-button">
              <div className="toggle-button-circle"></div>
            </div>
            <div className="yearly-title">Yearly</div>
          </div>
        </div>
        <NextPrevButtons back="Go Back" back_url="/" next="Next Step" next_url="/add-ons" />
      </div>
    </>
  );
};

export default Plans;
