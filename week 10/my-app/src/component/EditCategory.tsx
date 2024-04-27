import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCategory() {
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryDesc, setCategoryDesc] = useState<string>("");
  const idParams = useParams();
  const Navigate = useNavigate();

useEffect(() => {
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")

      },
    };
    try {
      const response = await fetch(`https://library-crud-sample.vercel.app/api/category/${idParams.id}`, options);

      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const data = await response.json();
      console.log(data)
      setCategoryDesc(data.category_description);
      setCategoryName(data.category_name);
      setTimeout(() => {
        console.log("Category fetched");
      }, 1000);
    } catch (error) {
      console.log('Error:', error);
    }
    console.log(categoryName, categoryDesc);
  };
fetchData();
},[]);


  async function onSubmitCategory(e: any) {
    e.preventDefault()
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      },

      body: JSON.stringify(
        {
          "id": idParams.id,
          "category_name": categoryName,
          "category_description": categoryDesc,
          "is_active": true
        }
      )
    };
    try {
      const response = await fetch("https://library-crud-sample.vercel.app/api/category/update", options);

      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const data = await response.json();
      console.log(data)


      setTimeout(() => {
        alert("Category has successfully been Updated");
        Navigate("/category");
      }, 1000);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  return (
    <>
      <div className="flex justify-center px-10 py-12">
        <form onSubmit={onSubmitCategory}>
          <label>Category Id</label>
          <input type="text" value={idParams.id} readOnly />
          <label>Category Name</label>
          <input type="text" onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
          <label>Category Description</label>
          <input type="text" onChange={(e) => setCategoryDesc(e.target.value)} value={categoryDesc} />

          <button type="submit">Save Category</button>
        </form>
      </div>
    </>
  )
}