import { useEffect, useState } from "react";
import { TODO_MOCK_DATA } from "../../constants/mockdata";
import { useNavigate } from "react-router-dom";
const initData = {
  id: 0,
  title: "",
  content: "",
  author: "",
  date: "",
  complete: 0,
  privacy: 0,
};
function TodoAdd({ todoList, setTodoList, countId, setCountId }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initData);

  const postTodo = () => {
    console.log("formData", formData);

    const newData = [...todoList, { ...formData, id: countId }];
    setTodoList(newData);
    console.log(newData);
    setCountId(++countId);
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };
  const handleClickBack = () => {
    navigate(`/todo`);
  };
  const handleSubmit = e => {
    e.preventDefault();
    postTodo();
    alert("내용이 추가되었습니다.");
    console.log(todoList);
    // navigate(`/todo`);
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <h1>TodoEdit</h1>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <label>
          작성자 :
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          제목 :
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          내용 :
          <textarea
            name="content"
            value={formData.content}
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          날짜 :
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          완료여부 :
          <input
            type="checkbox"
            name="complete"
            checked={formData.complete === 1 ? true : false}
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <label>
          공개여부 :
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy === 1 ? true : false}
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <div>
          <button type="submit">등록하기</button>
          <button
            type="button"
            onClick={() => {
              handleClickBack();
            }}
          >
            취소하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoAdd;
