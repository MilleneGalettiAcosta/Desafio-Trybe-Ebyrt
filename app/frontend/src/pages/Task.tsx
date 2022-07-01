import React, { ChangeEvent, useState } from 'react';
import { ITask } from '../interfaces/Task.interface';

const Task: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [tasklist, setTaskList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  return (
    <>
    <div className="task-container">
      <section className="task-input">
        <input type="text" placeholder="Tarefas..." name="task" value={ task } onChange={handleChange}/>
        <input type="number" placeholder="Prazo(em dias)..." name="deadline" value={ deadline } onChange={handleChange}/>
      </section>
      <button type="button" onClick={() =>{}}>Adicionar tarefa</button>
      </div>  
      <div className="task-list">
      </div>
    </>
  );
};

export default Task;
