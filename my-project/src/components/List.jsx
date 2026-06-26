// to-do list using usestate 

import React, {useState} from 'react'


const List = () => {

  const [input,setInput] = useState("");
  const [list, setList] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editText, aetEditText] = useState("");

  const addTask = () =>{
    if(input.trim() === "") return;
    setList([...list, input]);
    setInput("");
  };

  const deleteTask = (indexToDelete) => {
    setList(
      list.filter((_,index) => index !== indexToDelete)
    );
  };

  const starEdit = (index) => {
    setEditIndex(index);
    setEditText(list[index]);
  };

  const saveEdit = () =>{
    const updatedlist = [...list];
    updatedlist[editIndex] = editText;

    setList(updatedlist);
    setEditIndex(null);
    setEditText("");
  };


  return (
   <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">
          Todo List
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 flex-1 rounded"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="mt-4">
          {list.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-200 p-2 rounded mb-2 flex justify-between items-center"
            >
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border p-1 rounded"
                  />

                  <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{todo}</span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTask(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
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
};

export default List;