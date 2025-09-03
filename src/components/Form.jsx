import { useState } from "react";

export function Form({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error stored inside state
  const [error, setError] = useState("");

  // Registration success notification state
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");

    // Input validation
    if (!name) {
      setError("Name should not be empty.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setError("Email should be a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password should be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Confirm Password should match the Password field.");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };

    onRegister(newUser);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("Registration success!");
  }

  return (
    <div className="border-gray-300 border-2 p-5 rounded-xl shadow-xl w-120">
      <h1 className="flex justify-center text-xl font-bold mb-4">Form</h1>
      {error && <Error errorMessage={error} />}
      {success && <Success successMessage={success} />}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="font-semibold">
            Nama
          </label>
          <input
            type="text"
            name="firstName"
            value={name}
            placeholder="Jane Doe"
            className="border-gray-200 border-2 rounded-md px-2 py-1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="example@mail.com"
            className="border-gray-200 border-2 rounded-md px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password must be at least 8 characters"
            className="border-gray-200 border-2 rounded-md px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="font-semibold">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm your password"
            className="border-gray-200 border-2 rounded-md px-2 py-1"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="justify-center mx-auto w-full bg-blue-300 my-2 py-2 rounded-xl hover:bg-blue-400 cursor-pointer "
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}

function Error({ errorMessage }) {
  return <div className="text-red-600 my-4 font-semibold">{errorMessage}</div>;
}

function Success({ successMessage }) {
  return (
    <div className="text-blue-600 my-4 font-semibold">{successMessage}</div>
  );
}
