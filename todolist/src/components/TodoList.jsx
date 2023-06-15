const TodoList = ({comment, isActive, clickRemoveFunc, clickSwitchFunc}) => {
    return (
        <>
        {comment
        .filter(item => item.isDone !== isActive)
        .map(item => {
            return (
                <div key={item.id} className='todo-container'>
                    <div>
                        <h3>{item.heading}</h3>
                        <p>{item.todo}</p>
                        </div>
                        <div className='btn-container'>
                        <button onClick={()=>clickRemoveFunc(item.id)}>삭제하기</button>
                        <button onClick={()=>clickSwitchFunc(item.id)}>{isActive ? "취소" : "완료"}</button>
                    </div>
                </div>
            )
        })
        }
      </>
    )
};

export default TodoList;