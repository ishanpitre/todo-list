"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    settitle("");
    setdesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let taskHandle = "No task available";
  if (mainTask.length > 0) {
    taskHandle = mainTask.map((elem, i) => {
      return (
        <li key={i} className="mb-5 flex items-center justify-between">
          <div className="flex justify-between items-center w-2/3">
            <h5 className="text-2xl font-semibold">title: {elem.title}</h5>
            <h6 className="text-xl font-semibold">description: {elem.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white rounded px-5 py-3"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-center text-5xl font-bold p-5">
        Ishan's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a title"
          className="text-2xl my-5 mx-5 border-2 border-gray-800 py-3 px-5 rounded"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter a Description"
          className="text-2xl my-5 mx-5 border-2 border-gray-800 py-3 px-5 rounded"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="text-2xl rounded border-2 border-gray-900 px-4 py-2 m-5 bg-black text-white">
          Add task
        </button>
      </form>
      <div className="bg-gray-200 p-6 mt-6">
        <ul>{taskHandle}</ul>
      </div>
    </>
  );
};

export default page;
