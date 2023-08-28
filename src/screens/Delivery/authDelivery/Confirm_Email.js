import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, lotties, } from '../../../constants';
import HeaderDeliveryAuth from '../../../components/HeaderDeliveryAuth';
import { Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Lottie from 'lottie-react-native';
import { FONT, hp } from '../../../constants/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';




const Confirm_Email = () => {

    const w = Dimensions.get("screen").width



    return (
        <>





            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView>
                    <HeaderDeliveryAuth namePage="انشاء حساب" back={true} help={false} />

                    <View style={{
                        // marginTop: RFPercentage(3),
                        justifyContent: "center", alignItems: "center"
                    }}>



                        <Lottie style={{ width: hp(30), marginVertical: RFPercentage(4), height: hp(30), alignSelf: "center", justifyContent: "center" }}
                            source={lotties.scan} autoPlay loop />

                        <View style={{ padding: RFPercentage(2) }}>
                            <Text style={{
                                fontFamily: FONT.font_Almarai_Regular,
                                fontSize: RFPercentage(3), lineHeight: 35
                                , textAlign: "center", color: COLORS.black
                            }}>تم ارسال طلب تسجيل الحساب بنجاح سوف ارسل بك ايميل تاكيد علي الايميل الخاك بك بعد كراجعة البيانات <Text style={{ color: COLORS.green_mid, marginLeft: RFPercentage(2) }}>amirTarek@gmail.com</Text> </Text>

                        </View>

                    </View>



                    <View style={{
                        marginTop: RFPercentage(8),
                        alignSelf :"flex-start",
                        marginLeft : RFPercentage(4)
                    }}>
                        <TouchableOpacity
                        onPress={()=>{}}
                        style ={{backgroundColor :COLORS.green_mid 
                        ,paddingHorizontal :RFPercentage(5) , borderRadius: RFPercentage(4) ,
                             padding : RFPercentage(3)}}>
                            <Text>back</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </SafeAreaView>



        </>
    )


}

export default Confirm_Email;