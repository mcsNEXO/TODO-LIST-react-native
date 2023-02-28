import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import useTask from '../../hooks/useTask';
import {useState} from 'react';
import Item from './Item/Item';
import PanelButtons from './PanelButtons/PanelButtons';

export default function Main() {
  const {tasks, removeTasks} = useTask();
  const [isOpen, setIsOpen] = useState(false);
  const [indexOpenTask, setIndexOpenTask] = useState<number | null>(null);

  const handleIsOpen = (value?: boolean) => setIsOpen(value || !isOpen);

  const closePanel = () => {
    setIndexOpenTask(null);
    setIsOpen(false);
  };

  const showPanel = (index: number) => {
    handleIsOpen(true);
    setIndexOpenTask(index);
  };

  const removeHandler = () => {
    if (indexOpenTask === null) return;
    removeTasks(indexOpenTask);
    closePanel();
  };

  return (
    <>
      <FlatList
        style={{height: 'auto'}}
        data={tasks}
        renderItem={({item, index}) => (
          <Item
            title={item}
            index={index}
            indexOpenTask={indexOpenTask}
            showPanel={showPanel}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      {isOpen && (
        <PanelButtons closePanel={closePanel} removeHandler={removeHandler} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    fontSize: 20,
    marginLeft: 10,
    height: '100%',
    color: 'red',
    flex: 1,
  },
  dFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'whitesmoke',
  },
});
