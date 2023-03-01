import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './stylesModal';

interface IErrorModal {
  removeMOpen: boolean;
  removeHandler: () => void;
  removeMOpenHandler: () => void;
}

const ErrorModal = ({
  removeMOpen,
  removeHandler,
  removeMOpenHandler,
}: IErrorModal) => {
  return (
    <Modal transparent={true} visible={removeMOpen} animationType={'slide'}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>Do you want remove task ?</Text>
        <View style={styles.conButtons}>
          <TouchableOpacity onPress={removeHandler}>
            <Text style={styles.button}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removeMOpenHandler}>
            <Text style={styles.button}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
