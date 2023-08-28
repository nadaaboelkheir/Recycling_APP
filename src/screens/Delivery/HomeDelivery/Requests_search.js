import React, { useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TextInput ,TouchableOpacity,FlatList } from 'react-native';
import { COLORS, FONT, images } from '../../../constants';
import { styles } from './StyleUncom';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp ,wp } from '../../../constants/themes';
import { Deliveryorders, orders_Data } from '../../../Utils/DummyData';
// import LinearGradient from 'react-native-linear-gradient';
import Notification from "../../../assets/Icons/notification.svg"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Search from "../../../assets/Icons/search_icone.svg"
import UnCompletedFlatList from './HomeDeliveryComponent/UnCompletedFlatList';
import {useNavigation} from '@react-navigation/native';
const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

function Requests_search() {

    const [data, setdata] = useState(Deliveryorders);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
        setSearchQuery(text);
    };
    const navigation = useNavigation();

    const filteredData = data.filter(item => item.orderData.order_serial.includes(searchQuery) || item.orderData.name.includes(searchQuery) );
    
    // Deliveryorders
    // const [Deliveryorder] = useState(Deliveryorders);
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>

            {/* <ScrollView> */}
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    Width: w, padding: RFPercentage(2),
                    backgroundColor: COLORS.green_mid
                }}>
                    <TouchableOpacity
          onPress={ () =>{
            navigation.navigate("Drawer_delivery"
            // {screen :"Drawer_delivery"}
            )
            navigation.openDrawer();   }
          }
    >
                    <Image source={images.Real_user}
                        resizeMode='center'
                        style={{
                            borderRadius: RFPercentage(3),
                            width: hp(6),
                            height: hp(6),
                            alignSelf: "center"
                        }} />
        </TouchableOpacity>
                    <Text style={{
                        fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(3.5), color: COLORS.white
                    }}>RE-OIL</Text>



                    <Notification
                        width={RFPercentage(5.5)}
                        height={RFPercentage(5.5)} />

                </View>
                <View style={[{
                    borderWidth: 2,
                    borderColor: COLORS.green_mid,
                    borderRadius: 10,
                    marginBottom: 5,
                    width: w * 0.9, marginVertical: RFPercentage(2),
                    flexDirection: "row",
                    alignSelf: "center",
                    justifyContent: "space-between"
                }]}>
                    <TextInput
                        style={{
                            color: COLORS.text_color,
                            width: w * 0.75,
                            padding: hp(1.5),
                            fontSize: RFPercentage(2.5),
                            fontFamily: FONT.font_Almarai_Regular,
                        }}

                        onChangeText={handleSearch}
                        value={searchQuery}
                        placeholder="ابحث بالاسم أو رقم الطلب "
                        placeholderTextColor={COLORS.text_color} />
                    <View style={[styles.shadowProp, {
                        backgroundColor: COLORS.green_mid,
                        alignItems: "center", justifyContent: "center", borderRadius: 6
                    }]}>
                        <Search height={hp(4.8)} width={wp(14)} fill="#fff" />
                    </View>

                </View>
                <UnCompletedFlatList data={filteredData} />

            {/* </ScrollView> */}

        </SafeAreaView>
    );
}



export default Requests_search;
