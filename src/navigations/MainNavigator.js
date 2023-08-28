import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'react-native';
import AuthStack from "./AuthStack";
import VoluntaryStack from "./VoluntaryStack";
import AnimTab2 from "../screens/Bottomtabs/AnimTab2";
import All_orders from "../screens/Profile/All_orders";
import Intro_slider from "../screens/Splash/Start_slider";
import Reoil from "../screens/Splash/ReOil_page";
import ServicesOil from "../screens/Home/ServicesOil";
import MoneyStack from "./MoneyStack";
import { COLORS } from "../constants";
import ShareTheGoodPage from "../screens/voluntary/ShareTheGoodPage";
import FoundationPage from "../screens/voluntary/FoundationPage";
import Donate from "../screens/voluntary/Donate";
import Voluntary_Archive from "../screens/voluntary/Voluntary_Archive";
import Coupon_code from "../screens/voluntary/Coupon_code";
import Offers from "../screens/Coponat/Offers";
import Discount_coupons from "../screens/voluntary/Discount_coupons";
import Home_page from "../screens/Home/Home_page";
import Types_oil from "../screens/Home/Types_oil";
import Request_car from "../screens/Profile/Request_car";
import TimeTablePage from "../screens/Home/TimeTablePage";
import Money_transaction from "../screens/voluntary/Money_transaction";
import Archives from "../screens/cash_pages/Archives";
import Edit_money_transaction from "../screens/voluntary/Edit_money_transaction";
import Profile_list from "../screens/Profile/Profile_list";
import Personal_Profile_page from "../screens/Profile/Personal_Profile_page";
import Profile_data_page from "../screens/Profile/Profile_data_page";
import Add_address from "../screens/Profile/Add_address";
import Address_page from "../screens/Profile/Address_page";
import Choose_language_page from "../screens/Profile/Choose_language_page";
import Change_password1 from "../screens/Auth/Change_password1";
import Confirm_page_forget_password from "../screens/Auth/Confirm_page_forget_password";
import Suggests from "../screens/Profile/Suggests";
import Tologin from "../screens/Auth/Tologin";
import Checkoffers from "../screens/Coponat/Checkoffers";
import Products from "../screens/Profile/Products";
import ProductsCart from "../screens/Profile/ProductsCart";
import ConfirmationandChooseaddress from "../screens/Profile/ConfirmationandChooseaddress";
import ShowOrdersfromConfirm from "../screens/Profile/ShowOrdersfromConfirm";
import Terms from "../screens/Profile/Terms";



const RootStack = createStackNavigator();


const MainNavigation = () => {

    return (
        <>
            <StatusBar backgroundColor={COLORS.black} barStyle={'default'} />

            <RootStack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
            >
                <RootStack.Screen
                    name="Splash"
                    component={Reoil}
                    options={{ headerShown: false }}

                />
                <RootStack.Screen
                    name="Intro_slider"
                    component={Intro_slider}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Auth"
                    component={AuthStack}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Voluntary"
                    component={VoluntaryStack}
                    options={{ headerShown: false }}

                />
                <RootStack.Screen
                    name="Home_page"
                    component={Home_page}
                    options={{ headerShown: false }}
                />
                {/* Terms */}
                
                <RootStack.Screen
                    name="Types_oil"
                    component={Types_oil}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Request_car"
                    component={Request_car}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="ProductsCart"
                    component={ProductsCart}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="ConfirmationandChooseaddress"
                    component={ConfirmationandChooseaddress}
                    options={{ headerShown: false }}

                />
                <RootStack.Screen
                    name="TimeTablePage"
                    component={TimeTablePage}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="FoundationPage"
                    component={FoundationPage}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Donate"
                    component={Donate}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Discount_coupons"
                    component={Discount_coupons}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Offers"
                    component={Offers}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Checkoffers"
                    component={Checkoffers}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Coupon_code"
                    component={Coupon_code}
                    options={{ headerShown: false }}
                /><RootStack.Screen
                    name="Products"
                    component={Products}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Voluntary_Archive"
                    component={Voluntary_Archive}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="ShareTheGoodPage"
                    component={ShareTheGoodPage}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="All_orders"
                    component={All_orders}
                    options={{ headerShown: false }}

                />
                <RootStack.Screen
                    name="MoneyStack"
                    component={MoneyStack}
                    options={{ headerShown: false }}

                />
                <RootStack.Screen
                    name="ServicesOil"
                    component={ServicesOil}
                    options={{ headerShown: false }}

                />
                <RootStack.Screen
                    name="Home"
                    component={AnimTab2}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Money_transaction"
                    component={Money_transaction}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Archives"
                    component={Archives}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="ShowOrdersfromConfirm"
                    component={ShowOrdersfromConfirm}
                    options={{ headerShown: false }}
                />

                <RootStack.Screen
                    name="Edit_money_transaction"
                    component={Edit_money_transaction}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Profile_list"
                    component={Profile_list}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Personal_Profile_page"
                    component={Personal_Profile_page}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Profile_data_page"
                    component={Profile_data_page}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Add_address"
                    component={Add_address}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Address_page"
                    component={Address_page}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Choose_language_page"
                    component={Choose_language_page}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Change_password1"
                    component={Change_password1}
                    options={{ headerShown: false }}
                />

                <RootStack.Screen
                    name="Confirm_page_forget_password"
                    component={Confirm_page_forget_password}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Suggests"
                    component={Suggests}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Terms"
                    component={Terms}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Tologin"
                    component={Tologin}
                    options={{ headerShown: false }}
                />


            </RootStack.Navigator>
        </>
    );
};
export { MainNavigation }