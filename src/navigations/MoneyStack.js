
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { COLORS } from '../constants';
import Discount_coupons from '../screens/voluntary/Discount_coupons';
import Money_transaction from '../screens/voluntary/Money_transaction';
import Archives from '../screens/cash_pages/Archives';
import Edit_money_transaction from '../screens/voluntary/Edit_money_transaction';


const Stack = createStackNavigator();

function MoneyStack() {
    return (

        <>
            <StatusBar backgroundColor={COLORS.white}/>
                <Stack.Navigator initialRouteName="Money_transaction">
                  
                    <Stack.Screen
                        name="Money_transaction"
                        component={Money_transaction}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Archives"
                        component={Archives}
                        options={{ headerShown: false }}
                    />
                       <Stack.Screen
                        name="Edit_money_transaction"
                        component={Edit_money_transaction}
                        options={{ headerShown: false }}
                    />
               
                </Stack.Navigator>
        </>

    );
}

export default MoneyStack;