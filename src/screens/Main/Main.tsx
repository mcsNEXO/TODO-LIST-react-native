import {FlatList} from 'react-native';
import useTask from '../../hooks/useTask';
import {useState} from 'react';
import Item from './components/Item';
import PanelButtons from './components/PanelButtons';
import EditModal from './components/EditModal';
import {validation} from '../../helper/validationInputText';

const Main = () => {
  const {tasks, removeTasks, editTask} = useTask();
  const [indexOpenTask, setIndexOpenTask] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');
  const [openPanel, setOpenPanel] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const panelOpenHandler = (value?: boolean) =>
    setOpenPanel(value || !openPanel);
  const editTextHandler = (value: string) => setEditText(value);
  const modalOpenHandler = (value: boolean) => setModalOpen(value);

  const closePanel = () => {
    setIndexOpenTask(null);
    setOpenPanel(false);
  };

  const showPanel = (index: number) => {
    panelOpenHandler(true);
    setIndexOpenTask(index);
  };

  const removeHandler = () => {
    if (indexOpenTask === null) return;
    removeTasks(indexOpenTask);
    closePanel();
  };

  const editHandler = () => {
    if (indexOpenTask === null) return;
    validation(editText);
    editTask(indexOpenTask, editText);
    editTextHandler('');
    modalOpenHandler(false);
    closePanel();
  };

  return (
    <>
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
      {openPanel && (
        <>
          <PanelButtons
            closePanel={closePanel}
            removeHandler={removeHandler}
            modalOpenHandler={() => modalOpenHandler(true)}
          />
        </>
      )}
      {openPanel && modalOpen && (
        <EditModal
          modalOpen={modalOpen}
          editText={editText}
          editTextHandler={editTextHandler}
          editHandler={editHandler}
          modalOpenHandler={() => modalOpenHandler(false)}
        />
      )}
    </>
  );
};

export default Main;
