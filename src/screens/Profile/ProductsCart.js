import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { styles } from './StyleCompleteOrder';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Sizes, hp, wp } from '../../constants/themes';
import { Products_orders, orders_Data } from '../../Utils/DummyData';
import Back_arrow from '../../components/Back_arrow';
import PlusSvg from "../../assets/Icons/plus.svg"
import MinusSvg from "../../assets/Icons/minus.svg"
import Bag from "../../../src/assets/Icons/Bag.svg"
import Large_button from '../../components/Large_button';
import Icon from 'react-native-vector-icons/FontAwesome5';

const h = Dimensions.get("screen").height;
const w = Dimensions.get("screen").width;

function ProductsCart({ route }) {
  const { data } = route.params;
const [productsOrders, setProductsOrders] = useState(data);

  const navigation = useNavigation();


  const increment = (index) => {
    const updatedData = [...productsOrders];
    updatedData[index].orders_table.amount += 1;
    setProductsOrders(updatedData);
  };

  const decrement = (index) => {
    const updatedData = [...productsOrders];
    if (updatedData[index].orders_table.amount > 0) {
      updatedData[index].orders_table.amount -= 1;
      setProductsOrders(updatedData);
    }
  };


  function removeItemFromCart(id) {
    setProductsOrders((prevOrders) => {
      console.log(id)
      const updatedCart = prevOrders.filter((item) => item.id !== id);
      return updatedCart;
    });
  }

  const handleNextPage = () => {
    const ConfrimationFromCart = productsOrders.filter((item) => item.orders_table.amount > 0);
    navigation.navigate("ConfirmationandChooseaddress", { data: ConfrimationFromCart });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4),
      }}>

        <Back_arrow onPress={() => navigation.navigate("Products")} />

        <View>
          <Text style={{
            textAlign: "center",
            fontFamily: FONT.font_Almarai_ExtraBold,
            color: COLORS.black,
            fontSize: 25,
            width: w * 0.86,
            textAlign: "center",
            justifyContent: "center",
          }}>عربة الطلبات</Text>


        </View>

      </View>

      <ScrollView>
        <View style={{ alignItems: "center", backgroundColor: COLORS.white }}>
          {productsOrders.map((item, index) => (
            <TouchableOpacity
              key={item.id}
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
              <View style={{ justifyContent: "space-around", margin: 5, maxWidth: RFPercentage(36) }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text
                    style={{
                      fontFamily: FONT.font_Almarai_Bold,
                      color: COLORS.green_mid,
                      fontSize: RFValue(20, h, w),
                      maxWidth: RFPercentage(36),
                    }}
                  >{item.orders_table.name_oil_order}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONT.font_Almarai_Bold,
                      color: COLORS.green_mid,
                      fontSize: RFValue(18, h, w),
                      maxWidth: RFPercentage(15),
                    }}
                  >      نقطه {item.orders_table.num_points}
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
                    <Text style={{ color: COLORS.gray_dark }}>{item.orders_table.amount_oil_order} </Text>
                  </Text>
                  <View style ={{flexDirection :"row" , justifyContent :"space-around"}}>
                    <View style={{ flexDirection: "row", width: w * 0.3, justifyContent: "space-around" }}>
                      <TouchableOpacity
                        style={styles.shadowProp}
                        onPress={() => increment(index)}
                      >
                        <PlusSvg width={RFPercentage(6)} height={RFPercentage(6)} />
                      </TouchableOpacity>
                      <View style={{ justifyContent: "center" }}>
                        <Text numberOfLines={1}
                          style={{
                            fontSize: RFPercentage(2.6),
                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.black,
                            maxWidth: Sizes.width * 0.2,
                          }}>{item.orders_table.amount}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.shadowProp}
                        onPress={() => decrement(index)}
                      >
                        <MinusSvg width={RFPercentage(6)} height={RFPercentage(6)} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => removeItemFromCart(item.id)} style={{ alignSelf :"center", flexDirection: "row" }}>
                      <Icon name="trash-alt" size={hp(3)} style={{ color: COLORS.red_logout, margin: 4 }} />
                      <Text
                        style={{
                          alignSelf :"center",
                          fontFamily: FONT.font_Almarai_Bold,
                          color: COLORS.red_logout,
                          fontSize: RFPercentage(2.7),
                        }}
                      >حذف
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>



      </ScrollView>

      <View style={{ marginTop: RFPercentage(5), marginBottom: RFPercentage(5) }}>
        <Large_button button_name="تاكيد الطلبات" Confirm_press={handleNextPage} />
      </View>

    </SafeAreaView>
  );
}

export default ProductsCart;
