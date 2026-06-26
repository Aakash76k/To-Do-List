import { useState } from "react";

function List() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setTodos(
      todos.filter((_, index) => index !== indexToDelete)
    );
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = () => {
    if (editText.trim() === "") return;

    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editText;

    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-800 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Todo List
        </h1>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            className="border p-2 flex-1 rounded"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Add
          </button>
        </div>

        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-200 p-3 rounded mb-2 flex flex-col sm:flex-row justify-between items-center gap-2"
            >
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEdit();
                      }
                    }}
                    className="border p-2 rounded w-full"
                  />

                  <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-3 py-2 rounded w-full sm:w-auto"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="break-words w-full">
                    {todo}
                  </span>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => startEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-2 rounded flex-1 sm:flex-none"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTask(index)}
                      className="bg-red-500 text-white px-3 py-2 rounded flex-1 sm:flex-none"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;