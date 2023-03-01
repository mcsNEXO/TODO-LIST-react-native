import {FlatList, SectionList, View} from 'react-native';
import useTask from '../../hooks/useTask';
import React, {useState} from 'react';
import Item from './components/Item';
import PanelButtons from './components/PanelButtons';
import EditModal from './components/Modals/EditModal';
import {validation} from '../../helpers/validationInputText';
import Header from './components/Header';
import RemoveModal from './components/Modals/RemoveModal';

const Main = () => {
  //states
  const [indexOpenTask, setIndexOpenTask] = useState<number>();
  const [editValueM, setEditText] = useState<string>('');
  const [openedPanelBtns, setOpenedPanelBtns] = useState<boolean>(false);
  //opendEditModal => openedEditM
  const [openedEditM, setOpenedEditM] = useState<boolean>(false);
  const [openedRemoveM, setOpenedRemoveM] = useState<boolean>(false);

  //hooks
  const {tasks, removeTasks, editTask} = useTask();

  const panelOpenHandler = (value?: boolean) => {
    setOpenedPanelBtns(value || !openedPanelBtns);
  };
  // handleOpenRemoveM => handleOpenRemoveModal
  const handleEditValueM = (value: string) => setEditText(value);
  const handleOpenEditM = (value: boolean) => setOpenedEditM(value);
  const handleOpenRemoveM = (value: boolean) => setOpenedRemoveM(value);

  const closePanel = () => {
    setIndexOpenTask(undefined);
    setOpenedPanelBtns(false);
  };

  const showPanel = (index: number) => {
    panelOpenHandler(true);
    setIndexOpenTask(index);
  };

  const removeHandler = () => {
    if (indexOpenTask === undefined) return;

    removeTasks(indexOpenTask);
    handleOpenRemoveM(false);
    closePanel();
  };

  const editHandler = () => {
    //validation
    if (!indexOpenTask || !validation(editValueM)) return;

    //validation success
    editTask(indexOpenTask, editValueM);
    handleEditValueM('');
    handleOpenEditM(false);
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
      {openedPanelBtns && (
        <>
          <PanelButtons
            closePanel={closePanel}
            handleOpenRemoveM={() => handleOpenRemoveM(true)}
            handleOpenEditM={() => handleOpenEditM(true)}
            panelBtnsOpen={!openedPanelBtns}
          />
        </>
      )}
      {openedPanelBtns && openedEditM && (
        <EditModal
          openedEditM={openedEditM}
          editText={editValueM}
          handleEditValueM={handleEditValueM}
          editHandler={editHandler}
          handleOpenEditM={() => handleOpenEditM(false)}
        />
      )}
      {openedPanelBtns && openedRemoveM && (
        <RemoveModal
          openedRemoveM={openedRemoveM}
          removeHandler={removeHandler}
          handleOpenRemoveM={() => handleOpenRemoveM(false)}
        />
      )}
    </>
  );
};

export default Main;
