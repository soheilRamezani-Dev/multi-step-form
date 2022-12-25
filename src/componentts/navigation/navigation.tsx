import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <NavigationItem id={1} title={'YOUR INFO'} active />
        <NavigationItem id={2} title={'YOUR INFO'}/>
        <NavigationItem id={3} title={'YOUR INFO'}/>
        <NavigationItem id={4} title={'YOUR INFO'}/>
      </ul>
    </div>
  );
};

export default Navigation;
