import { Link } from "react-router-dom";

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <div>
      <Link to={`/todo/detail?id=${item.id}`}>
        <div>
          <p>{item.title}</p>
          <span>{item.content}</span>
        </div>
        <div>
          <p>{item.author}</p>
          <p>{item.date}</p>
        </div>
      </Link>
      <div className="btn-area">
        <button
          type="button"
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
