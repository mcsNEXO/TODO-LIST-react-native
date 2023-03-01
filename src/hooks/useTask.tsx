import {useTasks} from '../context/TaskContext';
import {setAsyncStorage} from '../helpers/asyncStorage';

const useTask = () => {
  const {tasks, setTasks} = useTasks();

  const addTask = async (task: string) => {
    setTasks([...tasks, task.trim()]);
    setAsyncStorage('tasks', [...tasks, task]);
  };

  const removeTasks = async (index: number) => {
    const updatedTasks = tasks.filter((_, i: number) => i !== index);
    setTasks(updatedTasks);
    setAsyncStorage('tasks', updatedTasks);
  };

  const editTask = async (index: number, value: string) => {
    tasks[index] = value.trim();
    setTasks(tasks);
    setAsyncStorage('tasks', tasks);
  };

  return {tasks, addTask, removeTasks, editTask};
};

export default useTask;
