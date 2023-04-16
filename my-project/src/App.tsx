import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer';
import mainStyle from './App.module.css';
import  TaskList from '../components/TaskList';
import TaskForm from  '../components/TaskForm';
import { ITask } from "../interfaces/Task";
import Modal from '../components/Modal'


const App = () => {
const [ taskList ,setTaskList] =  useState<ITask[]>([])
const [ taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);


  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter((elementTask) => {
        return elementTask.id !== id
      })
    )
  }

  const hideShowModal = (display:boolean) => {
      const modal = document.querySelector("#modal");
      if(display){
        modal!.classList.remove("hide")

      }
      else {
            modal!.classList.add("hide")
      }
  }

  const editTask = (task:ITask): void => {
    hideShowModal(true);
    setTaskToUpdate(task);

  }

  const updateTask = (id:number, title:string, difficulty:number) => {
      const updatedTask:ITask = { id, title, difficulty}
      const updatedItems = taskList.map((task) => {
        return task.id === updatedTask.id ? updatedTask : task
      });

      setTaskList(updatedItems);
      hideShowModal(false);
  }

  return (
      <>
      <Modal children={<TaskForm btnText="Edit Task"  taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>} />
      <Header />
      <div className="App">
      <main className={mainStyle.main}>
      <div>
        <h2>
          what are you going to do ?
        </h2>
        <TaskForm  taskList={taskList} setTaskList={setTaskList}  btnText="Create Task"/>
  
       
      </div>
      <div>
      <h2>Your tasks:</h2>
      <TaskList  handleEdit={editTask} handleDelete={deleteTask} taskList={taskList} />
      </div>
      </main>
      <Footer />

    </div>
    </>
  )
}


export default App;