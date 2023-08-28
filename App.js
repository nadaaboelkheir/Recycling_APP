import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message"
import { createStackNavigator } from '@react-navigation/stack';
// import { Provider } from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';
// import store from './src/Redux/Store';
// import { MainNavigation } from './src/navigations/MainNavigator';
import CanceledOrders from './src/screens/Delivery/HomeDelivery/CanceledOrders';
const App = () => {

  const [isConnected, setIsConnected] = useState(true);
  const Stack = createStackNavigator();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [])

  useEffect(() => {
    if (!isConnected) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: "برجاء التاكد من الاتصال بالانترنت",
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 100,

      });
    }
  }, [isConnected]);

  return (
    <>
<CanceledOrders/>
       {/* <Provider store={store}>  */}
           {/* <NavigationContainer>  */}
{/* <All_orders/> */}
{/* <Profile_data_page/> */}
{/* <Select_user/> */}
{/* <National_id_picker/> */}
          {/* <Stack.Navigator  screenOptions={{
          headerShown: false,}}>
        <Stack.Screen

      {/* //   name="Drawer_delivery" component={Drawer_delivery} />
      //   <Stack.Screen name="DeliveryStack" component={DeliveryStack} />
      // </Stack.Navigator> */}
    {/* <DeliveryStack/> */}
{/* <Requests_search/> */}
    {/* <Drawer_delivery/> */}
      {/* </NavigationContainer>   */}

       {/* </Provider>  */}
{/* <Address_page/> */}
      {/* // <Toast />  */}
      {/* <Requests_search/> */}
{/* <National_id_picker/> */}
{/* <Car_id_picture/> */}
{/* <CanceledOrders/> */}
       {/* <Drawer_delivery/> */}
      {/* <Provider store={store}> */}
        {/* <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
        <Toast />
      </Provider> */}


    </>
  );
};

export default App;
