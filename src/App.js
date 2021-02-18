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
    console.log(e.target);
    setTodos([...todos, { id: myCounter, todo: todo, isCompleted: false }]);
    setTodo("");
    setMyCOunter(myCounter + 1);
  };

  const completeItem = (id) => {
    const completedTodo = todos.filter((item) => {
      return item.id === id;
    });
    completedTodo.isCompleted = true;
    console.log(completedTodo);

    todos.filter((todo) => {
      if (todo.isCompleted) {
        className += " is-completed";
      }
      return className;
    });
  };

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
    <div className="App">
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
          <button type="submit" onClick={handleSubmit}>
            add todo
          </button>
        </form>
        <ul className="my-list">
          {todos.map((item) => {
            const { id, todo } = item;
            return (
              <li key={id} className={className}>
                {todo}
                <button onClick={() => completeItem(id)}>
                  <AiFillCheckCircle />
                </button>
                <button onClick={() => removeItem(id)}>
                  <AiFillCloseCircle />
                </button>
              </li>
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
