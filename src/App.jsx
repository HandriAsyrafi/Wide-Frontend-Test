import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [users, setUsers] = useState([]);

  // Function to add new user after input success
  function handleRegister(newUsers) {
    setUsers((users) => [...users, newUsers]);
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center gap-4 w-full mx-auto sm:flex-row ">
        <div className="flex flex-row gap-4 justify-center sm:flex-col sm:w-auto sm:justify-start">
          <Counter />
          <Todos />
        </div>
        <Form onRegister={handleRegister} users={users} />
      </div>
    </>
  );
}
