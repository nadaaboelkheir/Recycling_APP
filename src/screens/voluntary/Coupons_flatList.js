
import React from 'react';
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../../constants/themes';
import EditSvg from "../../assets/Icons/edit.svg"
import { styles } from '../Home/Style_Type_oil';


const Coupons_flatList = ({ data }) => {

    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width



    return (
        <>

            <FlatList

                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={1}
                renderItem={({ item }) =>


                    <View style={[styles.shadowProp,
                    {
                        maxWidth : RFPercentage(90),
                        backgroundColor: COLORS.white,
                        alignSelf: "center",
                        borderRadius: 10,
                        margin: 10,
                        padding: hp(2),
                         width: w * 0.92,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }]}>
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "#00d",
                            padding: RFPercentage(1)
                        }}>
                            <Image source={item.company_logo}
                                style={{
                                    width: RFPercentage(10),
                                    height: RFPercentage(10),
                                }}
                                resizeMode="center"
                            />
                        </View>

                        <View style={{
                            height: RFPercentage(12),
                            justifyContent: "space-between",
                            margin: RFPercentage(1),
                            marginLeft: RFPercentage(2)
                        }}>
                            <Text numberOfLines={1}
                                style={{
                                    fontSize: RFPercentage(2.5),
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.black,
                                }}
                            >ماكدونلز خصم 25% </Text>
                            <Text numberOfLines={1}
                                style={{
                                    fontSize: RFPercentage(2.5),
                                    fontFamily: FONT.font_Almarai_Regular,
                                    color: COLORS.gray_white,
                                    alignSelf: "flex-start"
                                }}
                            >نقطة 100</Text>

                        </View>
                        <View style={{
                            justifyContent: "space-between",
                            height: RFPercentage(12),

                        }}>
                          
                          <View>
                                <Text style={{
                                    color: item.isUsed ? COLORS.gray_white : COLORS.green_mid,
                                    fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(2.5),
                                }} numberOfLines={1}>{item.isUsed ? "مستخدم" : "لم يستخدم"}</Text>


                            </View>

                        </View>
                    </View>



                } />


        </>
    );
};

export default Coupons_flatList;
