import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const [comment, setComment] = useState([
    {id: 1, heading: "리액트 공부하기", todo: "리액트 기초를 공부해봅시다.", isDone: true},
    {id: 2, heading: "운동하기", todo: "조깅하기", isDone: false},
  ]);

  const [heading, setHeading] = useState("");
  const [todo, setTodo] = useState("");

  // 제목 추가 기능
  const headingChangeFunc = (event) => {
    setHeading(event.target.value);
  };

  // 내용 추가 기능
  const todoChangeFunc = (event) => {
    setTodo(event.target.value);
  };

  // 등록하기 기능
  const clickAddFunc = (event) => {
    event.preventDefault();
    const newComment = {
      id: comment.length + 1,
      heading,
      todo,
      isDone: true,
    };
    setComment([...comment, newComment]);
    setHeading("");
    setTodo("");
  };

  // 삭제 기능
  const clickRemoveFunc = (id) => {
    const newComments = comment.filter(comments => comments.id !== id);
    setComment(newComments);
  };

  const clickSwitchFunc = (id) => {
    const switchComments = comment.map((comments) => {
      if (comments.id === id) {
        return {...comments, isDone: !comments.isDone}
      } else {
        return {...comment}
      }
    });
    setComment(switchComments);
    console.log(switchComments.isDone);
  };

  return (
    <div className='layout'>
      <header><h1>My Todo List</h1></header>
      <form className='add-form' onSubmit={clickAddFunc}>
        <div className='input-group'>
          <label />제목
          <input value={heading} onChange={headingChangeFunc} />
          <label />내용
          <input value={todo} onChange={todoChangeFunc} className='input-content' />
        </div>
        <button type='submit'>등록하기</button>
      </form>
      <div className='list-container'>
        <h2>Working</h2>
        <div className='list-wrpper'>
          <TodoList comment={comment} clickRemoveFunc={clickRemoveFunc} clickSwitchFunc={clickSwitchFunc} isActive={false} />
        </div>
        <h2>Done</h2>
        <div className='list-wrpper'>
          <TodoList comment={comment} clickRemoveFunc={clickRemoveFunc} clickSwitchFunc={clickSwitchFunc} isActive={true} />
        </div>
      </div>
    </div>
  );
};

export default App;
