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
    color: 'whitesmoke',
    fontSize: 20,
    flex: 6,
    textAlign: 'center',
  },
  box: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    backgroundColor: '#443C68',
  },
});
