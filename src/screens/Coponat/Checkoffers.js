
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import { COLORS, FONT, Sizes, hp, wp, } from '../../constants/themes';
import { Copones } from '../../Utils/DummyData';
import { styles } from './Style_Checkoffers';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';
import PlusSvg from "../../assets/Icons/plus.svg";
import MinusSvg from "../../assets/Icons/minus.svg";
import Large_button from '../../components/Large_button';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Checkoffers = () => {

    const navigation = useNavigation();
    const w = Dimensions.get("screen").width
    const route = useRoute();

    const filteredData = route.params?.data || [];

    const [data, setdata] = useState(filteredData)

    const increment = (index) => {
        const updatedData = [...data];
        updatedData[index].quantity += 1;
        setdata(updatedData);
    };

    const decrement = (index) => {
        const updatedData = [...data];
        if (updatedData[index].quantity > 0) {
            updatedData[index].quantity -= 1;
            setdata(updatedData);
        }
    };

    function removeItemFromCart(id) {
        setdata(prevData => {
            const updatedCart = prevData.filter(item => item.id !== id);
            return updatedCart;
        });
    }



    const handleNextPage = () => {
        const dataTOSHOW = data.filter(item => item.quantity > 0);
        navigation.navigate("Discount_coupons", { data: dataTOSHOW });
    };

    React.useEffect(() => {
        const filteredData = route.params?.data || [];
        setdata(filteredData);
    }, [route.params?.data]);


    return (
        <>





            <SafeAreaView style={styles.Basic_container}>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: RFPercentage(2),
                    marginTop: RFPercentage(4)
                }}>
                    <Back_arrow
                        onPress={() => navigation.navigate("Offers")}
                    />
                    <View>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.black,
                            fontSize: 25,
                            textAlign: "center",
                            justifyContent: "center",
                            width: w * 0.85,
                        }}>سلة الكوبونات</Text>
                    </View>
                </View>


                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <>
                            <View key={index} style={{ alignItems: "center" }}>
                                <View style={[styles.shadowProp, {
                                    backgroundColor: COLORS.white,
                                    height: hp(16),
                                    width: w * 0.9,
                                    alignSelf: "center",
                                    borderRadius: RFPercentage(2),
                                    margin: 10,
                                    // padding: hp(3),
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-around"
                                }]}>
                                    <Image
                                        source={item.image}
                                        style={{
                                            backgroundColor: "#fff",
                                            width: hp(12),
                                            height: hp(12),
                                        }}
                                    />

                                    <View style={{
                                        width: wp(60),
                                        maxWidth: wp(60),
                                        justifyContent: "center",
                                    }}>
                                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                            <Text style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.black,
                                                fontSize: RFPercentage(2.5),
                                                padding: RFPercentage(1),
                                            }}>{item.name}</Text>
                                            <Text style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.green_mid,
                                                fontSize: RFPercentage(2.3),
                                                padding: RFPercentage(1)
                                            }}>نقطة {item.number_points}</Text>
                                        </View>


                                        <>
                                            <View
                                                style={{
                                                    height: RFPercentage(10),
                                                    maxWidth: Sizes.width * 0.4,
                                                    alignSelf: "flex-start",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "space-between"
                                                }}
                                            >
                                                <TouchableOpacity
                                                    style={styles.shadowProp}
                                                    onPress={() => increment(index)}
                                                >
                                                    <PlusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
                                                </TouchableOpacity>
                                                <Text
                                                    style={{
                                                        color: COLORS.black,
                                                        fontFamily: FONT.font_Almarai_Bold,
                                                        fontSize: RFPercentage(2.5),
                                                        maxWidth: Sizes.width * 0.2
                                                    }}
                                                    numberOfLines={1}
                                                >
                                                    {item.quantity}
                                                </Text>
                                                <TouchableOpacity
                                                    style={styles.shadowProp}
                                                    onPress={() => decrement(index)}
                                                    disabled={item.quantity == 0 ? true : false}
                                                >
                                                    <MinusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    onPress={() => removeItemFromCart(item.id)}
                                                    style={{ flexDirection: "row", marginLeft: RFPercentage(4) }}>
                                                    <Icon
                                                        name="trash-alt"
                                                        size={hp(2)} style={{ color: COLORS.red_logout, margin: 4 }} />
                                                    <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.red_logout, fontSize: RFPercentage(2.2) }}>الغاء </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </>

                                    </View>
                                </View>



                            </View>

                        </>
                    )}
                />


                <View style={{ padding: RFPercentage(1), backgroundColor: COLORS.white }}>
                    <Large_button button_name="تأكيد" Confirm_press={handleNextPage} />
                </View>


            </SafeAreaView>



        </>
    )


}

export default Checkoffers;