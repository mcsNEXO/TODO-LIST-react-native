import {useTasks} from '../context/TaskContext';
import AsyncStorage from '@react-native-community/async-storage';

const useTask = () => {
  const {tasks, setTasks} = useTasks();

  const addTask = async (task: string) => {
    setTasks([...tasks, task.trim()]);
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify([...tasks, task]));
    } catch (err) {
      console.log(err);
    }
  };

  const removeTasks = async (index: number) => {
    const updatedTasks = tasks.filter((_, i: number) => i !== index);
    setTasks(updatedTasks);
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (index: number, value: string) => {
    tasks[index] = value.trim();
    setTasks(tasks);
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (err) {
      console.log(err);
    }
  };

  return {tasks, addTask, removeTasks, editTask};
};

export default useTask;
