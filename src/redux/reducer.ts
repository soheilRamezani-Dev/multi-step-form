import StateType from "./stateType";
import actionType from "./actionTypes";

const initialstate: StateType = {
  yourinfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    name: "",
    period: "",
    monthlyprice: "",
    yearlyprice: "",
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
    default:
      return state;
  }
};

export default reducer;
