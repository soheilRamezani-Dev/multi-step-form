import {useState} from 'react';

type AddOnsItemInputs = {
  title: string;
  description: string;
  price: string;
  active: boolean;
};

const AddOnsItem = ({
  title,
  description,
  price,
  active,
}: AddOnsItemInputs) => {
    const [addOnsActive,setaddOnsActive] = useState(active);

  return (
    <div onClick={()=> setaddOnsActive(prev=>!prev)} className={`add-ons-item ${addOnsActive?'active':''}`}>
      <input readOnly name="online-sevice" type="checkbox" checked={addOnsActive} />
      <label htmlFor="online-sevice">
        <h4>{title}</h4>
        <span className="add-ons-description">{description}</span>
      </label>
      <span className="add-ons-price">{price}</span>
    </div>
  );
};

export default AddOnsItem;
