import { useState } from "react";
import { Category } from "../Types/Types";

export default function AddCategoryComponent(props: { onSubmit: (value: Category) => void }) {
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryDesc, setCategoryDesc] = useState<string>("");


  async function onSubmitCategory(e: any) {
    e.preventDefault()
    const categoryData: Category = {
      id: "",
      category_name: categoryName,
      category_description: categoryDesc,
      is_active: true,
    }
    props.onSubmit(categoryData);
    
    const newCategory = String(categoryData);console.log("sampe sini",categoryData)
    localStorage.setItem("newCategory", newCategory);
  }

  return (
    <div className="flex justify-center px-10 py-12">
      <form onSubmit={onSubmitCategory}>
        <label>Category Name</label>
        <input type="text" onChange={(e) => setCategoryName(e.target.value)} />
        <label>Category Description</label>
        <input type="text" onChange={(e) => setCategoryDesc(e.target.value)} />
        <button type="submit">Add Category</button>
      </form>
    </div>
  )
}