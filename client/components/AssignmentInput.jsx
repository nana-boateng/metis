export default function AssignmentInput({ index = 0 }) {
  return (
    <div className="flex flex-row justify-between w-max mx-auto my-20">
      <input id="score" className="mx-3 w-16" />
      <input id="outOf" className="mx-3 w-16" />
      <input id="grade" className="mx-3 w-16" />
      <input id="weight" className="mx-3 w-16" />
    </div>
  );
}
