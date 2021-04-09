import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  private tokenKey = 'token';
  private nameKey = 'name';

  getName = async (): Promise<string | null> => {
    try {
      const name = await AsyncStorage.getItem(this.nameKey);

      if (name) {
        return name;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error.code);
      return null;
    }
  };

  setName = async (name: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(this.nameKey, name);
    } catch (error) {
      console.error(error.code);
    }
  };

  removeName = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(this.nameKey);
    } catch (error) {
      console.error(error.code);
    }
  };

  getToken = async (): Promise<string | null> => {
    try {
      const token = await AsyncStorage.getItem(this.tokenKey);

      if (token) {
        return token;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error.code);
      return null;
    }
  };

  setToken = async (token: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(this.tokenKey, token);
    } catch (error) {
      console.error(error.code);
    }
  };

  removeToken = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(this.tokenKey);
    } catch (error) {
      console.error(error.code);
    }
  };
}

export const storage = new Storage();
