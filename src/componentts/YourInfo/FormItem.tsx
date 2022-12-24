const FormItem = ({name,title,placeHolder}:{name:string;title:string;placeHolder:string}) => {
  return (
    <div className="form-item">
      <label className="input-label" htmlFor={name}>
        {title}:
      </label>
      <input
        className="text-input"
        name={name}
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormItem;
