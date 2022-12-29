export default interface StateType {
  yourinfo: {
    name: string;
    email: string;
    phone: string;
  };
  plan: {
    name: string;
    period: string;
    monthlyprice: string;
    yearlyprice: string;
  };
  add_ons: never[];
  totalPrice: string;
}
