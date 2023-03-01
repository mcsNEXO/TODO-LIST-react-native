import {Alert, FlatList} from 'react-native';
import useTask from '../../hooks/useTask';
import React, {useState} from 'react';
import Item from './components/Item';
import PanelButtons from './components/PanelButtons';
import EditModal from './components/Modals/EditModal';
import {validation} from '../../helper/validationInputText';
import Header from './components/Header';
import RemoveModal from './components/Modals/RemoveModal';

const Main = () => {
  // word + M + Open = wordModalOpen
  // set + Word + M + Open = setWordModalOpen
  const {tasks, removeTasks, editTask} = useTask();
  const [indexOpenTask, setIndexOpenTask] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');
  const [panelBtnsOpen, setPanelBtnsOpen] = useState<boolean>(false);
  const [editMOpen, setEditMOpen] = useState<boolean>(false);
  const [removeMOpen, setRemoveMOpen] = useState<boolean>(false);

  // word+M+Open+Handler = word+Modal+Open+Handler
  const panelOpenHandler = (value?: boolean) =>
    setPanelBtnsOpen(value || !panelBtnsOpen);
  const editTextHandler = (value: string) => setEditText(value);
  const editMOpenHandler = (value: boolean) => setEditMOpen(value);
  const removeMOpenHandler = (value: boolean) => setRemoveMOpen(value);

  const closePanel = () => {
    setIndexOpenTask(null);
    setPanelBtnsOpen(false);
  };

  const showPanel = (index: number) => {
    panelOpenHandler(true);
    setIndexOpenTask(index);
  };

  const removeHandler = () => {
    if (indexOpenTask === null) return;

    removeTasks(indexOpenTask);
    removeMOpenHandler(false);
    closePanel();
  };

  const editHandler = () => {
    if (indexOpenTask === null) return;

    //validation
    const valid = validation(editText);
    if (!valid) return;

    //validation success
    editTask(indexOpenTask, editText);
    editTextHandler('');
    editMOpenHandler(false);
    closePanel();
  };

  return (
    <>
      <Header />
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <Item
            title={item}
            index={index}
            indexOpenTask={indexOpenTask}
            showPanel={() => showPanel(index)}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      {panelBtnsOpen && (
        <>
          <PanelButtons
            closePanel={closePanel}
            removeMOpenHandler={() => removeMOpenHandler(true)}
            editMOpenHandler={() => editMOpenHandler(true)}
            panelBtnsOpen={!panelBtnsOpen}
          />
        </>
      )}
      {panelBtnsOpen && editMOpen && (
        <EditModal
          editMOpen={editMOpen}
          editText={editText}
          editTextHandler={editTextHandler}
          editHandler={editHandler}
          editMOpenHandler={() => editMOpenHandler(false)}
        />
      )}
      {panelBtnsOpen && removeMOpen && (
        <RemoveModal
          removeMOpen={removeMOpen}
          removeHandler={removeHandler}
          removeMOpenHandler={() => removeMOpenHandler(false)}
        />
      )}
    </>
  );
};

export default Main;
