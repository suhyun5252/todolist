import { useEffect, useState } from "react";
import { TODO_MOCK_DATA } from "../../constants/mockdata";
import TodoItem from "../../components/todo/TodoItem";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  useEffect(() => {
    setTodoList(TODO_MOCK_DATA);
    return () => {};
  }, []);
  const deleteTodo = id => {
    const newList = todoList.filter(item => item.id !== id);
    setTodoList(newList);
    alert(`${id} 삭제!!`);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todoList.map(item => {
          return (
            <li key={item.id}>
              <TodoItem item={item} deleteTodo={deleteTodo} />
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            navigate(`/todo /add`);
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}

export default Index;
