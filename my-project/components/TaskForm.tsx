import React, { ChangeEvent, FormEvent, useState } from 'react';
import taskFormStyles from './TaskForm.module.css';
import { ITask } from '../interfaces/Task';
interface Props {
  btnText:string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}:Props) => {

  const [id, setId] = useState<number>(0);
  const [ title, setTitle] = useState<string>("");
  const [ difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const id = Math.floor(Math.random() * 1000);

      const newTask:ITask = { id, title, difficulty};
      setTaskList!([...taskList, newTask]);

      setTitle('');
      setDifficulty(0);
      // console.log(taskList)
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value);
    }
    else {
        setDifficulty(parseInt(e.target.value))
    }
 

  }
  return (
  <form onSubmit={addTaskHandler} className={taskFormStyles.form}>

    <div className={taskFormStyles.input_container}>
      <label htmlFor='title'>Title:</label>
      <input type="text" name='title' value={title} onChange={handleChange} id="title"  placeholder='Enter the task title'/>
      </div>
      <div className={taskFormStyles.input_container}>
      <label htmlFor='dificulty'>Difficulty:</label>
      <input type="number" id="dificulty" value={difficulty}  name='difficulty' onChange={handleChange}  placeholder='Enter the task difficulty'/>
      </div>
    <input type='submit' value={btnText} />

  </form>
  )
}

export default TaskForm;