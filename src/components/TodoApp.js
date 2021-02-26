import "../styles.css";
import React, { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      if (!todoList.some((item) => item === task))
        setTodoList([...todoList, task]);
    }
    setTask([]);
    console.log(task);
  };

  return (
    <>
      <form>
        <input
          placeholder="Enter your to do"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />{" "}
        <button onClick={(event) => addTask(event)}>Do it</button>
      </form>
      <h1> Your Do List </h1>
      <div style={{ marginTop: "-20px", fontSize: "0.7rem" }}>
        (click on task when you're done)
      </div>

      <ol>
        {todoList.map((item) => (
          <li key={item}>
            <label>
              <ShowList name={item} />
            </label>
          </li>
        ))}
      </ol>
    </>
  );
}

function ShowList({ name }) {
  const [complete, setComplete] = useState(false);

  return (
    <>
      <p
        style={{
          textDecoration: complete ? "line-through" : "",
          cursor: "pointer"
        }}
        onClick={() => setComplete(() => !complete)}
      >
        {name}
      </p>
    </>
  );
}

export function TodoApp() {
  return (
    <div className="App">
      <h1> Do It </h1>
      <Todo />
    </div>
  );
}
