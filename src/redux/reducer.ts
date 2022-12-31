import StateType from "./stateType";
import actionType from "./actionTypes";

const initialstate: StateType = {
  yourinfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    selectedPlan: 0,
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
      return {
        ...state,
        plan: { ...state.plan, period: action.payload.period },
      };
    case actionType.UPDATE_PLAN:
      return {
        ...state,
        plan: { ...state.plan, selectedPlan: Number(action.payload.selectedPlan) },
      };
    case actionType.UPDATE_ADDONS:
      let newAddOnsState: number[] = [];
      const selectedAddOns = Number(action.payload.selectedAddOns);
      if (state.add_ons.includes(selectedAddOns)) {
        newAddOnsState = state.add_ons.filter(
          (val: number) => val !== selectedAddOns
        );
      } else {
        newAddOnsState = state.add_ons.concat(selectedAddOns);
      }
      return {
        ...state,
        add_ons: newAddOnsState,
      };
      case actionType.RESET: return initialstate;

    default:
      return state;
  }
};

export default reducer;
