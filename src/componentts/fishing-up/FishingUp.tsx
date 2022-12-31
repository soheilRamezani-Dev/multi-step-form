import FormHeader from "../FormHeader";
import NextPrevButtons from "../NextPrevButtons";
import SelectedPlan from "./SelectedPlan";
import SelectedAddOnsItem from "./SelectedAddOnsItem";
import TotalPrice from "./TotalPrice";
import { useSelector } from "react-redux";
import StateType from "../../redux/stateType";
import plans from "../../api/plans_api";
import add_ons from "../../api/add_ons_api";

const FishingUp = () => {
  const finalState = useSelector((state: StateType) => state);
  const selectedPlan = plans.filter(
    (paln) => paln.id === finalState.plan.selectedPlan
  );
  const period = finalState.plan.period;
  const selectedAddOns = finalState.add_ons;
    const calculateTotal = ():string=>{
      let planPrice:number=0;
      let totalAddOnsPrice:number=0;
      let totalPrice:string = '';
      if( period==="monthly"){
        planPrice = selectedPlan[0].monthly_price;
        selectedAddOns.forEach(val=>{ totalAddOnsPrice+=add_ons[val].monthlyPrice});
        totalPrice = '$'+(planPrice+totalAddOnsPrice)+'/mo'
      }
      else{
        planPrice = selectedPlan[0].yearly_price;
        selectedAddOns.forEach(val=>{ totalAddOnsPrice+=add_ons[val].yearlylyPrice});
        totalPrice = '$'+(planPrice+totalAddOnsPrice)+'/yr';
      }    
      console.log(planPrice)
      console.log(totalAddOnsPrice)
      return totalPrice;
    }
    
  return (
    <>
      <FormHeader
        title="Fishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="form-body">
        <div className="form-main-part">
          <div className="fishing-up">
            <div className="fishing-up-info">
              <SelectedPlan
                plan_title={`${selectedPlan[0].name} (${period})`}
                plan_price={
                  period === "monthly"
                    ? `$${selectedPlan[0].monthly_price}/mo`
                    : `$${selectedPlan[0].yearly_price}/yr`
                }
              />
              <div className="selected-add-ons">
                {selectedAddOns.map((AddonId)=>{
                  const Addon= add_ons.filter((val)=>val.id===AddonId)[0];
                  return (<SelectedAddOnsItem
                  addons_title={Addon.title}
                  addons_price={period==="monthly"?`+$${Addon.monthlyPrice}/mo`:`+$${Addon.yearlylyPrice}/yr`}
                />)
                })}
                
              
              </div>
            </div>
            <TotalPrice price={calculateTotal()} timeline="year" />
          </div>
        </div>
        <NextPrevButtons
          back="Go Back"
          back_url="/add-ons"
          next="Confirm"
          next_url="/thank-you"
        />
      </div>
    </>
  );
};

export default FishingUp;
