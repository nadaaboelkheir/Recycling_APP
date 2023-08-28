
import { Text, View } from 'react-native';
import Back_arrow from '../../../components/Back_arrow';
import { styles } from './StyleHomeDeliPage';
import { SafeAreaView } from 'react-native-safe-area-context';
import  React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import CompleteOrders from '../../Profile/CompleteOrders';
import CanceledOrders from './CanceledOrders';
import { COLORS, FONT } from '../../../constants';
import UncompleteOrdersDelivery from './UncompleteOrdersDelivery';
import CompleteOrdersDelivery from './CompleteOrdersDelivery';

const Stack = createMaterialTopTabNavigator();
// const [Deliveryorder] = useState(Deliveryorders);
function HomeDelPage() {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.Basic_container}>


        <View style={[styles.view_arrow_and_text_style]}>
          <Back_arrow onPress={() => {}} />

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[styles.text_Bold_style]}>طلباتي</Text>
          </View>

        </View>

      </SafeAreaView>

      <Stack.Navigator initialRouteName="تحت التنفيذ"
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: COLORS.green_mid },
          tabBarStyle: { backgroundColor: COLORS.white   },


          tabBarLabelStyle: {     
            fontSize: RFPercentage(2.48),
            fontFamily: FONT.font_Almarai_Bold,
          }

        }} options={{ headerShown: false  }} >
        <Stack.Screen name="تحت التنفيذ" component={UncompleteOrdersDelivery} />
        <Stack.Screen name="مكتمله" component={CompleteOrdersDelivery} />
        <Stack.Screen name="ملغيه" component={CanceledOrders} />

      </Stack.Navigator>




    </>

  );
}



export default HomeDelPage;