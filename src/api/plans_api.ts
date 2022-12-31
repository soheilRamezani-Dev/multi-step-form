export type PlansType = {
  id:number;
  name: string;
  monthly_price: number;
  yearly_price: number;
  icon: string;
  description: string;
};

const plans: PlansType[] = [
  {
    id:0,
    name: "Arcade",
    monthly_price: 9,
    yearly_price: 90,
    icon: "/assets/images/icon-arcade.svg",
    description: "2 mounth free",
  },
  {
    id:1,
    name: "Advanced",
    monthly_price: 12,
    yearly_price:120,
    icon: "/assets/images/icon-advanced.svg",
    description: "2 mounth free",
  },
  {
    id:2,
    name: "Pro",
    monthly_price:15,
    yearly_price: 150,
    icon: "/assets/images/icon-pro.svg",
    description: "2 mounth free",
  },
];

export default plans;
