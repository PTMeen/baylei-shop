import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().required("Email required").email("Invalid email"),
  password: yup
    .string()
    .required("Password required")
    .min(8, "Password should be of minimum 8 characters length"),
});

const registerSchema = yup.object({
  email: yup.string().required("Email required").email("Invalid email"),
  password: yup
    .string()
    .required("Password required")
    .min(8, "Password should be of minimum 8 characters length"),
  name: yup.string().required("Name required"),
  confirmPassword: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export { loginSchema, registerSchema };
