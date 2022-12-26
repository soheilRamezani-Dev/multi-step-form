const SelectedPlan = ({
  plan_title,
  plan_price,
}: {
  plan_title: string;
  plan_price: string;
}) => {
  return (
    <div className="selected-plan">
      <div>
        <div className="plan-title">{plan_title}</div>
        <div className="change-button">change</div>
      </div>
      <div className="price">{plan_price}</div>
    </div>
  );
};

export default SelectedPlan;
