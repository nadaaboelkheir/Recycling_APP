import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { styles } from './StyleCompleteOrder';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp, wp } from '../../constants/themes';
import Back_arrow from '../../components/Back_arrow';

const h = Dimensions.get("screen").height;
const w = Dimensions.get("screen").width;

function ShowOrdersfromConfirm({ route }) {
    const navigation = useNavigation();
    const { data } = route?.params || {};
    const [productsOrders, setProductsOrders] = useState([]);

    useEffect(() => {
        setProductsOrders(data);
    }, [data]);

    function calculateTotalAmount(productsOrders) {
        let totalAmount = 0;

        if (productsOrders) {
            productsOrders.forEach((order) => {
                totalAmount += order.orders_table.amount;
            });
        }

        return totalAmount;
    }

    const totalAmount = calculateTotalAmount(productsOrders);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: RFPercentage(2),
                paddingTop: RFPercentage(2)
            }}>
                <Back_arrow onPress={() => navigation.replace("Home")} />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{
                        marginRight: RFPercentage(3),
                        alignSelf: "center",
                        fontSize: RFPercentage(3.5),
                        textAlign: "center",
                        color: COLORS.black,
                        fontFamily: FONT.font_Almarai_ExtraBold,

                    }}>قائمة طلبات المنتجات</Text>
                </View>
            </View>
            {data ? (<View style={{ alignItems: "center", backgroundColor: COLORS.white }}>
                {productsOrders.length > 0 ? (

                    <FlatList
                        data={productsOrders}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.shadowProp,
                                    {
                                        backgroundColor: COLORS.white,
                                        borderRadius: 10,
                                        marginVertical: 10,
                                        padding: hp(1),
                                        width: w * 0.9,
                                        height: RFPercentage(18),
                                        flexDirection: "row",
                                    },
                                ]}
                            >
                                <Image
                                    source={item.orders_table.photo}
                                    style={{
                                        backgroundColor: COLORS.white,
                                        width: hp(16),
                                        height: hp(16),
                                        alignSelf: "center",
                                    }}
                                />
                                <View
                                    style={{
                                        justifyContent: "space-around",
                                        margin: 5,
                                        maxWidth: RFPercentage(36),
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.green_mid,
                                                fontSize: RFValue(20, h, w),
                                                maxWidth: RFPercentage(36),
                                            }}
                                        >
                                            {item.orders_table.name_oil_order}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.green_mid,
                                                fontSize: RFValue(18, h, w),
                                                maxWidth: RFPercentage(15),
                                            }}
                                        >
                                            نقطه {item.orders_table.num_points}
                                        </Text>
                                    </View>

                                    <View>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.black,
                                                fontSize: RFValue(20, h, w),
                                                maxWidth: RFPercentage(36),
                                            }}
                                        >
                                            الكميه المتاحة:{" "}
                                            <Text style={{ color: COLORS.gray_dark }}>
                                                {item.orders_table.amount}{" "}
                                            </Text>
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                ) : (
                    <Text style={{ fontSize: RFPercentage(2.5), textAlign: "center" }}>
                        لا يوجد اي طلبات سابقا
                    </Text>
                )}



            </View>) :
             (
             <View style = {{alignItems :"center" , alignSelf :"center" 
             , justifyContent :"center" , flex :1}}>
<Text style ={{fontSize : RFPercentage(4),color : COLORS.black
     , fontFamily : FONT.font_Almarai_Bold}}>لا يوجد اي طلبات سابقا</Text>
            </View>)}

        </SafeAreaView>
    );
}

export default ShowOrdersfromConfirm;
