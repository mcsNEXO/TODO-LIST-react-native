import React, {createContext} from 'react';

interface IContext {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Context = createContext<IContext>(null as any);

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [tasks, setTasks] = React.useState<string[]>([]);

  const value = {
    tasks,
    setTasks,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
