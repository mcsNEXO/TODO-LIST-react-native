import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import useTask from '../../hooks/useTask';

const Header = () => {
  const [textInput, setTextInput] = useState<string>('');
  const {tasks, addTask} = useTask();

  const onChange = (value: string) => setTextInput(value);

  const addTaskHandler = () => {
    addTask(textInput);
    onChange('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO LIST</Text>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={onChange}
      />
      <TouchableHighlight style={styles.button} onPress={addTaskHandler}>
        <Text style={styles.text}>Add task</Text>
      </TouchableHighlight>
      <Text style={styles.headerText}>
        {tasks?.length === 0
          ? "You've 0 tasks"
          : `Your tasks (${tasks.length})`}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: 'whitesmoke',
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'whitesmoke',
    fontSize: 18,
    height: 40,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 12,
    marginTop: 12,
    color: 'whitesmoke',
    backgroundColor: '#2C394B',
    padding: 10,
  },
  button: {
    verticalAlign: 'center',
    backgroundColor: '#334756',
    color: 'white',
    textAlign: 'center',
    width: '40%',
    height: 32,
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 16,
    padding: 6,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17.5,
    fontFamily: 'Rubik-Regular',
  },
  headerText: {
    color: 'whitesmoke',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
  },
});
