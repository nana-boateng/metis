export default function AuthHeading({ change, selected }) {
  return (
    <div className="flex flex-row justify-evenly p-3">
      <button onClick={() => change("register")}>Register</button>
      <button onClick={() => change("login")}>Login</button>
    </div>
  );
}
