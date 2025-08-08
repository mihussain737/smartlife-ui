import React, { useEffect } from "react";
import { useState } from "react";
import { getTodoById, saveNewTodo } from "../services/TodoService";
import { useNavigate, useParams } from "react-router-dom";

const TodoComponent = () => {

     const [title,setTitle]=useState('');
     const [description,setDescription]=useState('')
     const [completed,setCompleted] =useState(Object)
     const navigator=useNavigate()
     const {todoId}=useParams();

     function handleSubmit(e){
          e.preventDefault();
          const todo={title,description,completed}

          saveNewTodo(todo).then((response)=>{
               console.info("response data is coming-----")
               console.log(response.data)
               navigator('/todos')
          }).catch(error=>{
               console.error(error)
          })
          
     }

     function pageTitle(){
          if(todoId){
               return <div className="card-header bg-primary rounded-2 text-white">Update Todo</div>
          }else{
               return <div className="card-header bg-primary rounded-2 text-white">Add New Todo</div>
          }
     }

     useEffect(()=>{
          if(todoId){
               getTodoById(todoId).then((response)=>{
                    console.log("get data from backend with id")
                    console.log(response.data)
                    setTitle(response.data.title)
                    setDescription(response.data.description)
                    setCompleted(response.data.completed)
               }).catch(error=>{
                    console.error(error)
               })
          }
     },[todoId])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-center shadow-md">
            {
               pageTitle()
            }
            <div className="card-body border-2">
               <form className="form-group">
                    <label className="form-control my-2">Title:</label>
                    <input type="text" className="form-control border border-1 border-success" name="title" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <label className="form-control my-2">Description:</label>
                    <input type="text" className="form-control border border-1 border-success" name="description" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <label className="form-control my-2">Completed:</label>
                    <select name="completed" className="form-control border border-1 border-success" value={completed} onChange={(e)=>setCompleted(e.target.value)}>
                         <option defaultValue>Select Completed Here</option>
                         <option value="true">Yes</option>
                         <option value="false">No</option>
                    </select>
                    <div className="d-flex">
                    <button className="btn btn-primary ms-auto mt-3" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
