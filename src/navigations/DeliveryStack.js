
import React from 'react';
import To_login_Delivery from '../screens/Delivery/authDelivery/To_login_Delivery';
import Requests_search from '../screens/Delivery/HomeDelivery/Requests_search';
import Car_id_picture from '../screens/Delivery/authDelivery/Car_id_Picture';
import National_id_picker from '../screens/Delivery/authDelivery/National_id_picker';
import { createStackNavigator } from "@react-navigation/stack";
import Suggestions_and_complaints_record from '../screens/Delivery/authDelivery/Suggestions_and_complaints_record';
import Complaints_and_suggestions from '../screens/Delivery/authDelivery/Complaints_and_suggestions';
import Confirm_Email from '../screens/Delivery/authDelivery/Confirm_Email';
import Email_Page from '../screens/Delivery/authDelivery/Email_Page';
import Forget_delivery_password from '../screens/Delivery/authDelivery/Forget_delivey_password';
import Verifecation_delivery from '../screens/Delivery/authDelivery/Verification_delivery';
import HomeDelPage from '../screens/Delivery/HomeDelivery/HomeDelPage';
import { NavigationContainer } from '@react-navigation/native';
import Signup_Delivery from '../screens/Delivery/authDelivery/Signup_Delivery';
import Drawer_delivery from '../screens/Delivery/HomeDelivery/Drawer_delivery';
import { StatusBar } from 'react-native';

import { COLORS } from '../constants';

const Stack = createStackNavigator();

function DeliveryStack() {
    return (
        // <NavigationContainer> 

        <>
            <StatusBar backgroundColor={COLORS.white} />
            {/* <NavigationContainer> */}
            <Stack.Navigator initialRouteName="To_login_Delivery">
                <Stack.Screen
                    name="To_login_Delivery"
                    component={To_login_Delivery}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup_Delivery"
                    component={Signup_Delivery}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Requests_search"
                    component={Requests_search}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Complaints_and_suggestions"
                    component={Complaints_and_suggestions}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="National_id_picker"
                    component={National_id_picker}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Car_id_picture"
                    component={Car_id_picture}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Suggestions_and_complaints_record"
                    component={Suggestions_and_complaints_record}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Confirm_email"
                    component={Confirm_Email}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Forget_delivery_password"
                    component={Forget_delivery_password}
                    options={{ headerShown: false }}
                />
               
                <Stack.Screen
                    name="Verifecation_delivery"
                    component={Verifecation_delivery}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeDelPage"
                    component={HomeDelPage}
                    options={{ headerShown: false }}
                />
                  {/* <Stack.Screen
                    name="Drawer_delivery"
                    component={Drawer_delivery}
                    options={{ headerShown: false }}
                /> */}

            </Stack.Navigator>
            {/* </NavigationContainer> */}
        </>

        // </NavigationContainer>
    );
}

export default DeliveryStack;