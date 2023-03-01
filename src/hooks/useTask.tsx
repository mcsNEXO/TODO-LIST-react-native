import {useTasks} from '../context/TaskContext';
import AsyncStorage from '@react-native-community/async-storage';

const useTask = () => {
  const {tasks, setTasks} = useTasks();

  const addTask = async (task: string) => {
    await AsyncStorage.setItem('tasks', JSON.stringify([...tasks, task]));
    setTasks([...tasks, task.trim()]);
  };

  const removeTasks = async (index: number) => {
    const updatedTasks = tasks.filter((_, i: number) => i !== index);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const editTask = async (index: number, value: string) => {
    tasks[index] = value.trim();
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    setTasks(tasks);
  };

  return {tasks, addTask, removeTasks, editTask};
};

export default useTask;
