import React, { ChangeEvent, useState } from 'react';
import TaskList from '../components/TaskList';
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

  const AddTask = ():void => {
    const newTask = {taskName:task, deadline: deadline};
    setTaskList([...tasklist, newTask]);
    setTask("");
    setDeadline(0);
  }

  return (
    <>
    <div className="task-container">
      <section className="task-input">
        <input type="text" placeholder="Tarefas..." name="task" value={ task } onChange={handleChange}/>
        <input type="number" placeholder="Prazo(em dias)..." name="deadline" value={ deadline } onChange={handleChange}/>
      </section>
      <button type="button" onClick={AddTask}>Adicionar tarefa</button>
       
      <div className="task-list">
        {tasklist.map((task: ITask, key: number) => {
          return <TaskList key={key} task={task} completeTask={() => {}}/>
        })}
      </div>
    </div>   
    </>
  );
};

export default Task;
