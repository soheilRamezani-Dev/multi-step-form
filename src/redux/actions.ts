import actionName from "./actionTypes";

export const changePersonalInfo = (yourInfo: {
  name: string;
  email: string;
  phone: string;
}) => {
  return {
    type: actionName.UPDATE_YOUR_INFO,
    payload: yourInfo,
  };
};

export const changePeriod = ( period: string ) => {
  return {
    type: actionName.UPDATE_PERIOD,
    payload: {period:period},
  };
};
export const changePlan = ( planIndex: string ) => {
  return {
    type: actionName.UPDATE_PLAN,
    payload: {selectedPlan:planIndex},
  };
};
