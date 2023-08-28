
import React, {  useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../constants';
import ShareTheGoodPage from '../screens/voluntary/ShareTheGoodPage';
import FoundationPage from '../screens/voluntary/FoundationPage';
import Donate from '../screens/voluntary/Donate';
import Voluntary_Archive from '../screens/voluntary/Voluntary_Archive';
import { useDispatch, useSelector } from 'react-redux';
import { getcharities } from '../Redux/Reducers/CharitiesSlice';

const Stack = createStackNavigator();

function VoluntaryStack() {
    const dispatch = useDispatch()





    return (


        <>

            <Stack.Navigator initialRouteName="ShareTheGoodPage">
                <Stack.Screen
                    name="FoundationPage"
                    component={FoundationPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Donate"
                    component={Donate}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Voluntary_Archive"
                    component={Voluntary_Archive}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>


        </>


    );
}

export default VoluntaryStack;