import AsyncStorage from '@react-native-community/async-storage';

export const setAsyncStorage = async (key: string, value: any) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
};
