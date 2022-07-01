import React, { useState } from 'react';
import { ITask } from '../interfaces/Task.interface';

const Task: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [tasklist, setTaskList] = useState<ITask[]>([]);

  return (
    <>
    <div className="task-container">
      <section className="task-input">
        <input type="text" placeholder="Tarefas..." name="task" value="task" onChange={() => {}}/>
        <input type="number" placeholder="Prazo(em dias)..." name="deadline" value="0" onChange={() => {}}/>
      </section>
      <button type="button" onClick={() =>{}}>Adicionar tarefa</button>
      </div>  
      <div className="task-list">
      </div>
    </>
  );
};

export default Task;
