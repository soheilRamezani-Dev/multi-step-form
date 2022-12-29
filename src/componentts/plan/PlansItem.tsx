import { useState } from "react";

type PlansItemInput = {
  title: string;
  icon: string;
  monthPrice: string;
  yearPrice: string;
  period:string
  description?: string;
  active?:boolean
};


const PlansItem= ({
  title,
  icon,
  monthPrice,
  yearPrice,
  period,
  description,
  active=false,
}:PlansItemInput) => {
  
  
  return (
    <li className={`plan-item ${active?'active':''}`}>
      <div className="plan-icon">
        <img src={process.env.PUBLIC_URL + icon} alt={`${title} icon`} />
      </div>
      <div className="plan-description">
        <h3 className="plan-title">{title}</h3>
        {period === "monthly" ? (
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
