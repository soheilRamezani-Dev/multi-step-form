type Add_ons = {
  id: number;
  title: string;
  description: string;
  monthlyPrice: number;
  yearlylyPrice: number;
};
const add_ons: Add_ons[] = [
  {
    id: 0,
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice:1,
    yearlylyPrice:10,
  },
  {
    id: 1,
    title: "Larger Storage",
    description: "Extera 1TB of cloud save",
    monthlyPrice: 2,
    yearlylyPrice: 20,
  },
  {
    id: 2,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlylyPrice: 20,
  },
];

export default add_ons;
