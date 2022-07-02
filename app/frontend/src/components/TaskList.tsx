import React from 'react';
import { ITask } from '../interfaces/Task.interface';

interface ITaskProps {
  task: ITask;
  completeTask(taskToDelete: string):void;
}

const TaskList = ({ task, completeTask }: ITaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => {completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default TaskList;