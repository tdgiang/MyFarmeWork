import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, LoginScreen } from './screensName';

import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

function MyStack() {
    _settingOption = () => {
        return {
            title: "",
            headerStyle: {
                elevation: 0,
                height: 0,
                opacity: 0
            }

        }
    }


    return (
        <Stack.Navigator initialRouteName={LoginScreen}>
            <Stack.Screen name={HomeScreen} component={Home} options={_settingOption} />
            <Stack.Screen name={LoginScreen} component={Login} options={_settingOption} />

        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
