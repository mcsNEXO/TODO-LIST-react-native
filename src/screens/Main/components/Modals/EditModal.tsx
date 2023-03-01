import {Modal, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './stylesModal';

interface IModalButton {
  editText: string;
  openedEditM: boolean;
  handleEditValueM: (value: string) => void;
  editHandler: () => void;
  handleOpenEditM: () => void;
}

const ModalButton = ({
  editText,
  openedEditM,
  handleEditValueM,
  editHandler,
  handleOpenEditM,
}: IModalButton) => {
  return (
    <Modal transparent={true} visible={openedEditM} animationType={'slide'}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>Enter new text</Text>
        <TextInput
          style={styles.input}
          value={editText}
          onChangeText={handleEditValueM}
        />
        <View style={styles.conButtons}>
          <TouchableOpacity onPress={editHandler}>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenEditM}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalButton;
