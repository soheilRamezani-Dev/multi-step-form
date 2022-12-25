import FormHeader from "../FormHeader";
import PlansItem from "./PlansItem";
import NextPrevButtons from "../NextPrevButtons";

const Plans = () => {
  return (
    <>
      <FormHeader
        title="Select your plan"
        description="you have the option of monthly or yearly billing"
      />
      <div className="form-body">
        <ul className="plans-list form-main-part">
          <PlansItem
            title="Arcade"
            icon="/assets/images/icon-arcade.svg"
            monthPrice='$9/mo'
            yearPrice='$90/yr'
            description="2 mounth free"
            active
          />
          <PlansItem
            title="Advanced"
            icon="/assets/images/icon-advanced.svg"
            monthPrice='$12/mo'
            yearPrice='$120/yr'
            description="2 mounth free"
          />
          <PlansItem
            title="Pro"
            icon="/assets/images/icon-pro.svg"
            monthPrice='$15/mo'
            yearPrice='$150/yr'
            description="2 mounth free"
          />
        </ul>
        <NextPrevButtons back="Go Back" next="Next Step"/>
      </div>
    </>
  );
};

export default Plans;
