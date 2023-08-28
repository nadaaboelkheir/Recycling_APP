
import { ScrollView, TouchableOpacity, FlatList, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes, images } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import Location from "../../assets/Icons/location.svg"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../constants/themes';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { deleteAddress, getAddresses } from '../../Redux/Reducers/AddressSlice';
import Delete from "../../assets/Icons/delete.svg"
import { ActivityIndicator } from 'react-native-paper';
import NOlocation from "../../assets/Icons/NOlocation.svg"

const Address_page = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();


   
      
  useFocusEffect(
    useCallback(() => {
      dispatch(getAddresses());
    }, [dispatch])
  );

    const { allAddresses, loading } = useSelector((state) => state.Address)
    // console.log(allAddresses)




    const handleDeleteAddress = (addressId) => {
        dispatch(deleteAddress(addressId));
    };


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.green_mid} />
            </View>
        );
    }


    return (
        <>

            <StatusBar hidden={true} />
            <ScrollView style={{ backgroundColor: COLORS.white }}>
                <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, padding: RFPercentage(1.5) }}>

                    <View style={{ padding: RFPercentage(1), flexDirection: "row", alignItems: "center" }}>
                        <Back_arrow onPress={() => navigation.navigate("Profile_list")} />
                        <Text style={{
                            flex: 0.9, textAlign: "center", fontFamily: FONT.font_Almarai_Bold, color: COLORS.black,
                            fontSize: RFPercentage(3.5)
                        }}>العناوين</Text>

                    </View>

                    {allAddresses.length === 0 ? (
                        <View style={{ alignItems: "center", justifyContent: "center", margin: RFPercentage(4), backgroundColor: COLORS.white }}>
                            <NOlocation width={hp(40)} height={hp(40)} />
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: FONT.font_Almarai_Regular,
                                fontSize: RFPercentage(2.5),
                                margin: RFPercentage(4)
                            }}> لا يوجد عناوين متاحة برجاء اضافة عنوان </Text>
                        </View>
                    ) : (
                        allAddresses.map((address, indexes) => (
                            <View
                                key={indexes}

                                style={{
                                    marginTop: RFPercentage(2),
                                    borderWidth: RFPercentage(.4),
                                    borderRadius: RFPercentage(1.5),
                                    borderColor: COLORS.gray_light
                                }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row", padding: RFPercentage(1) }}>

                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                            <Location width={hp(3)} height={hp(3)} />
                                        </View>
                                        <Text style={{
                                            fontFamily: FONT.font_Almarai_Bold, justifyContent: "center", alignSelf: "center",
                                            fontSize: RFPercentage(2.5), marginHorizontal: RFPercentage(0.5), color: COLORS.black
                                        }}>{address.isMain === true ? "المنزل" : " اخر"}</Text>
                                        <View style={{
                                            backgroundColor: COLORS.green_mid,
                                            borderRadius: RFPercentage(1),
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: FONT.font_Almarai_Light,
                                                color: COLORS.white,
                                                textAlign: "center",
                                                fontSize: RFPercentage(2.4),
                                                paddingHorizontal: RFPercentage(1.5)
                                            }} > {address.isMain === true ? "اساسي" : "فرعي"}</Text>
                                        </View>
                                    </View>


                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        {address.isMain === true ? null :
                                            <>
                                                <TouchableOpacity
                                                    onPress={() => handleDeleteAddress(address.id)}
                                                    style={{
                                                        padding: RFPercentage(.5),
                                                        flexDirection: "row",
                                                        justifyContent: "space-between",
                                                        alignItems: "center"
                                                    }}>
                                                    <Delete width={hp(3.2)} height={hp(3.2)} />
                                                    <Text style={{
                                                        marginHorizontal: RFPercentage(0.2),
                                                        fontFamily: FONT.font_Almarai_Regular,
                                                        color: COLORS.gray_dark,
                                                        fontSize: RFPercentage(2.5),
                                                    }}>حذف</Text>
                                                </TouchableOpacity>
                                            </>
                                        }

                                    </View>

                                </View>
                                <View style={{
                                    borderWidth: RFPercentage(0.2),
                                    width: Sizes.width * 0.9,
                                    alignSelf: "center",
                                    borderColor: COLORS.gray_light,
                                    marginBottom: RFPercentage(2),
                                }} />

                                <View style={{ paddingHorizontal: RFPercentage(2) }}>
                                    <View
                                        style={{
                                            // backgroundColor: "#0dd",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: RFPercentage(1)
                                        }}>

                                        <Text
                                            style={{
                                                maxWidth: wp(30),
                                                paddingHorizontal: RFPercentage(1),
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.gray_mid,
                                                fontSize: RFPercentage(2.5)
                                            }}
                                        >الاسم</Text>

                                        <View
                                            style={{
                                                // backgroundColor: "#ff0",
                                                width: Sizes.width * 0.56,
                                                justifyContent: "center",
                                                alignItems: "flex-start"
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: COLORS.gray_mid,
                                                    fontFamily: FONT.font_Almarai_Regular,
                                                    fontSize: RFPercentage(2.4),
                                                    maxWidth: Sizes.width * 0.9,
                                                    paddingVertical: RFPercentage(0.5),
                                                }}
                                            >{address.fullName}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ paddingHorizontal: RFPercentage(2) }}>
                                    <View
                                        style={{
                                            // backgroundColor: "#0dd",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: RFPercentage(1)
                                        }}>

                                        <Text
                                            style={{
                                                maxWidth: wp(30),
                                                paddingHorizontal: RFPercentage(1),
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.gray_mid,
                                                fontSize: RFPercentage(2.5)
                                            }}
                                        >المدينة</Text>

                                        <View
                                            style={{
                                                // backgroundColor: "#ff0",
                                                width: Sizes.width * 0.56,
                                                justifyContent: "center",
                                                alignItems: "flex-start"
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: COLORS.gray_mid,
                                                    fontFamily: FONT.font_Almarai_Regular,
                                                    fontSize: RFPercentage(2.4),
                                                    maxWidth: Sizes.width * 0.9,
                                                    paddingVertical: RFPercentage(0.5)
                                                }}
                                            >{address.title}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: RFPercentage(2) }}>
                                    <View
                                        style={{
                                            // backgroundColor: "#0dd",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: RFPercentage(1)
                                        }}>

                                        <Text
                                            style={{
                                                maxWidth: wp(30),
                                                paddingHorizontal: RFPercentage(1),
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.gray_mid,
                                                fontSize: RFPercentage(2.5)
                                            }}
                                        >العنوان</Text>

                                        <View
                                            style={{
                                                // backgroundColor: "#ff0",
                                                width: Sizes.width * 0.56,
                                                justifyContent: "center",
                                                alignItems: "flex-start"
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: COLORS.gray_mid,
                                                    fontFamily: FONT.font_Almarai_Regular,
                                                    fontSize: RFPercentage(2.4),
                                                    maxWidth: Sizes.width * 0.9,
                                                    paddingVertical: RFPercentage(0.5)
                                                }}
                                            >{address.address}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: RFPercentage(2) }}>
                                    <View
                                        style={{
                                            // backgroundColor: "#0dd",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: RFPercentage(1)
                                        }}>

                                        <Text
                                            style={{
                                                maxWidth: wp(30),
                                                paddingHorizontal: RFPercentage(1),
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.gray_mid,
                                                fontSize: RFPercentage(2.5)
                                            }}
                                        >رقم الهاتف</Text>

                                        <View
                                            style={{
                                                // backgroundColor: "#ff0",
                                                width: Sizes.width * 0.56,
                                                justifyContent: "center",
                                                alignItems: "flex-start"
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: COLORS.gray_mid,
                                                    fontFamily: FONT.font_Almarai_Regular,
                                                    fontSize: RFPercentage(2.4),
                                                    maxWidth: Sizes.width * 0.9,
                                                    paddingVertical: RFPercentage(0.5)
                                                }}
                                            >{address.phoneNumber}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    )}


                    <View style={{
                        paddingVertical: RFPercentage(4),
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "flex-start",
                    }}>
                        <TouchableOpacity
                            onPress={ ()=> navigation.navigate("Add_address")}
                        >

                            <View style={{
                                backgroundColor: COLORS.green_mid,
                                width: RFPercentage(5),
                                borderRadius: RFPercentage(5),
                            }}>
                                <Text style={{
                                    fontSize: RFPercentage(4),
                                    textAlign: "center"
                                    , justifyContent: "center",
                                    color: COLORS.white
                                }}>+</Text>
                            </View>

                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            fontSize: RFPercentage(3),
                            color: COLORS.green_mid
                        }}>
                            إضافة عنوان</Text>

                    </View>
                </SafeAreaView>

            </ScrollView>
        </>
    )
}

export default Address_page;