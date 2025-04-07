import React, { useReducer } from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.payload, completed: false }];
    case "REMOVE":
      return state.filter((_, index) => index !== action.payload);
    case "TOGGLE":
      return state.map((task, index) =>
        index === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [newTask, setNewTask] = React.useState("");

  const addTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD", payload: newTask });
      setNewTask("");
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
            <button onClick={() => dispatch({ type: "TOGGLE", payload: index })}>✔</button>
            <button onClick={() => dispatch({ type: "REMOVE", payload: index })}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
