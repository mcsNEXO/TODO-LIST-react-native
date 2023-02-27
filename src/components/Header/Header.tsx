import {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import useTask from '../hooks/useTask';

export default function Header() {
  const [textInput, setTextInput] = useState<string>('');
  const {addTask} = useTask();
  const onChange = (value: string) => setTextInput(value);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO LIST</Text>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={onChange}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => addTask(textInput)}>
        <Text style={[styles.text, styles.color]}>Add task</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: 'whitesmoke',
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'whitesmoke',
    height: 40,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 12,
    marginTop: 12,
    color: 'whitesmoke',
  },
  color: {
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    width: '30%',
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 16,
    padding: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
  },
});
