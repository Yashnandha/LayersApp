import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screenName from '../utils/screenName'
import LoginScreen from '../screens/login/LoginScreen'
import HomeScreen from '../screens/home/homeScreen'
import TabNavigation from './BottomTab/BottomNavigation'

const Stack = createNativeStackNavigator()
const Route = (props) => {
    const linking = {
        prefixes: ['http://localhost:8080/', 'mychat://'],
        config: {
            screens: {
                Login: '',
                Home: '/Home',
                Settings: ':id/blog',
            }
        },
    };
    return (
        <NavigationContainer
            linking={linking}
            fallback={<Text>Loading</Text>}
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screenName.Login} component={LoginScreen} />
                <Stack.Screen name={screenName.BottomStack} component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Route
