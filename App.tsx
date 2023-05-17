import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

export default function App() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-zinc-50 text-8xl">Te Amo</Text>
      <StatusBar style="auto" />
    </View>
  )
}
