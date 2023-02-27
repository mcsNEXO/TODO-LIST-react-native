import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import useTask from '../hooks/useTask';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';

export default function Main() {
  const {tasks, removeTasks} = useTask();
  const [isOpen, setIsOpen] = useState(false);
  const [indexOpenTask, setIndexOpenTask] = useState<number | null>(null);

  const handleIsOpen = (value?: boolean) => setIsOpen(value || !isOpen);

  const closePanel = () => {
    setIndexOpenTask(null);
    setIsOpen(false);
  };

  const showPanel = (index: number) => {
    handleIsOpen(true);
    setIndexOpenTask(index);
  };

  const removeHandler = () => {
    if (indexOpenTask === null) return;
    removeTasks(indexOpenTask);
    closePanel();
  };

  const Item = ({title, index}: {title: string; index: number}) => (
    <View
      style={[styles.box, index === indexOpenTask && styles.active]}
      onTouchStart={() => showPanel(index)}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  return (
    <>
      <ScrollView style={{height: 'auto'}}>
        <Text style={styles.headerText}>
          {tasks?.length === 0
            ? "You've 0 tasks"
            : `Your tasks (${tasks.length})`}
        </Text>
        <FlatList
          style={{height: 'auto'}}
          data={tasks}
          renderItem={({item, index}) => <Item title={item} index={index} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </ScrollView>
      {isOpen && (
        <View style={styles.panel}>
          <Text style={styles.item}>
            <Icon name="edit" size={35} color="green" />
          </Text>
          <Text style={styles.item}>
            <Icon
              name="cancel"
              size={35}
              color="black"
              onPress={() => closePanel()}
            />
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
      )}
    </>
  );
}

const styles = StyleSheet.create({
  active: {
    borderColor: '#D36B00',
    borderWidth: 2,
  },
  panel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#393053',
    height: '14%',
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
  button: {
    width: 40,
    fontSize: 20,
    marginLeft: 10,
    height: '100%',
    color: 'red',
    flex: 1,
  },
  dFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'whitesmoke',
  },
  headerText: {
    color: 'whitesmoke',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
  },
});
