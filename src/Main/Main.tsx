import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import useTask from '../components/hooks/useTask';

export default function Main() {
  const {tasks, removeTasks} = useTask();
  const Item = ({title, index}: {title: string; index: number}) => (
    <View style={styles.box}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.button} onPress={() => removeTasks(index)}>
        X
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({item, index}) => <Item title={item} index={index} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'whitesmoke',
    fontSize: 16,
  },
  box: {
    width: '90%',
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
    backgroundColor: '#1F4690',
  },
  button: {
    width: 40,
    fontSize: 20,
    marginLeft: 10,
    height: '100%',
    color: 'red',
  },
  dFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'whitesmoke',
  },
});
