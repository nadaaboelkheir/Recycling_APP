
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import {
    Add_address,
    Choose_language_page,
    Personal_Profile_page,
    Profile_data_page,
    Profile_list,

} from '../screens/Profile/index_profile'

import Address_page from '../screens/Profile/Address_page';

import {
    Change_password1,
    Confirm_page_forget_password,
    Tologin,
} from '../screens/Auth/index_Auth'

import { StatusBar } from 'react-native';
import { COLORS } from '../constants';
import Suggests from '../screens/Profile/Suggests';
import Terms from '../screens/Profile/Terms';

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        

        <>
            <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

            <Stack.Navigator initialRouteName="Profile_list">
                <Stack.Screen
                    name="Profile_list"
                    component={Profile_list}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Personal_Profile_page"
                    component={Personal_Profile_page}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile_data_page"
                    component={Profile_data_page}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Add_address"
                    component={Add_address}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Address_page"
                    component={Address_page}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Choose_language_page"
                    component={Choose_language_page}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Change_password1"
                    component={Change_password1}
                    options={{ headerShown: false }}
                />

                 <Stack.Screen
                    name="Confirm_page_forget_password"
                    component={Confirm_page_forget_password}
                    options={{ headerShown: false }}
                />
                  <Stack.Screen
                    name="Suggests"
                    component={Suggests}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Terms"
                    component={Terms}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Tologin"
                    component={Tologin}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>

        </>

        // </NavigationContainer>
    );
}

export default ProfileStack;