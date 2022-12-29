import FormHeader from "../FormHeader";
import NextPrevButtons from "../NextPrevButtons";
import FormItem from "./FormItem";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StateType from "../../redux/stateType";
import { changePersonalInfo } from "../../redux/actions";
const YourInfo = () => {
  const navigate = useNavigate();
  const selector = useSelector((state: StateType) => state.yourinfo);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: selector.name,
      email: selector.email,
      phone: selector.phone,
    },
    validationSchema: yup.object({
      name: yup.string().required("name is required").min(2),
      email: yup.string().email().required("email is required"),
      phone: yup
        .string()
        .required("number is required")
        .min(13, "number must be 13 charachter")
        .max(13, "number must be 13 charachter"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/plans");
      dispatch(
        changePersonalInfo({
          name: values.name,
          email: values.email,
          phone: values.phone,
        })
      );
    },
  });

  return (
    <>
      <FormHeader
        title="personal info"
        description="please provide your name, email address and phone number"
      />
      <div className="form-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-main-part">
            <FormItem
              title="Name"
              name="name"
              placeHolder="e.g. Stephen King"
              value={formik.values.name}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
            <FormItem
              title="Email Address"
              name="email"
              placeHolder="e.g. stephenking@lorem.com"
              value={formik.values.email}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <FormItem
              title="Phone Number"
              name="phone"
              placeHolder="w.g. +1 234 567 890"
              value={formik.values.phone}
              change={formik.handleChange}
              blur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error"> {formik.errors.phone}</div>
            ) : null}
          </div>
          <NextPrevButtons next="Next Step" next_url="" />
        </form>
      </div>
    </>
  );
};

export default YourInfo;
