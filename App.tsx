import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-950 flex-1 items-center justify-center'>
      <Text className='text-zinc-50 text-5xl'>Este é um Teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}


