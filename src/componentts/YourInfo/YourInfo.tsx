import FormItem from "./FormItem";

const YourInfo = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1>personal info</h1>
        <p>please provide your name, email address and phone number</p>
      </div>
      <div className="form-body">
        <form>
          <div className="form-main-part">
            <FormItem
              name="Name"
              title="name"
              placeHolder="e.g. Stephen King"
            />
            <FormItem
              name="Email Address"
              title="email"
              placeHolder="e.g. stephenking@lorem.com"
            />
            <FormItem
              name="Phone Number"
              title="name"
              placeHolder="w.g. +1 234 567 890"
            />
          </div>
          <div className="form-buttons">
            <span className="back-button">Go Back</span>
            <button className="next-button">Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourInfo;
