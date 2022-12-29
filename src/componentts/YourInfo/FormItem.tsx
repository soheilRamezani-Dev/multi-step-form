import React from "react";

const FormItem = ({
  name,
  title,
  placeHolder,
  value,
  change,
  blur
}: {
  name: string;
  title: string;
  placeHolder: string;
  value: string;
  change: (a:React.ChangeEvent<HTMLInputElement>)=>void;
  blur: (a:React.ChangeEvent<HTMLInputElement>) =>void;
}) => {
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
        value={value}
        onChange={change}
        onBlur={blur}
      />
    </div>
  );
};

export default FormItem;
