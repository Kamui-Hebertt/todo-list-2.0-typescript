import React, { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer';
import mainStyle from './App.module.css';
import  TaskList from '../components/TaskList';
import TaskForm from  '../components/TaskForm';
import { ITask } from "../interfaces/Task";



const App = () => {
const [ taskList ,setTaskList] =  useState<ITask[]>([])

  return (
      <>
      <Header />
      <div className="App">
      <main className={mainStyle.main}>
      <div>
        <h2>
          what are you going to do ?
        </h2>
        <TaskForm taskList={taskList} setTaskList={setTaskList}  btnText="Create Task"/>
  
       
      </div>
      <div>
      <h2>Your tasks:</h2>
      <TaskList taskList={taskList} />
      </div>
      </main>
      <Footer />

    </div>
    </>
  )
}


export default App;