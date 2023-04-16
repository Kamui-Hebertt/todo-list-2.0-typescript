import React from 'react';
import { ITask } from '../interfaces/Task';
import StyleSheetList from './TaskList.module.css'

interface Props {
taskList: ITask[];
handleDelete(id:number):void;
handleEdit(task:ITask):void;

}

const TaskList = ({ taskList, handleDelete, handleEdit }:Props) => {
  return (
    <div>
      {taskList.length > 0 ? (
      taskList.map((elementTask,i) => 
      <div key={i} className={StyleSheetList.task}>
        {elementTask.id}
        <div className={StyleSheetList.details}>
          <h4>{elementTask.title}</h4>
          <p>Difficulty: {elementTask.difficulty} </p>
          </div>

          <div className={ StyleSheetList.actions}>
            <i className='bi bi-pencil' onClick={()=> handleEdit(elementTask)}></i>
            <i className='bi bi-trash' onClick={() => handleDelete(elementTask.id)}></i>
            </div>
      </div>
      )
      ) : 
      (<p>there is no submmited tasks</p>)}
    </div>
  )
}

export default TaskList;