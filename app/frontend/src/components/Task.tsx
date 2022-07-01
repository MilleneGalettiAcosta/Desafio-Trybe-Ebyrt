import React from 'react';
import { ITask } from '../interfaces/Task.interface';

interface ITaskProps {
  task: ITask;
}

const Task = ({ task }: ITaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => {}}>X</button>
    </div>
  )
}

export default Task;