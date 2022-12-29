type Plans = {
  name: string;
  monthly_price: string;
  yearly_price: string;
  icon: string;
  description: string;
};

const plans: Plans[] = [
  {
    name: "Arcade",
    monthly_price: "$9/mo",
    yearly_price: "$90/yr",
    icon: "/assets/images/icon-arcade.svg",
    description: "2 mounth free",
  },
  {
    name: "Advanced",
    monthly_price: "$12/mo",
    yearly_price: "$120/yr",
    icon: "/assets/images/icon-advanced.svg",
    description: "2 mounth free",
  },
  {
    name: "Pro",
    monthly_price: "$15/mo",
    yearly_price: "$150/yr",
    icon: "/assets/images/icon-pro.svg",
    description: "2 mounth free",
  },
];

export default plans;
