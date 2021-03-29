import { useState } from "react";

// components
import AuthForm from "./../components/AuthForm";

export default function Home() {
  const [auth, setAuth] = useState(true);

  return (
    <div className="h-screen bg-red flex flex-col justify-evenly">
      <h1 className="mx-auto text-7xl">Metis</h1>
      {auth && <AuthForm />}
    </div>
  );
}
