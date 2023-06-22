import React from "react";

function TodoList({ todos, setTodos, isDone }) {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <h1>{isDone ? "Done-list" : "Todo-list"}</h1>
      {todos
        .filter((filteredTodo) => {
          return filteredTodo.isDone === isDone;
        })
        .map((todo) => {
          return (
            <div
              style={{
                border: "1px solid #000",
                margin: "10px",
              }}
              key={todo.id}
            >
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.contents}</p>
              <button
                onClick={() => {
                  const removeTodo = todos.filter(
                    (filteredTodo) => filteredTodo.id !== todo.id
                  );
                  setTodos(removeTodo);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
