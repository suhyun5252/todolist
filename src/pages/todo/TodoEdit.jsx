import { useEffect, useState } from "react";
import { TODO_MOCK_DATA } from "../../constants/mockdata";
import { useNavigate, useParams } from "react-router-dom";

function TodoEdit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const getTodo = () => {
    const findData = TODO_MOCK_DATA.filter(item => item.id === parseInt(id))[0];
    setFormData(findData);
  };
  const postTodo = () => {
    const newData = TODO_MOCK_DATA.map(item => {
      if (formData.id === item.id) {
        return formData;
      } else {
        return item;
      }
    });
    console.log(newData);
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };
  const handleClickBack = () => {
    navigate(`/todo/detail?id=${formData.id}`);
  };
  const handleSubmit = e => {
    e.preventDefault();
    postTodo();
    alert("내용이 수정되었습니다.");
    navigate(`/todo/detail?id=${formData.id}`);
  };
  useEffect(() => {
    getTodo();
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
            readOnly
            disabled
          />
        </label>
        <br />
        <label>
          제목 :
          <input type="text" name="title" value={formData.title} />
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
          <button type="submit">수정하기</button>
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

export default TodoEdit;
