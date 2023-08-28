import * as React from 'react';
import { Button, View, Text, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS, FONT } from '../../../constants';
import CustomDrawerContent from './CustomDrawerContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Requests_search from './Requests_search';
import Suggests from '../../Profile/Suggests';
import { RFPercentage } from 'react-native-responsive-fontsize';
import HomeDelPage from './HomeDelPage';


const Drawer = createDrawerNavigator();

const Drawer_delivery = () => {
  const h = Dimensions.get("screen").height
  const w = Dimensions.get("screen").width
  // const Stack = createStackNavigator();

  return (
    // <NavigationContainer >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: COLORS.green_mid,
          drawerActiveTintColor: COLORS.white,
          drawerInactiveTintColor: COLORS.black,
         drawerLabelStyle :{
          fontFamily: FONT.font_Almarai_Bold,
          fontSize: RFPercentage(2.5),
         },
          drawerStyle: {
            backgroundColor: COLORS.white,
            fontFamily: FONT.font_Almarai_Bold,
            fontSize: 30,
          
            // padding:RFPercentage(3), 
            width: w * 0.85,
          },

        }}
        drawerContent={(props) => <CustomDrawerContent {...props}

        />}

        initialRouteName="البحث">
 
        <Drawer.Screen 
        name="الصفحة الرئيسية" component={Requests_search}

          options={{
            
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        /> 
                <Drawer.Screen name="الملف الشخصي" component={Requests_search}


          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="user-alt" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen name="أرشيف الطلبات " component={HomeDelPage}

          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="shopping-bag" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen name="الأعدات والخصوصية" component={Requests_search}

          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="exclamation-circle" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen name="الأقتراحات والشكاوي" component={Suggests}

          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="question-circle" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
      // </NavigationContainer>
  );
}
export default Drawer_delivery;