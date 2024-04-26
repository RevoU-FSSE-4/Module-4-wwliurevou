import { useEffect, useState } from "react";
import FetchData from "../Utils/Fetch";
import { useNavigate, useParams } from "react-router-dom";


const EditCategory = () => {
  const idParams = useParams();

  const navigate = useNavigate();

  const [catName, setCatName] = useState<string>("");
  const [catDesc, setCatDesc] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response: AddTodo = await FetchData(
        `https://dummyjson.com/todos/${idParams.id}`
      );
      setTodo(response.todo);
      setUserId(response.userId);
    };
    fetchData();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("trigger submit");
    const newTodo: AddTodo = {
      todo: todo,
      completed: true,
      userId: userId,
    };

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    };

    const response = await FetchData(
      `https://library-crud-sample.vercel.app/api/category/update/${idParams.id}`,
      options
    );
    if (response) {
      alert("success edit todo!");
      navigate("/menu");
    }
  };

  return (
    <>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo"
          onChange={(e: any) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        <input
          type="text"
          placeholder="user id"
          onChange={(e: any) => {
            setUserId(e.target.value);
          }}
          value={userId}
        />

        <button>Save</button>
      </form>
    </>
  );
};

export default Edit;