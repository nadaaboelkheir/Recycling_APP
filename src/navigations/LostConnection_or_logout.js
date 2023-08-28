import "react-native-gesture-handler";

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";


import {
    login_page,

} from '../screens/Auth'

const Stack = createStackNavigator();

const LostConnection_or_logout = () => {
    return (
        <Stack.Navigator initialRouteName="login_page">
            {/* <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="login_page"
                component={login_page}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export { LostConnection_or_logout }