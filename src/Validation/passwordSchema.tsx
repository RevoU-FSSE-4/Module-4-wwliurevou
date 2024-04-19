
import * as Yup from 'yup';

// const formSchema = Yup.object().shape({
//   password: Yup.string()
//     .required("Password is required")
//     .min(4, "Password length should be at least 4 characters")
//     .max(12, "Password cannot exceed more than 12 characters"),

// });

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};
// 3. build your validation schema
export const schema = Yup.object().shape({
  password: Yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});
