import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT } from '../../constants';
import { styles } from './Style_uncompleteOrders';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp, wp } from '../../constants/themes';
import {  useSelector } from 'react-redux';

const h = Dimensions.get("screen").height;
const w = Dimensions.get("screen").width;

function CompleteOrders() {
    // Deliveryorders
    const [data,setData] = useState(CompletedOrdersData)


    const { OrdersStatusAccepted } = useSelector((state) => state.OrdersAcceptedStatus);
    console.log(OrdersStatusAccepted)
//   // .filter((item) => item.orderStatus === "ACCEPTED")
    return (   
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {OrdersStatusAccepted?.length > 0 ? (
                     OrdersStatusAccepted?.map((order) => (
                        <View
                            key={order.createdAt}
                            style={[styles.shadowProp, {
                                alignSelf: "center",
                                backgroundColor: COLORS.white,
                                borderRadius: 10,
                                marginVertical: 12,
                                padding: hp(1),
                                width: w * 0.9,
                            }]}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <Text
                                        style={{
                                            fontFamily: FONT.font_Almarai_Bold,
                                            color: COLORS.green_mid,
                                            fontSize: RFPercentage(2.5),
                                            maxWidth: RFPercentage(50),
                                        }}
                                    >
                                        تاريخ الطلب: {order.createdAt}
                                    </Text>
                                </View>
                            </View>
                            {order?.orderLines?.map((orderLine) => (
                                <View
                                    key={orderLine.id}
                                    style={{
                                        flexDirection: "row",
                                        marginVertical: 12,
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        source={{ uri: orderLine.item.imageUrl }}
                                        style={{
                                            width: hp(16),
                                            height: hp(16),
                                            borderRadius: RFPercentage(2)
                                        }}
                                        resizeMode="center"
                                    />
                                    <View style={{ marginLeft: 12 }}>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.green_mid,
                                                fontSize: RFPercentage(2.7),
                                            }}
                                        >
                                            {orderLine.item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.black,
                                                fontSize: RFPercentage(2.4),
                                            }}
                                        >
                                            الكمية: {orderLine.quantity}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.black,
                                                fontSize: RFPercentage(2.4),
                                            }}
                                        >
                                            نقاط: {orderLine.item.points}
                                        </Text>
                                    </View>
                                    <Text style={{
                                        color: COLORS.gray_dark,
                                        textAlign: "center", justifyContent: "center"
                                        , fontFamily: FONT.font_Almarai_Regular
                                    }}>({item.orderData.order_serial})</Text>


                                </View>
                            ))}
                        </View>
                    ))
                ) : (null)
                
               
                }
            </ScrollView>
        </SafeAreaView>


    );
}

export default CompleteOrders;

