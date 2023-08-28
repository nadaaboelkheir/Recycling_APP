
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StatusBar, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import { COLORS, FONT, hp, Sizes } from '../../constants/themes';
import PlusCricleSvg from "../../assets/Icons/plus-circle.svg"
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { wp } from "../../constants/themes";


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Discount_coupons = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params?.data || "el";

    const [all_copones, setall_copones] = useState(data)

    const handleNextPage = () => {
        const COPONE = all_copones.filter(item => item.quantity > 0);
        navigation.navigate("Coupon_code", { data: COPONE });
    };

    React.useEffect(() => {
        const all_copones = route.params?.data || [];
        setall_copones(all_copones);
    }, [route.params?.data]);

    return (
        <>

            <SafeAreaView style={styles.Basic_container}>


                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: RFPercentage(2)
                }}>
                    {/* navigation.replace("ServicesOil") */}
                    <Back_arrow onPress={() => { }} />
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={{

                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.black, fontSize: RFPercentage(3.5)
                        }}>كوبونات الخصم</Text>
                    </View>
                </View>

                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={all_copones}
                    numColumns={1}
                    renderItem={({ item }) =>


                        <TouchableOpacity 
                        onPress={handleNextPage}
                        style={[styles.shadowProp,
                        {
                            backgroundColor: COLORS.white,
                            height: hp(16),
                            maxWidth : w *0.9,
                            width: w * 0.9,
                            alignSelf: "center",
                            borderRadius: RFPercentage(2),
                            margin: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around"
                        }]}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Image source={item.image}
                                    style={{
                                        width: RFPercentage(12),
                                        height: RFPercentage(12),
                                    }}
                                />
                            </View>

                            <View style={{

                                height: RFPercentage(12),
                                justifyContent: "space-between",
                            }}>
                                <Text numberOfLines={1}
                                    style={{
                                        fontFamily: FONT.font_Almarai_Bold,
                                        color: COLORS.black,
                                        fontSize: RFPercentage(2.4),
                                        maxWidth : w*0.5
                                    }}
                                >{item.name}</Text>
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: RFPercentage(2.5),
                                        fontFamily: FONT.font_Almarai_Regular,
                                        color: COLORS.gray_white,
                                        alignSelf: "flex-start"
                                    }}
                                >نقطة {item.number_points}</Text>

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
                        </TouchableOpacity>



                    } />




                <View style={{
                    alignSelf: "flex-start",
                    alignItems: "center",
                    margin: hp(1), 
                    padding: RFPercentage(2),
                }
                }>
                    <TouchableOpacity onPress={() => navigation.navigate("Offers")} >

                        <PlusCricleSvg width={RFPercentage(8)}
                            height={RFPercentage(8)}
                        />
                    </TouchableOpacity>

                    <Text style={{
                        fontFamily: FONT.font_Almarai_Bold,
                        fontSize: RFPercentage(2.5),
                        color: COLORS.green_mid
                    }}>

                        إنشاء كوبون</Text>
                </View>


            </SafeAreaView>






        </>
    );
};


export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    view_arrow_place: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "flex-start",
        padding: RFPercentage(2),
        // marginTop: RFPercentage(2),
        // width: Sizes.width * 0.9
    },
    white_container: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(4),
        borderTopStartRadius: RFPercentage(4)


    }, shadowProp: {
        shadowColor: COLORS.black,
        elevation: 4,
        shadowOpacity: .5,

    }, style_image: {
        width: wp(55),
        height: hp(23),
        alignSelf: "center"
    },
    error: {
        color: 'red',
        fontSize: RFValue(18, h),
        alignSelf: "center"

    }
    , text_title_name: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: RFPercentage(3.5),
        textAlign: "center",
        justifyContent: "center",
        width: w * 0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, touchableopacity_style: {
        backgroundColor: COLORS.white,
        // , padding: RFPercentage(3.1),
        flexDirection: "row",
        // margin: RFPercentage(2),
        borderWidth: 0,
        borderRadius: RFPercentage(1.5)

    },
    button: {
        width: '80%',
        height: RFPercentage(8),
        backgroundColor: COLORS.gray_light,
        borderRadius: RFPercentage(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: RFPercentage(2),
    },
    selectedButton: {
        backgroundColor: COLORS.white,

    },
    buttonText: {
        fontSize: RFPercentage(2.3),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.black,
    },
    disabledSubmitButton: {
        backgroundColor: COLORS.gray_light,
    },
    submitButtonText: {
        fontSize: RFPercentage(2.5),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.white,
    },
    view_outter: {
        backgroundColor: '#ddd',
        width: 25,
        height: 25,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_inner: {
        backgroundColor: COLORS.green_mid,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 15,
        height: 15,
        borderRadius: 8,
    },
    Container_TouchableOpacity: {
        borderRadius: RFPercentage(1),
        alignItems: "center",
        justifyContent: "center",
        width: Sizes.width * 0.4,
        height: Sizes.height * 0.07,
        backgroundColor: COLORS.green_mid,
    },
    Text_style: {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.white,
        fontSize: RFPercentage(3.5),
        alignItems: "center",


    },
    container: {
        flex: 1,
        margin: RFPercentage(2),
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    circleCheckContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    circleOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.green_mid,
    },
})




export default Discount_coupons;
