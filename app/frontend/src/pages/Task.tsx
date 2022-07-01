import React from 'react';

const Task: React.FC = () => {
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
