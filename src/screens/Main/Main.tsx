import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Modal,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import useTask from '../../hooks/useTask';
import {useState} from 'react';
import Item from './Item/Item';
import PanelButtons from './PanelButtons/PanelButtons';
import ModalButton from './ModalButton';

export default function Main() {
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
    editTask(indexOpenTask, editText);
    editTextHandler('');
    modalOpenHandler(false);
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
      {openPanel && (
        <>
          <PanelButtons
            closePanel={closePanel}
            removeHandler={removeHandler}
            modalOpenHandler={modalOpenHandler}
          />
          {modalOpen && (
            <ModalButton
              modalOpen={modalOpen}
              editText={editText}
              editTextHandler={editTextHandler}
              editHandler={editHandler}
              modalOpenHandler={modalOpenHandler}
            />
          )}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: '100%',
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    color: 'red',
  },
  dFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'whitesmoke',
  },
});
