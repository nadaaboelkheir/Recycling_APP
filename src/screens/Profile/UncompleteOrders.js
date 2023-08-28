import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { styles } from './Style_uncompleteOrders';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp, wp } from '../../constants/themes';
import { orders_Data } from '../../Utils/DummyData';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersStatus } from '../../Redux/Reducers/OrdersSlice';
import { getOrdersStatusAccepted } from '../../Redux/Reducers/OrdersAcceptedSlice';

const h = Dimensions.get("screen").height;
const w = Dimensions.get("screen").width;

function UncompleteOrders() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrdersStatus());
  }, [dispatch]);

  const { OrdersStatus } = useSelector((state) => state.OrdersStatus);
  console.log(OrdersStatus)


  // .filter((item) => item.orderStatus === "PENDING")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>

        {OrdersStatus?.length > 0 ? (

          OrdersStatus?.map((order) => (
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

export default UncompleteOrders;
