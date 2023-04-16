import React from 'react';
import { ITask } from '../interfaces/Task';

interface Props {
taskList: ITask[];
}

const TaskList = ({ taskList }:Props) => {
  return (
    <div>
      {taskList.length > 0 ? (
      taskList.map((elementTask,i) => 
      <div key={i}>
        {elementTask.id}
        <div>
          <h4>{elementTask.title}</h4>
          <p>Difficulty: {elementTask.difficulty} </p>
          </div>

          <div>
            <i className='bi bi-pencil'></i>
            <i className='bi bi-trash'></i>
            </div>
      </div>
      )
      ) : 
      (<p>there is no submmited tasks</p>)}
    </div>
  )
}

export default TaskList;