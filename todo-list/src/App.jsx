import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import TodoList from "./components/TodoList";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "첫 번째 타이틀",
      contents: "첫 번째 컨텐츠",
      isDone: false,
    },
    {
      id: uuid(),
      title: "두 번째 타이틀",
      contents: "두 번째 컨텐츠",
      isDone: true,
    },
    {
      id: uuid(),
      title: "세 번째 타이틀",
      contents: "세 번째 컨텐츠",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
        }}
      >
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          value={contents}
          placeholder="내용"
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button>등록</button>
      </form>
      <div>
        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      </div>
    </div>
  );
}

export default App;
