const NavigationItem = ({id,title,active=false}:{id:number;title:string, active?:boolean}) => {
    return <li className={`navigation-item ${active?'active':''}`}>
    <div className="item-number">{id}</div>
    <div className="item-description">
      <div className="item-step">step {id}</div>
      <div className="item-title">{title}</div>
    </div>
  </li>
}
 
export default NavigationItem;