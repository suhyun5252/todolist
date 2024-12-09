import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TodoList from "./pages/todo/Index";
import TodoAdd from "./pages/todo/TodoAdd";
import TodoDetail from "./pages/todo/TodoDetail";
import TodoEdit from "./pages/todo/TodoEdit";
import Layout from "./components/Layout";
import { useState } from "react";
import { TODO_MOCK_DATA } from "./constants/mockdata";

let originData = [...TODO_MOCK_DATA];
function App() {
  const [countId, setCountId] = useState(originData.length + 1);
  const [todoList, setTodoList] = useState(originData);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="todo">
            <Route index element={<TodoList />} />
            <Route
              path="add"
              element={
                <TodoAdd
                  todoList={todoList}
                  setTodoList={setTodoList}
                  countId={countId}
                  setCountId={setCountId}
                />
              }
            />
            <Route path="detail" element={<TodoDetail />} />
            <Route path="edit/:id" element={<TodoEdit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
