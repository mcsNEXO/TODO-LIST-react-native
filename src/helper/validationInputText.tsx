import {Alert} from 'react-native';

export const validation = (text: string) => {
  if (!text)
    return Alert.alert('Error text', 'Your task must have min 1 character!');
};
