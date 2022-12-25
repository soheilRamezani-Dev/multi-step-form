import FormHeader from "../FormHeader";
import NextPrevButtons from '../NextPrevButtons'

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
              <div className="selected-plan">
                <div>
                  <div className="plan-title">Arcade (Yearly)</div>
                  <div className="change-button">change</div>
                </div>
                <div className="price">$90/yr</div>
              </div>
              <div className="selected-add-ons">
                <div className="selected-addons-item">
                  <div className="selected-addons-title">online service</div>
                  <div className="price">+$10/yr</div>
                </div>
                <div className="selected-addons-item">
                  <div className="selected-addons-title">Larger Storage</div>
                  <div className="price">+$20/yr</div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="total-title">Total (per year)</div>
              <div className="total-price">$120/yr</div>
            </div>
          </div>
        </div>
        <NextPrevButtons back="Go Back" next="Next Step" />
      </div>
    </>
  );
};

export default FishingUp;
