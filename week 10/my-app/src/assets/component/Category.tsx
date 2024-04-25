import { useEffect, useState } from "react";
import { Category } from "../../Types/Types";
import AddCategoryComponent from "./AddCategory";

export default function CategoryComp() {
  // const [response, setResponse] = useState<string>("");
  // const [Component, setResponse] = useState<string>("");

  const [catResponse, setCatResponse] = useState<Category[]>([]);
  const [showAddComponent, setShowAddComponent] = useState<boolean>();

  useEffect(() => { }, []);

  async function logout() {
    return (
      <>
      </>
    )
  }
  //getCategory
  //1.Function get Category
  //2. bikin table 

  async function getCategory() {

    const token = localStorage.getItem("token")
    console.log(token);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    try {
      const response = await fetch('https://library-crud-sample.vercel.app/api/category', options);
      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const jsonData = await response.json();
      const data = jsonData as Category[] || [];
      setCatResponse(data);
    }
    catch (error) {
      console.log("this is not working");
    }
  }

  async function createCategory(data: Category) {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + localStorage.getItem("token")
      },

      body: JSON.stringify(
        {
          "category_name": data.category_name,
          "category_description": data.category_description,
          "is_active": true
        }
      )
    };
    try {
      const response = await fetch("https://library-crud-sample.vercel.app/api/category/create", options);
      // setIsError(false);
      // setIsLoading(true);

      if (!response.ok) {
        throw new Error('Error fetching');
      }
      const data = await response.json();
      console.log(data)

      setTimeout(() => {
        setShowAddComponent(false);
        alert("Category has successfully been added");
        getCategory();
        // Navigate("/login");
      }, 1000);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async function updateCategory(data: Category) {

  }

  async function deleteCategory(id: string) {
    const token = localStorage.getItem("token");
    const url = "https://library-crud-sample.vercel.app/api/category/" + id;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + token
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error fetching');
      }
      setTimeout(() => {
        alert("Delete is successful");
        // Navigate("/login");
        getCategory();
      }, 1000);
    }
    catch (error) {
      console.log("this is not working");
    }
  }
  return (
    <>
      <button onClick={getCategory}>Load Category list</button>
      <h1>Category List </h1>
      <table className="min-w-full bg-white border border-gray-50" >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
            <th scope="col">Category Description</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody >
          {catResponse.length === 0 &&
            <tr>
              <td colSpan={5}>No Data</td>
            </tr>
          }
          {catResponse.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category_name}</td>
              <td>{item.category_description}</td>
              <td>{String(item.is_active)}</td>
              <td>
                <button className="btn btn-primary" onClick={() => updateCategory}>Edit</button >
                <button className="btn btn-danger" onClick={() => deleteCategory(item.id)}>Delete</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
      <>
        <button onClick={() => setShowAddComponent(!showAddComponent)} >Add Category</button>
      </>
      {showAddComponent && (
        <>
          <AddCategoryComponent onSubmit={createCategory} />
        </>
      )}
    </>
  )
}