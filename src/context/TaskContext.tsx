import React, {createContext} from 'react';
import {getAsyncStorage} from '../helpers/asyncStorage';

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
      const data = await getAsyncStorage('tasks');
      if (!data) return;
      try {
        setTasks(JSON.parse(data));
      } catch (err) {
        console.log(err);
      }
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
