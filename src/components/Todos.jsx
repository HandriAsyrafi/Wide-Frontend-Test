import { useState, useEffect } from "react";

export function Todos() {
  const [todos, setTodos] = useState([]);

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();

      setTodos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="border-gray-300 border-2 p-5 rounded-xl shadow-xl w-50">
      <h1 className="flex text-xl font-bold justify-center mb-4">Todo item</h1>
      <div>
        <TodoList todos={todos} key={todos.id} />
      </div>
    </div>
  );
}
function TodoList({ todos }) {
  const [update, setUpdate] = useState(todos);

  // Function that can be used to updating todo status
  function toggleItem(id) {
    setUpdate((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : ""
    );
  }

  return (
    <>
      <div>
        <h1 className="flex justify-center font-semibold mb-4">
          {update.title}
        </h1>
        {update.completed ? (
          <p
            className="flex justify-center font-semibold text-green-500 cursor-pointer border-2 border-green-500 w-30 mx-auto rounded-xl hover:bg-green-500 hover:text-white"
            onClick={() => toggleItem(todos.id)}
          >
            Completed
          </p>
        ) : (
          <p
            className="flex justify-center font-semibold text-yellow-500 cursor-pointer border-2 border-yellow-500 w-30 mx-auto rounded-xl hover:bg-yellow-500 hover:text-white"
            onClick={() => toggleItem(todos.id)}
          >
            On progress
          </p>
        )}
      </div>
    </>
  );
}
