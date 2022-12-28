import FormHeader from "../FormHeader";
import NextPrevButtons from "../NextPrevButtons";
import SelectedPlan from "./SelectedPlan";
import SelectedAddOnsItem from "./SelectedAddOnsItem";
import TotalPrice from "./TotalPrice";

const FishingUp = () => {
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
              <SelectedPlan plan_title="Arcade (Yearly)" plan_price="$90/yr" />
              <div className="selected-add-ons">
                <SelectedAddOnsItem
                  addons_title="online service"
                  addons_price="+$10/yr"
                />
                <SelectedAddOnsItem
                  addons_title="Larger Storage"
                  addons_price="+$20/yr"
                />
              </div>
            </div>
            <TotalPrice price="$120/yr" timeline="year" />
          </div>
        </div>
        <NextPrevButtons back="Go Back" back_url="/add-ons" next="Next Step" next_url="/thank-you" />
      </div>
    </>
  );
};

export default FishingUp;
