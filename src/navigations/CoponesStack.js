
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { COLORS } from '../constants';
import Discount_coupons from '../screens/voluntary/Discount_coupons';
import Offers from '../screens/Coponat/Offers';
import Coupon_code from '../screens/voluntary/Coupon_code';
import Checkoffers from '../screens/Coponat/Checkoffers';

const Stack = createStackNavigator();

function CoponesStack() {
    return (

        <>
            <StatusBar backgroundColor={COLORS.white} />
            <Stack.Navigator initialRouteName="Discount_coupons">
                <Stack.Screen
                    name="Discount_coupons"
                    component={Discount_coupons}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Offers"
                    component={Offers}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Checkoffers"
                    component={Checkoffers}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Coupon_code"
                    component={Coupon_code}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </>

    );
}

export default CoponesStack;