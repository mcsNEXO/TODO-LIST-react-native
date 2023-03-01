import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './stylesModal';

interface IErrorModal {
  openedRemoveM: boolean;
  removeHandler: () => void;
  handleOpenRemoveM: () => void;
}

const ErrorModal = ({
  openedRemoveM,
  removeHandler,
  handleOpenRemoveM,
}: IErrorModal) => {
  return (
    <Modal transparent={true} visible={openedRemoveM} animationType={'slide'}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>Do you want remove task ?</Text>
        <View style={styles.conButtons}>
          <TouchableOpacity onPress={removeHandler}>
            <Text style={styles.button}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenRemoveM}>
            <Text style={styles.button}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
