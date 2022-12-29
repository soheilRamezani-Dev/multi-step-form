import StateType from "./stateType";
import actionType from "./actionTypes";
import plans from "../api/plans_api";

const defaultplan = plans[0];
const initialstate: StateType = {
  yourinfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    selectedPlan: '0',
    period: "monthly",
  },
  add_ons: [],
  totalPrice: "",
};

const reducer = (
  state: StateType = initialstate,
  action: { type: string; payload: { [index: string]: string } }
): StateType => {
  switch (action.type) {
    case actionType.UPDATE_YOUR_INFO:
      return {
        ...state,
        yourinfo: {
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
        },
      };
    case actionType.UPDATE_PERIOD:
      return { ...state , plan:{...state.plan,period:action.payload.period} };
      case actionType.UPDATE_PLAN:
        return { ...state , plan:{...state.plan,selectedPlan:action.payload.selectedPlan} };
    default:
      return state;
  }
};

export default reducer;
