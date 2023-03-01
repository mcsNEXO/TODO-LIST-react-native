import {Modal, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './stylesModal';

interface IModalButton {
  editText: string;
  editMOpen: boolean;
  editTextHandler: (value: string) => void;
  editHandler: () => void;
  editMOpenHandler: () => void;
}

const ModalButton = ({
  editText,
  editMOpen,
  editTextHandler,
  editHandler,
  editMOpenHandler,
}: IModalButton) => {
  return (
    <Modal transparent={true} visible={editMOpen} animationType={'slide'}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>Enter new text</Text>
        <TextInput
          style={styles.input}
          value={editText}
          onChangeText={editTextHandler}
        />
        <View style={styles.conButtons}>
          <TouchableOpacity onPress={editHandler}>
            <Text style={styles.button}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={editMOpenHandler}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalButton;
