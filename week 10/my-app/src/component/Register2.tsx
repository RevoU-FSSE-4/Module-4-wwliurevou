import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { registrationSchema } from "../schemas/RegistrationSchemas";

const onSubmit = async (values, actions) => {
  const Navigate = useNavigate()
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function onSubmit(e: any) {
    e.preventDefault()


    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(
        {
          "name": name,
          "email": email,
          "password": password
        }
      )
    };
    try {
      const response = await fetch("https://library-crud-sample.vercel.app/api/user/register", options);
      // setIsError(false);
      // setIsLoading(true);

      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const data = await response.json();
      // Update component state with fetched data
      console.log(data);


      setTimeout(() => {
        alert("Register is successful");
        Navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
}


const Register2 = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1>Registration Information</h1>
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="name">name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter your Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name ? "input-error" : ""}
      />
      {errors.name && touched.name && <p className="error">{errors.name}</p>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
     
      <button disabled={isSubmitting} type="submit">
        Create Account
      </button>
    </form>
  );
};
export default Register2;