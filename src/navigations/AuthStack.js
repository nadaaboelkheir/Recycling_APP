
import React from 'react';

import Tologin from '../screens/Auth/Tologin';
import Signup_page1 from '../screens/Auth/Signup_page1';
import Forgetpassword_EnterEmail from '../screens/Auth/Forgetpassword1';

import Verification_page from '../screens/Auth/Verification_page';

import Change_password1 from '../screens/Auth/Change_password1';

import Password_reset_page from '../screens/Auth/Password _reset_page';
import Confirm_page_forget_password from '../screens/Auth/Confirm_page_forget_password';


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import { COLORS } from '../constants';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        // <NavigationContainer> 

        <>
            <StatusBar backgroundColor={COLORS.white}/>
            {/* <NavigationContainer> */}
                <Stack.Navigator initialRouteName="Tologin">
                    <Stack.Screen
                        name="Tologin"
                        component={Tologin}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Signup_page1"
                        component={Signup_page1}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Forgetpassword_EnterEmail"
                        component={Forgetpassword_EnterEmail}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Verification_page"
                        component={Verification_page}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Change_password1"
                        component={Change_password1}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Password_reset_page"
                        component={Password_reset_page}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Confirm_page_forget_password"
                        component={Confirm_page_forget_password}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            {/* </NavigationContainer> */}
        </>

        // </NavigationContainer>
    );
}

export default AuthStack;