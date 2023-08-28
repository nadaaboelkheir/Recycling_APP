
import React, { useCallback, useState } from 'react';
import { View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { COLORS, FONT, Sizes, hp, wp } from '../../constants/themes';
import { styles } from './Confirmandchoose_style';
import WalletSvg from "../../assets/Icons/wallet.svg"
import { Dialog } from 'react-native-simple-dialogs';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAddresses } from '../../Redux/Reducers/AddressSlice';



const ConfirmationandChooseaddress = ({ route }) => {
    const { data } = route?.params || {};
    const [productsOrders, setProductsOrders] = useState(data);
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [isModalVisable, setISModalVisible] = useState(false)


    useFocusEffect(
        useCallback(() => {
            dispatch(getAddresses());
        }, [dispatch])
    );

    const { allAddresses } = useSelector((state) => state.Address)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(
        allAddresses.map((address) => ({
            label: address.title,
            value: address.address,
        }))
    );


    function calculateTotalAmount(data) {
        let totalAmount = 0;

        if (data) {
            data.forEach((order) => {
                totalAmount += order.orders_table.amount;
            });
        }

        return totalAmount;
    }

    // Call the function and store the result
    const totalAmount = calculateTotalAmount(data);

    console.log("Total Amount:", totalAmount);


    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width


    const handleNextPage = () => {
        const getit = productsOrders.filter((item) => item.orders_table.amount > 0);
        navigation.navigate("ShowOrdersfromConfirm", { data: getit });
      };



    return (
        <>

            <SafeAreaView style={styles.Basic_container}>
                <ScrollView>

                    <View style={{
                        flex: 1,
                        marginBottom: hp(2)
                        , padding: RFPercentage(2),
                    }}>

                        <Text style={{
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.black,
                            fontSize: 25,
                            textAlign: "center",
                            justifyContent: "center"
                        }}>تاكيد الطلبات</Text>
                    </View>



                    <View style={{
                        justifyContent: "space-around",
                        flex: 1, flexDirection: "column"
                    }}>

                        <View style={{
                            alignItems: "center",
                            alignSelf: "center"
                        }}>
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
                                                الكميه المحدد:{" "}
                                                <Text style={{ color: COLORS.gray_dark }}>{item.orders_table.amount} </Text>
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                            <View style={{
                                borderBottomWidth: 1,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderEndWidth: 0,
                                borderColor: COLORS.gray_white,
                                marginTop: RFPercentage(4),
                                backgroundColor: COLORS.white,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingVertical: hp(2.3),
                                paddingHorizontal: hp(1),
                                width: w * .88,
                            }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.black }}>المبلغ</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.green_mid }}>{totalAmount}</Text>
                            </View>

                            <View style={{
                                backgroundColor: COLORS.white,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                margin: RFPercentage(2),
                                borderRadius: 10, width: w * .94,
                                borderWidth: 0
                            }}>


                                <DropDownPicker
                                    style={[styles.shadowProp, {
                                        height: hp(8),
                                        borderRadius: 8,
                                        borderColor: COLORS.green_mid,
                                        borderWidth: 2,
                                        backgroundColor: COLORS.white,

                                    }]}

                                    textStyle={{
                                        fontSize: RFPercentage(2.2),
                                        justifyContent: "center",
                                        fontFamily: FONT.font_Almarai_Bold
                                        , color: COLORS.black,
                                    }}

                                    labelStyle={{
                                        fontSize: RFPercentage(2.2),
                                        fontFamily: FONT.font_Almarai_Bold
                                        , color: COLORS.black,

                                    }}

                                    listItemLabelStyle={{
                                        fontSize: RFPercentage(2.2),
                                        justifyContent: "center",
                                        fontFamily: FONT.font_Almarai_Bold
                                        , color: COLORS.black,
                                    }}

                                    placeholder="حدد العنوان"
                                    isRTL={true}
                                    open={open}
                                    setOpen={setOpen}
                                    listMode="MODAL"
                                    value={value}
                                    items={items}
                                    setValue={setValue}
                                    setItems={setItems}

                                />
                            </View>




                        </View>

                        <View style={{ marginVertical: hp(3), }}>
                            <Large_button button_name="تاكيد" Confirm_press={handleNextPage} />
                        </View>
                    </View>

                </ScrollView>

             
            </SafeAreaView>





        </>
    );
};

export default ConfirmationandChooseaddress;
