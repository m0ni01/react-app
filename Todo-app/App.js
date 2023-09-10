import { useState } from "react";
import "./App.css";

function Form1() {
  const [item, setitem] = useState("");
  const [todo, settodo] = useState([]);

  function submithandler(e) {
    e.preventDefault();
    if (item.trim() !== "") {
      settodo((currentvalue) => {
        return [
          ...currentvalue,
          { id: crypto.randomUUID(), title: item, completed: false },
        ];
      });

      setitem("");
    }
  }

  function toggletodo(id, ischecked) {
    const updatedtodo = todo.map((element) => {
      return id === element.id ? { ...element, completed: ischecked } : element;
    });

    settodo(updatedtodo);
  }

  function deletetodo(id) {
    settodo((currenttodo) => {
      return currenttodo.filter((item) => item.id !== id);
    });
  }

  return (
    <div class="maindiv">
      <form onSubmit={submithandler}>
        <input
          type="text"
          value={item}
          onChange={(e) => setitem(e.target.value)}
          name="test"
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
      <div>
        <ul className="list">
          {todo.map((element) => (
            <li className="listitems">
              <input
                className="custom-checkbox"
                checked={element.completed}
                type="checkbox"
                onChange={(e) => toggletodo(element.id, e.target.checked)}
              ></input>
              <span
                className={`list_text ${element.completed ? "ischecked" : ""} `}
              >
                {element.title}
              </span>
              <button onClick={() => deletetodo(element.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="topheading">MY TODO :</h1>
      <Form1 />
    </div>
  );
}

export default App;
