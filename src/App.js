import { useState, useRef, useEffect } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const refInput = useRef(null);
  const [myCounter, setMyCOunter] = useState(0);
  let className = "item";

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    refInput.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: myCounter, todo: todo, isCompleted: false }]);
    setTodo("");
    setMyCOunter(myCounter + 1);
  };

  const completeItem = (id) => {};

  const removeItem = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const removeTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <header>
        <h1>my todo list</h1>
      </header>
      <section>
        <form>
          <input
            type="text"
            placeholder="enter todo here"
            value={todo}
            onChange={handleChange}
            ref={refInput}
          />
          <button className="add" type="submit" onClick={handleSubmit}>
            add todo
          </button>
        </form>
        <ul className="my-list">
          {todos.map((item) => {
            const { id, todo } = item;
            return (
              <div key={id} className="list-item">
                <li
                  className={className}
                  style={{ color: todo.isCompleted ? "green" : "black" }}>
                  {todo}
                </li>
                <span>
                  <button className="complete" onClick={() => completeItem(id)}>
                    <AiFillCheckCircle />
                  </button>
                  <button className="remove" onClick={() => removeItem(id)}>
                    <AiFillCloseCircle />
                  </button>
                </span>
              </div>
            );
          })}
        </ul>
      </section>
      <button className="clear-all" onClick={removeTodos}>
        clear all
      </button>
    </div>
  );
}

export default App;
