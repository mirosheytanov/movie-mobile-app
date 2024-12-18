import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { LoginButton, Profile } from 'react-native-fbsdk-next';

interface UserData {
  name: string;
  userID: string;
}

const initialProfile = {
  name: '',
  userID: '',
};

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserData>(initialProfile);

  const handleLogout = () => {
    setProfile(initialProfile);
    router.push('/');
  };

  useEffect(() => {
    const getUserData = async () => {
      const currentUser = await Profile.getCurrentProfile();
      setProfile(currentUser);
    };

    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {profile?.name}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <LoginButton
        onLogoutFinished={() => {
          handleLogout();
        }}
      />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
