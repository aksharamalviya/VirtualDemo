import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screen/home'
import AddUser from '../screen/addUser'
import EditUser from '../screen/editUser'

const Stack = createStackNavigator()

const Navigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='AddUser' component={AddUser} />
            <Stack.Screen name='EditUser' component={EditUser} />


        </Stack.Navigator>
    )
}

export default Navigator

