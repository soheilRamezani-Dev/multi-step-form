import FormHeader from "../FormHeader";
import NextPrevButtons from "../NextPrevButtons";
import AddOnsItem from "./AddOnsItem";

const AddOns = () => {
  interface AddOnsItem {
    title: string;
    descrption: string;
    price: string;
    active: boolean;
  }
  const addOns_api: AddOnsItem[] = [
    {
      title: "Online service",
      descrption: "Access to multiplayer games",
      price: "+$1/mo",
      active: true,
    },
    {
      title: "Larger Storage",
      descrption: "Extera 1TB of cloud save",
      price: "+$2/mo",
      active: true,
    },
    {
      title: "Customizable profile",
      descrption: "Custom theme on your profile",
      price: "+$2/mo",
      active: false,
    },
  ];
  return (
    <div className="add-ons">
      <FormHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="form-body">
        <form>
          <div className="form-main-part">
            {addOns_api.map((value, index) => (
              <AddOnsItem
                key={index}
                title={value.title}
                description={value.descrption}
                price={value.price}
                active={value.active}
              />
            ))}
          </div>
        </form>
        <NextPrevButtons back="Go Back" next="Next Step" />
      </div>
    </div>
  );
};

export default AddOns;
