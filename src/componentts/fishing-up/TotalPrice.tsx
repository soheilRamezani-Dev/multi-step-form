const TotalPrice = ({price,timeline}:{price:string,timeline:string}) => {
    return ( <div className="total">
    <div className="total-title">Total (per {timeline})</div>
    <div className="total-price">{price}</div>
  </div> );
}
 
export default TotalPrice;