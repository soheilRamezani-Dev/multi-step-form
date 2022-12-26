const SelectedAddOnsItem = ({
  addons_title,
  addons_price,
}: {
  addons_title: string;
  addons_price: string;
}) => {
  return (
    <div className="selected-addons-item">
      <div className="selected-addons-title">{addons_title}</div>
      <div className="price">{addons_price}</div>
    </div>
  );
};

export default SelectedAddOnsItem;
