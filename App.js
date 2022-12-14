import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Route from './src/navigation/Navigation'
import LoginScreen from './src/screens/login/LoginScreen'

const App = (props) => {
  return (
    <SafeAreaProvider>
      <Route />
    </SafeAreaProvider>
  )
}

export default App
