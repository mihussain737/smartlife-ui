import React, { useEffect } from "react";
import { useState } from "react";
import { completeTodoById, deleteTodoById, getAllTodos, inCompleteTodoById } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const navigator=useNavigate();

  useEffect(() => {
    listTodos();
  },[]);

  function listTodos(){
     getAllTodos()
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleAddNew(){
     navigator('/add-new');
  }

  function handleUpdate(todoId){
     navigator(`/update-todo/${todoId}`)
  }

  function handleDelete(todoId){
     deleteTodoById(todoId).then((response)=>{
          console.log(response.data)
          listTodos();
     }).catch(error=>{
          console.error(error)
     })
  }

  function handleComplete(todoId){
     completeTodoById(todoId).then((response)=>{
          console.log(response.data)
          listTodos();
     }).catch(error=>{
          console.error(error)
     })
  }

  function handleIncomplete(todoId){
     inCompleteTodoById(todoId).then((response)=>{
          console.log(response.data)
          listTodos();
     }).catch(error=>{
          console.error(error)
     })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card text-center shadow-md">
            <div className="card-header">
              <h3 className="bg-primary text-white rounded-3">List of Todos</h3>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <button className="btn btn-primary mb-2 me-auto" onClick={()=>handleAddNew()}>
                  Add New
                </button>
              </div>
              <table className="table table-bordered table-success">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Completed</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo) => (
                    <tr key={todo.id}>
                      <td>{todo.title}</td>
                      <td>{todo.description}</td>
                      <td>{todo.completed ? "Yes" : "No"}</td>
                      <td>
                        <button className="btn btn-info mx-1" onClick={(e)=>handleUpdate(todo.id)}>Update</button>
                        <button className="btn btn-danger mx-1" onClick={(e)=>handleDelete(todo.id)}>Delete</button>
                        <button className="btn btn-success mx-1" onClick={(e)=>handleComplete(todo.id)}>
                          Complete
                        </button>
                        <button className="btn btn-warning mx-1" onClick={(e)=>handleIncomplete(todo.id)}>
                          Incomplete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTodoComponent;
