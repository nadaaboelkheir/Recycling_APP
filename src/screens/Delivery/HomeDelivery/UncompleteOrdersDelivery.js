

import React, { useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT } from '../../../constants';
import { styles } from './StyleUncom';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../../constants/themes';
import { Deliveryorders, } from '../../../Utils/DummyData';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/ar';
import Calender from "../../../assets/Icons/Calender.svg"

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


const DatePickerButton = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
      setSelectedDate(date);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const convertToArabicDate = (date) => {
    moment.locale('ar');
    return moment(date).format('D MMMM YYYY');
  };

  const arabicDate = convertToArabicDate(selectedDate);

  return (
    <View
      style={{
        padding: RFPercentage(1),
        flexDirection: 'row',
        width: w * 0.9,
        justifyContent: 'space-between',
      }}
    >
        {/* Calender.svg */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button} onPress={showDatePickerModal}>
          <Calender width = {hp(4)} height ={hp(4)} fill = "#000"/>
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: RFPercentage(2),
            fontFamily: FONT.font_Almarai_Bold,
            fontSize: RFPercentage(2.5),
            color :COLORS.black
          }}
        >
          التاريخ
        </Text>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          onChange={handleDateChange}
        />
      )}
      <Text style={{ fontSize: RFPercentage(2.5) ,fontFamily : FONT.font_Almarai_Bold
        , color: COLORS.green_mid }}>
        {arabicDate}
      </Text>
    </View>
  );
};


function UncompleteOrdersDelivery() {
    const [Deliveryorder] = useState(Deliveryorders)
    return (

        <SafeAreaView style={{ flex: 1,
         backgroundColor: COLORS.white 
         }}>

            <ScrollView>
                <View style={{ alignItems: "center", backgroundColor: COLORS.white }}>
                    <View style={{}}>
                        <DatePickerButton />
                    </View>

                    <LinearGradient
                        colors={['#AED270CE', '#F44336']}
                        style={{ flex: 1 }}
                    >
                    </LinearGradient>
                    {data.map((item, index) => (

                        <LinearGradient key={item.orderData.id}
                            colors={['#AED270CE', '#7DBB69']}
                            style={[styles.shadowProp, {
                                flexDirection: "column",
                                borderRadius: 10,
                                paddingLeft: hp(1),
                                justifyContent: "space-around",
                                marginVertical: 10,
                                width: hp(46)
                            }]}>
                            <View
                                style={{
                                    paddingVertical: RFPercentage(1),
                                    borderBottomLeftRadius: 2,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 2,
                                    borderTopRightRadius: 10,
                                    width: hp(45),
                                    flexDirection: "column",
                                    backgroundColor: COLORS.white
                                }}>
                                <View style={{
                                    flexDirection: "row", justifyContent: "space-around"
                                    , paddingHorizontal: RFPercentage(2), padding: RFPercentage(1),
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        flex: 1
                                    }}>
                                        <Image source={item.orderData.image} resizeMode='center'
                                            style={{
                                                borderRadius: RFPercentage(4),
                                                width: hp(7),
                                                height: hp(7),
                                                alignSelf: "center"
                                            }} />

                                        <Text style={{
                                            fontSize: RFPercentage(2.5),
                                            color: COLORS.black, paddingHorizontal: RFPercentage(1.5)
                                            , fontFamily: FONT.font_Almarai_Regular
                                        }}> {item.orderData.name}</Text>
                                    </View>
                                    <Text style={{
                                        color: COLORS.gray_dark,
                                        textAlign: "center", justifyContent: "center"
                                        , fontFamily: FONT.font_Almarai_Regular
                                    }}>({item.orderData.order_serial})</Text>


                                </View>

                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>     كمية الزيت : <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.amount_oil}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>     رقم الهاتف: <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.phone_num}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>     العنوان: <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.address}</Text></Text>

                                <View style={{ flexDirection: "row", justifyContent: "space-around", padding: RFPercentage(1.5) }}>
                                    <TouchableOpacity style={{ width: hp(13), backgroundColor: COLORS.green_mid, borderRadius: RFPercentage(1) }}>
                                        <Text style={{
                                            color: COLORS.white, fontFamily: FONT.font_Almarai_Regular, padding: RFPercentage(1),
                                            textAlign: "center", justifyContent: "center", fontSize: RFPercentage(1.8)
                                        }}>تأكيد الاستلام</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: hp(13), backgroundColor: COLORS.red_logout, borderRadius: RFPercentage(1) }}>
                                        <Text style={{
                                            color: COLORS.white, fontFamily: FONT.font_Almarai_Regular, textAlign: "center",
                                            justifyContent: "center", padding: RFPercentage(1), fontSize: RFPercentage(1.8)
                                        }}>الغاء</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </LinearGradient>


                    ))}





                </View>
            </ScrollView>

        </SafeAreaView>
    );
}



export default UncompleteOrdersDelivery;
