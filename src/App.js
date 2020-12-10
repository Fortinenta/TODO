import { useState } from "react";
import "./App.css";

function ToDo(props) {
  const [created, setCreated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [text, setText] = useState("");

  return (
    <div id={`todo-${props.current}`} className="todo">
      <input
        type="checkbox"
        className="created-checkbox"
        id={`created-checkbox-${props.current}`}
        defaultChecked={created || props.current === 0}
      />
      <input
        type="checkbox"
        className="deleted-checkbox"
        id={`deleted-checkbox-${props.current}`}
        defaultChecked={deleted}
      />
      <input
        type="checkbox"
        className="done-checkbox"
        id={`done-checkbox-${props.current}`}
        defaultChecked={props.current === 0}
      />
      <label
        htmlFor={`done-checkbox-${props.current}`}
        className="mark-done-checkbox-label"
      ></label>
      <label
        htmlFor={`done-checkbox-${props.current}`}
        className="mark-undone-checkbox-label"
      ></label>
      <input
        required
        type="text"
        defaultValue={text}
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
        className="todo-input"
        placeholder="What needs to be done?"
      />
      <label
        htmlFor={`created-checkbox-${props.current}`}
        className="created-checkbox-label"
        onClick={() => {
          setCreated(true);
        }}
      >
        Add
      </label>
      <label
        htmlFor={`deleted-checkbox-${props.current}`}
        className="deleted-checkbox-label"
        onClick={() => {
          setDeleted(true);
        }}
      >
        ×
      </label>
      <div className="items-left-counter-helper"></div>
      {created || props.current === 0 ? (
        <ToDo current={props.current + 1} />
      ) : (
        ""
      )}
    </div>
  );
}

function App() {
  return (
    <div id="/completed" className="completed-filter">
      <div id="/active" className="active-filter">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
          </header>

          <ToDo current={0} />

          <footer className="footer" style={{ display: "block" }}>
            <span className="todo-count">
              <strong id="items-left"></strong> items left
            </span>
            <ul className="filters">
              <li>
                <a className="filter-all" href="#/">
                  All
                </a>
              </li>
              <li>
                <a className="filter-active" href="#/active">
                  Active
                </a>
              </li>
              <li>
                <a className="filter-completed" href="#/completed">
                  Completed
                </a>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
