import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    console.log("Name: ", name, "Email: ", email, "Password: ", password);
  }
  return (
    <div className="flex flex-col p-3 justify-between">
      <input
        id="name"
        className="w-full p-2 rounded-sm my-3 mx-auto"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        id="registerEmail"
        className="w-full p-2 rounded-sm my-3 mx-auto"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        className="w-full p-2 rounded-sm my-3 mx-auto"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        type="submit"
        className="bg-green rounded-sm p-2 mr-4 ml-4 "
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
}
