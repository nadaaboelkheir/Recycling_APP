
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp, Sizes } from '../../constants/themes';
import { styles } from './Style_Donate';
import EditSvg from "../../assets/Icons/edit.svg"
import Coupons_flatList from "./Coupons_flatList"
import PlusCricleSvg from "../../assets/Icons/plus.svg"
import { Coupons_flatListData } from '../../Utils/DummyData';
import { useNavigation } from '@react-navigation/native';


const Coupon_code = () => {
    const navigation = useNavigation();

    const data = route.params?.data || "el";

    const [all_copones, setall_copones] = useState(data)

    return (
        <>

            <SafeAreaView style={styles.Basic_container}>

                <StatusBar hidden={true} />
                <View style={{ backgroundColor: COLORS.white, padding: RFPercentage(2) }}>
                    <View style={{
                        width: Sizes.width * .6,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <Back_arrow onPress={() => navigation.goBack()} />
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.black, fontSize: RFPercentage(3)
                        }}>كوبونات الخصم</Text>

                    </View>


                </View>

                <View style={[styles.shadowProp,
                {
                    backgroundColor: COLORS.white, alignSelf: "center",
                    borderRadius: 10, marginVertical: RFPercentage(5), padding: hp(2), width: w * 0.92,
                    flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                }]}>

                    <View style={{
                        width: RFPercentage(8),
                        height: RFPercentage(4),
                        justifyContent: "center",
                        alignItems: "center"
                        //   borderWidth:1
                        , right: RFPercentage(1)

                    }}>
                        <Image source={require("../../assets/Images/mac.png")}
                            style={{
                                // marginTop:RFPercentage(5),
                                width: RFPercentage(10),
                                height: RFPercentage(10),
                                alignSelf: "center"
                            }}
                            resizeMode="center"
                        />
                    </View>

                    {/* text_plus_min_button */}


                    <View style={{

                        height: RFPercentage(12),
                        justifyContent: "space-between",

                    }}>
                        <Text numberOfLines={1}
                            style={{
                                fontSize: RFPercentage(3),
                                fontFamily: FONT.font_Almarai_Bold,
                                color: COLORS.black,
                                // width : Sizes.width*0.45,
                                // alignSelf:"flex-start"
                            }}
                        >ماكدونلز خصم 25%</Text>
                        <Text numberOfLines={1}
                            style={{
                                fontSize: RFPercentage(3),
                                fontFamily: FONT.font_Almarai_Regular,
                                color: COLORS.gray_white,
                                // top : hp(1),

                                // width : Sizes.width*0.45,
                                alignSelf: "flex-start"
                            }}
                        >نقطة 100</Text>

                    </View>
                    <View style={{
                        justifyContent: "space-between",
                        height: RFPercentage(12),
                        // padding :hp(0.5),
                        // alignItems:"flex-start",
                        // right : RFPercentage(-1.5),
                        // borderWidth :1
                    }}>
                        <View style={{
                            // flexDirection:"row"
                        }}>
                            <Text style={{
                                color: COLORS.green_mid,
                                fontFamily: FONT.font_Almarai_Regular,
                                fontSize: RFPercentage(3),
                            }} numberOfLines={1}>لم يستخدم</Text>


                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: RFPercentage(10)
                            ,

                            //  top :RFPercentage(-2)
                            //  padding :hp(1)}
                        }}>
                            <TouchableOpacity>
                                <EditSvg style={{ right: RFPercentage(0) }}
                                    width={RFPercentage(3)}
                                    height={RFPercentage(4)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    color: COLORS.red_logout,
                                    fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(3)
                                    ,

                                    right: RFPercentage(0)
                                }} numberOfLines={1}>تعديل </Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
                <Text style={{
                    alignSelf: "center",
                    color: COLORS.green_mid,
                    fontFamily: FONT.font_Almarai_Bold,
                    fontSize: RFPercentage(3),
                }} numberOfLines={1}>امسح الكود للأستخدام</Text>

                <Image source={require("../../assets/Images/qrcode.png")}
                    resizeMode="cover"
                    style={{
                        marginTop: RFPercentage(5),
                        width: RFPercentage(35),
                        height: RFPercentage(35),
                        alignSelf: "center"
                    }}

                />
            </SafeAreaView>






        </>
    );
};

export default Coupon_code;
