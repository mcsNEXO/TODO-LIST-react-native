import {Context} from '../context/TaskContext';
import {useContext} from 'react';

const useTask = () => {
  const {tasks, setTasks} = useContext(Context);

  const addTask = (task: string) => {
    setTasks([...tasks, task.trim()]);
  };

  const removeTasks = (index: number) => {
    const updatedTasks = tasks.filter((_, i: number) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index: number, value: string) => {
    tasks[index] = value.trim();
    setTasks(tasks);
  };

  return {tasks, addTask, removeTasks, editTask};
};

export default useTask;
