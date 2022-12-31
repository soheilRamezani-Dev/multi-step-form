export default interface StateType {
  yourinfo: {
    name: string;
    email: string;
    phone: string;
  };
  plan: {
    selectedPlan: number;
    period: string;
  };
  add_ons: number[];
  totalPrice: string;
}
