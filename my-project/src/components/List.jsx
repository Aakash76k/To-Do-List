// to-do list using usestate 

import React, {useState} from 'react'


const List = () => {

  const [input,setInput] = useState("");
  const [list, setList] = useState([]);

  const userHandler = () => {
    if (input.trim() === "") return alert("Please enter your value");
    setList([...list,input]);
    setInput("");
  };

  const enterValue = (e) => {
    if (e.key === "Enter"){
      userHandler();
    }
  };

  return (
    <>
      <input
      type="text"
      name=""
      id=""
      className="border mx-5 mt-5"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={enterValue}
      />
      <button onClick={userHandler}>Add</button>
      <div className="m-10">
        {list.map((item)=> (
          <div key={item}>
            {item}
            <button onClick={() => setList(list.filter((x) => x !== item))}>
              ❌
            </button>
            </div>
        ))}
      </div>
            
    </>
  );
};

export default List;