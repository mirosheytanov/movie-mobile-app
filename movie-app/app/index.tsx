import { StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';
import {
  AccessToken,
  LoginButton,
  LoginManager,
} from 'react-native-fbsdk-next';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        setError('Login cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();

        if (data) {
          console.log('Logged in with token:', data.accessToken.toString());
          router.push('/movies');
        }
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie App</Text>
      <Button title="Login with Facebook" onPress={handleFacebookLogin} />
      {error && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
