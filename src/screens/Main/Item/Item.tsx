import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Item({
  title,
  index,
  indexOpenTask,
  showPanel,
}: {
  title: string;
  index: number;
  indexOpenTask: number | null;
  showPanel: (value: number) => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.box, index === indexOpenTask && styles.active]}
      onPress={() => showPanel(index)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  active: {
    borderColor: '#D36B00',
    borderWidth: 2,
  },
  text: {
    textAlign: 'center',
    color: 'whitesmoke',
    fontSize: 20,
  },
  box: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#443C68',
  },
});
