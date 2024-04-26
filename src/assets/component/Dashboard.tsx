// import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Category, Category } from "../../Types/Types";

// export default function Category() {
//   const [response, setResponse] = useState<string>("");
//   const navigate = useNavigate()
//   const [catResponse, setCatResponse] = useState<Category[]>([]);

//   useEffect(() => { }, []);

//   async function logout(e: any) {
//     return (
//       <>
//       </>
//     )
//   }
//   getCategory
//   1.Function get Category
//   2. bikin table 

//   async function getCategory(e: any) {
//     e.preventDefault()

//     const token = localStorage.getItem('token')
//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//     };
//     try {
//       const response = await fetch('https://library-crud-sample.vercel.app/api/category', options);
//       if (!response.ok) {
//         throw new Error('Error fetching');
//       }
//       const jsonData = await response.json();

//       const data = jsonData as Category[] || [];
//       setCatResponse(data)
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
//   async function createCategory(data: Category) {

//   }

//   async function updateCategory(data: Category) {

//   }

//   async function deleteCategory(data: Category) {

//   }
//   return (
//     <table className="" >
//       <thead>
//         <tr>
//           <th scope="col">Id</th>
//           <th scope="col">Category Name</th>
//           <th scope="col">Category Description</th>
//           <th scope="col">Status</th>
//           <th scope="col">Actions</th>
//           <th scope="col">Action</th>
//         </tr>
//       </thead>
//       <tbody className="">
//         {catResponse.length = 0 &&
//           <tr>
//             <td colSpan={5}>No Data</td>
//           </tr>
//         }
//         {catResponse.map(item => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.category_name}</td>
//             <td>{item.category_description}</td>
//             <td>{String(item.is_active)}</td>
//             <td>
//               <button className="btn btn-primary" onClick={updateCategory}>Edit</button >
//               <button className="btn btn-danger" onClick={deleteCategory}>Delete</button>
//             </td>
//           </tr>

//         ))}
//       </tbody>
//     </table>
//   )
// }