const Comments = ({item, clickRemoveFunc}) => {
    return (
      <div className='todo-container'>
      <div>
        <h3>{item.heading}</h3>
        <p>{item.todo}</p>
      </div>
      <div className='btn-container'>
          <button onClick={()=>clickRemoveFunc(item.id)}>삭제하기</button>
          <button>완료</button>
      </div>
    </div>
    ) 
};

export default Comments;