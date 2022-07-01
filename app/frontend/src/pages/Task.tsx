import React from 'react';

interface ITaskProps {}

const Task: React.FC<ITaskProps> = () => {
  return (
    <>
    <div className="task-container">
      <section className="task-input">
        <input type="text" placeholder="Tarefas..." name="task" value="task" onChange={() => {}}/>
        <input type="number" placeholder="Prazo(em dias)..." name="deadline" value="0" onChange={() => {}}/>
      </section>
      <button type="button" onClick={() =>{}}>Adicionar tarefa</button>
      </div>  
    </>
  );
};

export default Task;
