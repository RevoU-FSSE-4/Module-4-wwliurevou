
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


export default function getName() {
  const Navigate = useNavigate()
  async function loadName(e: any) {
    e.preventDefault()
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authentication': 'Bearer ' + localStorage.getItem("token")
      },
    };
    try {
      const response = await fetch("https://library-crud-sample.vercel.app/api/user/profile", options);
      // setIsError(false);
      // setIsLoading(true);

      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const data = await response.json();
      // Update component state with fetched data
      console.log(data.name);
      const name = String(data.name);
      localStorage.setItem("name", name);
    } catch (error) {
      alert("Incorrect Email or Password");
    }
  }


  return (

    loadName
  )
}
