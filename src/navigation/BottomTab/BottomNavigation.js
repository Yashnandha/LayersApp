import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/home/homeScreen'
import screenName from '../../utils/screenName'
import DrawerNavigation from '../Drawer/DrawerNavigation'

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name={screenName.DrawerStack} component={DrawerNavigation} />
            <Tab.Screen name={screenName.Search} component={HomeScreen} />
            <Tab.Screen name={screenName.Notification} component={HomeScreen} />
            <Tab.Screen name={screenName.Profile} component={HomeScreen} />
        </Tab.Navigator>

    )
}

export default TabNavigation

