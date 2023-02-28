import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PanelButtons({
  removeHandler,
  closePanel,
}: {
  removeHandler: () => void;
  closePanel: () => void;
}) {
  return (
    <View style={styles.panel}>
      <Text style={styles.item}>
        <Icon name="edit" size={35} color="green" />
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
}

const styles = StyleSheet.create({
  panel: {
    height: 90,
    backgroundColor: '#393053',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
