import React from "react";
// import AssignmentInput from "../components/AssignmentInput";

export default function home() {
  return (
    <div
      className="h-screen bg-yellow flex flex-col"
      //   onClick={() => console.log("Hello human race")}
    >
      <div className="flex flex-row justify-end text-2xl font-semibold mr-3">
        Welcome, user
      </div>
      {/* <div className="w-3/2">
        <AssignmentInput />
      </div> */}
      <div className="flex flex-col mx-auto">
        <button className="bg-green my-3 h-max p-3 rounded-md duration-300 hover: focus: ">
          Add Courses
        </button>
        <button className="bg-black my-3 h-max p-3 rounded-md duration-300 hover: focus: text-white">
          Calculate Average
        </button>
      </div>
    </div>
  );
}
