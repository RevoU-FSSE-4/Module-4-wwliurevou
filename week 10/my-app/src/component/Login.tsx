
import { useState } from "react";

import { Mid, Style, } from "../Style/Style";
import { useNavigate } from 'react-router-dom';



// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(5, "Too short!")
//     .max(15, "Must be 15 characters or less")
//     .required("Name is Required"),
//   email: Yup.string().email("Invalid email address").required("Email is Required"),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });


export default function Login() {
  const Navigate = useNavigate()
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
          "email": email,
          "password": password
        }
      )
    };
    try {
      const response = await fetch("https://library-crud-sample.vercel.app/api/user/login", options);
      // setIsError(false);
      // setIsLoading(true);

      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const data = await response.json();
      // Update component state with fetched data
      console.log(data.token);
      const token = String(data.token);
      localStorage.setItem("token", token);


      setTimeout(() => {
        alert("Login is successful");
        Navigate("/category");
      }, 1000);
    } catch (error) {
      alert("Incorrect Email or Password");
    }
  }

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   console.log("trigger submit");
  //   fetchData()
  // }


  return (

    <div >

      <form onSubmit={onSubmit}>
        <Style title=" Login"></Style>
        <Mid>

          <label htmlFor="email">Email Address</label>
          <input name="email" onChange={(e) => setEmail(e.target.value)} type="email" />
          {/* <ErrorMessage name="email" component="div"></ErrorMessage> */}

          <label htmlFor="password">Password</label>
          <input name="password" onChange={(e) => setPassword(e.target.value)} type="current-password" />

        </Mid>

        <p className="form__hint">Don't have an account? <a className="form__link" href="/register">Register Here</a></p>


        <button type="submit"> Login </button>

      </form>

    </div >
  )
}
