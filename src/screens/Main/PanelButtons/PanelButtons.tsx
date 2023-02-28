import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IPanelButtons {
  removeHandler: () => void;
  closePanel: () => void;
  modalOpenHandler: () => void;
}

const PanelButtons = ({
  removeHandler,
  closePanel,
  modalOpenHandler,
}: IPanelButtons) => {
  return (
    <View style={styles.panel}>
      <Text style={styles.item}>
        <Icon name="edit" size={35} color="green" onPress={modalOpenHandler} />
      </Text>
      <Text style={styles.item}>
        <Icon name="cancel" size={35} color="black" onPress={closePanel} />
      </Text>
      <Text style={styles.item}>
        <Icon
          name="delete-forever"
          size={35}
          color="#FF0303"
          onPress={removeHandler}
        />
      </Text>
    </View>
  );
};

export default PanelButtons;

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#393053',
  },
  item: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});
