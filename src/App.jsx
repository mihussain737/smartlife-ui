import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import WelcomeComponent from "./components/WelcomeComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import TodoComponent from "./components/TodoComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path={"/"} element={<WelcomeComponent/>}></Route>
          <Route path={"/todos"} element={<ListTodoComponent/>}></Route>
          <Route path={"/add-new"} element={<TodoComponent/>}></Route>
          <Route path={"/update-todo/:todoId"} element={<TodoComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
