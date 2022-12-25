import { useState } from "react";

type PlansItemInput = {
  title: string;
  icon: string;
  monthPrice: string;
  yearPrice: string;
  description?: string;
  active?:boolean
};

const PlansItem = ({
  title,
  icon,
  monthPrice,
  yearPrice,
  description,
  active=false,
}: PlansItemInput) => {
  const [monthlyOrYearly, setMonthlyOrYearly] = useState("monthly");
  console.log(icon);
  return (
    <li className={`plan-item ${active?'active':''}`}>
      <div className="plan-icon">
        <img src={process.env.PUBLIC_URL + icon} alt={`${title} icon`} />
      </div>
      <div className="plan-description">
        <h3 className="plan-title">{title}</h3>
        {monthlyOrYearly === "monthly" ? (
          <div className="plan-price">{monthPrice}</div>
        ) : (
          <>
            <div className="plan-price">{yearPrice}</div>
            <div className="plan-description">{description || ""}</div>
          </>
        )}
      </div>
    </li>
  );
};

export default PlansItem;
