import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const Todolist = () => {
  const [task, setTask] = useState('')
  const [taskDetail, setTaskDetail] = useState([])


  let handleSubmit = (e) => {
    if (task !== "") {
      if (!taskDetail.includes(task)){
        setTaskDetail([...taskDetail, task])
        setTask("")
        toast.info("Task is added in the list")
      }
      else{
        toast.warning("Task already Exist...")
        setTask("")
      }
    }
    else {
      toast.warning("Please Enter Task")
    }
    e.preventDefault();
  }

  let delrow = (i)=>{
    let del=taskDetail.filter((v,index) => index !== i)
    setTaskDetail(del);
  }


  return (
    <>
      <ToastContainer />
      <div className='main_container'>
        <h2>Todo List</h2>
        <div className='inputBtn'>
          <input type='text' name='task' value={task} onChange={(e) => setTask(e.target.value)} />
          <button className='btn' onClick={handleSubmit}>Add Task</button>
        </div>
        {taskDetail.map((v, i) => (
          <div className="list_detail">
          <ul>
            <li>{i+1}. {v} <span onClick={()=> delrow(i)}>&times;</span> </li>
          </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todolist
