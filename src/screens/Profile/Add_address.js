import React, { useEffect } from "react"
import { ScrollView, TouchableOpacity, Text, View, useState } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import { styles } from "./Style_add_address"
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { addAddress, getAddresses } from "../../Redux/Reducers/AddressSlice";
import Toast from "react-native-toast-message"

const Add_address = (props) => {
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const [addressDetails, setAddresDetails] = React.useState("")
    const [mobileNumber, setMobileNumber] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [governorate, setGovernorate] = React.useState("")


    const handleAddAddress = () => {
        if (
            addressDetails.trim() === "" ||
            mobileNumber.trim() === "" ||
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            governorate.trim() === ""
        ) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: "برجاء التاكد من البيانات",
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
                bottomOffset: 100,
        
              }); 
        } else {
            dispatch(
                addAddress({
                    title: governorate,
                    address: addressDetails,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: mobileNumber,
                    isMain: false
                })
            );
            navigation.navigate('Address_page');
            
        }
    };
    return (
        <>

            <ScrollView >
                <SafeAreaView style={styles.basic_container}>

                    <View style={styles.header_view}>
                        <Back_arrow onPress={() => navigation.goBack()} />
                        <View style={styles.title_view}>
                            <Text style={styles.title_text}>تفاصيل العنوان</Text>
                        </View>
                    </View>

                    <Text style={{
                        marginLeft: RFPercentage(1),
                        marginTop: RFPercentage(2),
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.green_mid,
                        fontSize: RFPercentage(2.5),
                    }}>معلومات الموقع</Text>

                    <View style={styles.governorate_view}>
                        <Text style={styles.governorate_text} numberOfLines={1} >المحافظة - المدينة</Text>
                        <TextInput
                            style={styles.quarter_textInput}
                            value={governorate}
                            onChangeText={(value) => { setGovernorate(value) }}
                            mode="flat"
                            activeUnderlineColor={COLORS.green_mid}
                            textColor={COLORS.black}
                            cursorColor={COLORS.gray_white}
                            placeholderTextColor={COLORS.white_gray}
                            placeholder="الغربية - طنطا">

                        </TextInput>

                        <Text style={styles.governorate_text} numberOfLines={1}>تفاصيل العنوان الإضافية</Text>
                        <TextInput

                            style={styles.quarter_textInput}
                            value={addressDetails}
                            onChangeText={(value) => { setAddresDetails(value) }}
                            mode="flat"
                            activeUnderlineColor={COLORS.green_mid}
                            textColor={COLORS.black}
                            cursorColor={COLORS.gray_white}
                            placeholderTextColor={COLORS.white_gray}
                            placeholder="تفاصيل العنوان الاضافية">
                        </TextInput>


                        <Text style={{
                            marginLeft: RFPercentage(1),
                            marginTop: RFPercentage(2),
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.green_mid,
                            fontSize: RFPercentage(2.5),
                        }}
                            numberOfLines={1}>
                            معلوماتك الشخصية
                        </Text>

                        <Text style={styles.governorate_text} numberOfLines={1}>رقم الهاتف</Text>

                        <TextInput

                            style={styles.quarter_textInput}

                            value={mobileNumber}
                            onChangeText={(value) => {
                                setMobileNumber(value);

                            }}
                            keyboardType="phone-pad"
                            mode="flat"
                            activeUnderlineColor={COLORS.green_mid}
                            textColor={COLORS.black}
                            cursorColor={COLORS.gray_white}
                            placeholderTextColor={COLORS.white_gray}
                            placeholder="رقم الهاتف">

                        </TextInput>

                        <Text style={styles.governorate_text} numberOfLines={1}>الاسم الأول</Text>
                        <TextInput

                            style={styles.quarter_textInput}

                            value={firstName}
                            onChangeText={(value) => {
                                setFirstName(value);

                            }}
                            mode="flat"
                            activeUnderlineColor={COLORS.green_mid}
                            textColor={COLORS.black}
                            cursorColor={COLORS.gray_white}
                            placeholderTextColor={COLORS.white_gray}
                            placeholder="الاسم الأول">

                        </TextInput>


                        <Text style={styles.governorate_text} numberOfLines={1}>اسم العائلة </Text>
                        <TextInput

                            style={styles.quarter_textInput}

                            value={lastName}
                            onChangeText={(value) => {
                                setLastName(value);

                            }}
                            mode="flat"
                            activeUnderlineColor={COLORS.green_mid}
                            textColor={COLORS.black}
                            cursorColor={COLORS.gray_white}
                            placeholderTextColor={COLORS.white_gray}
                            placeholder="اسم العائلة">
                        </TextInput>


                    </View>


                    <View style={{ marginTop: RFPercentage(4) }}>
                        <Large_button button_name="حفظ العنوان" Confirm_press={handleAddAddress} />
                    </View>
                </SafeAreaView>

            </ScrollView>
        </>
    )
}

export default Add_address;