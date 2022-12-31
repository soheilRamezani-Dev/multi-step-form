import { useDispatch } from "react-redux";
import { changeAddOns } from "../../redux/actions";


type AddOnsItemInputs = {
  id:number;
  title: string;
  description: string;
  price: number;
  period: string;
  active: boolean;
};

const AddOnsItem = ({
  id,
  title,
  description,
  price,
  period,
  active,
}: AddOnsItemInputs) => {
  const dispatch = useDispatch();
  const checkHandler = (): void => {
    dispatch(changeAddOns(id));
  };

  return (
    <div
      onClick={checkHandler}
      className={`add-ons-item ${active ? "active" : ""}`}
    >
      <input
        readOnly
        name="online-sevice"
        type="checkbox"
        checked={active}
      />
      <label htmlFor="online-sevice">
        <h4>{title}</h4>
        <span className="add-ons-description">{description}</span>
      </label>
      <span className="add-ons-price">{period==="monthly"? `$${price}/mo`:`$${price}/yr`}</span>
    </div>
  );
};

export default AddOnsItem;
