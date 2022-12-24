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
          <FormItem name="Name" title="name" placeHolder= 'w.g. Stephen King' />
          <FormItem name="Email Address" title="email" placeHolder= 'w.g. Stephen King' />
          <FormItem name="Phone Number" title="name" placeHolder= 'w.g. Stephen King' />
        </form>
      </div>
    </div>
  );
};

export default YourInfo;
