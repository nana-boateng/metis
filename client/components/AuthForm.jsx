import { useState } from "react";

import Card from "./Card";
import AuthHeading from "./AuthHeading";
import Login from "./Login";
import Register from "./Register";

export default function AuthForm() {
  const [form, setForm] = useState("login");

  function changeForm(form) {
    setForm(form);
  }

  return (
    <Card colour="yellow" style="flex flex-col justify-between">
      <AuthHeading change={changeForm} />
      {form === "login" && <Login />}
      {form === "register" && <Register />}
    </Card>
  );
}
