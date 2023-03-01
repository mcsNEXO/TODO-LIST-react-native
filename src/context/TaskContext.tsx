import React, {createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface IContext {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

// const initialValue = (): IContext => ({tasks: [], setTasks: () => {}});

export const TasksContext = createContext<IContext>(null as any);

export const TasksProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [tasks, setTasks] = React.useState<string[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('tasks');
      if (data === null) return;
      setTasks(JSON.parse(data));
    })();
  }, []);

  const value = {
    tasks,
    setTasks,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
export const useTasks = () => React.useContext(TasksContext);
