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
      <div className="flex flex-col items-center gap-4">
        <div>
          <Navbar />
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col gap-4">
            <Counter />
            <Todos />
          </div>
          <Form onRegister={handleRegister} users={users} />
        </div>
      </div>
    </>
  );
}
