import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TODO_MOCK_DATA } from "../../constants/mockdata";

function TodoDetail() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  // console.log("아이디: ", id);
  const [todo, setTodo] = useState({});

  const getTodo = () => {
    const findData = TODO_MOCK_DATA.filter(item => item.id === id);
    // console.log("찾은 데이터: ", { ...findData });

    const findTodo = findData[0];
    // console.log("찾은 Todo: ", findTodo);

    // findTodo 값을 상태에 설정
    setTodo({ ...findTodo });
  };
  useEffect(() => {
    getTodo();
    return () => {};
  }, []);
  return (
    <div>
      <h1>Todo Detail</h1>
      <div>
        작성자 : {todo.author}
        <br />
        날짜 : {todo.date}
        <br />
        제목 : {todo.title}
        <br />
        내용 : {todo.content}
      </div>
      <div>
        <button
          onClick={() => {
            navigate(`/todo/edit/${todo.id}`);
          }}
        >
          수정하기
        </button>
        <button
          onClick={() => {
            navigate(`/todo`);
          }}
        >
          목록보기
        </button>
      </div>
    </div>
  );
}

export default TodoDetail;
