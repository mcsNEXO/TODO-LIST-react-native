import {Context} from '../context/TaskContext';
import {useContext} from 'react';

const useTask = () => {
  const {tasks, setTasks} = useContext(Context);

  const addTask = (task: string) => {
    if (task === '') return;
    setTasks([...tasks, task]);
  };

  const removeTasks = (index: number) => {
    if (typeof index === null) return;
    const updatedTasks = tasks.filter((_, i: number) => i !== index);
    setTasks(updatedTasks);
  };

  return {tasks, addTask, removeTasks};
};

export default useTask;
