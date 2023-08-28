
import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { COLORS, FONT, Sizes, hp, wp } from '../../constants/themes';
import { styles } from './Style_Donate';
// import { useNavigation } from '@react-navigation/native';
import WalletSvg from "../../assets/Icons/wallet.svg"
import { Dialog } from 'react-native-simple-dialogs';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import CorrectSvg from "../../assets/Icons/correct.svg"



const Money_transaction = () => {
    const navigation = useNavigation();
    const { DataUser, loading } = useSelector((state) => state.profile);
    const [isModalVisable, setISModalVisible] = useState(false)


    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    // const [selectedLanguage, setSelectedLanguage] = useState("المحفظه الالكترونيه");

    const handleLanguagePress = (value) => {
        setSelectedLanguage(value);
    };

    const handleFirstCircleCheckPress = () => {
        handleLanguagePress('الدفع كاش');
        setChecked(true);
        setChecked2(false);
    };

    const onChangeText = (text) => {
        setInputValue(text);
        setErrorMessage('');
        if (isNaN(Number(text))) {
            setInputValue('');
            setErrorMessage('برجاء ادخال رقم');
        } else if (Number(text) > DataUser.points * 1) {
            setInputValue('');
            setErrorMessage('برجاء ادخال عدد نقاط اقل من عدد نقاطك ');
        }
    };
    const [valueNumberofvisa, setValueNumberofvisa] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');

    const onChangeText2 = (text) => {
        setValueNumberofvisa(text);
        setErrorMessage2('');

        // Validate the Visa number
        if (text.length !== 16) {
            setErrorMessage2('رقم المحفظة يجب أن يتكون من 16 رقم');
        } else if (!/^\d+$/.test(text)) {
            setErrorMessage2('رقم المحفظة يجب أن يحتوي على أرقام فقط');
        }
    };

    const Confirm_press = () => {
        if (inputValue === "") {
            setErrorMessage("برجاء ادخال عدد النقاط والبرنانج الخاص بالتبرع");
        } else if (selectedLanguage === "المحفظه الالكترونيه") {
            if (valueNumberofvisa.length !== 16) {
                setErrorMessage2("رقم المحفظة يجب أن يتكون من 16 رقم");
            } else if (!/^\d+$/.test(valueNumberofvisa)) {
                setErrorMessage2("رقم المحفظة يجب أن يحتوي على أرقام فقط");
            } else {
                setErrorMessage("");
                setISModalVisible(true);
            }
        } else {
            setErrorMessage("");
            setISModalVisible(true);
        }
    };

    const [errorMessage, setErrorMessage] = useState('');

    // const navigation = useNavigation();


    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const [inputValue, setInputValue] = useState('');





    return (
        <>
            <StatusBar hidden={true} />

            <SafeAreaView style={styles.Basic_container}>
                <ScrollView>

                    {/* <Back_arrow  onPress={() => navigation.navigate("Home_page")}/> */}

                    <View style={{
                        flex: 1, padding: RFPercentage(2),
                        flexDirection: "row", marginBottom: hp(2),
                        justifyContent: "space-between"
                    }}>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.black,
                            fontSize: 25,
                            textAlign: "center",

                            justifyContent: "center"
                        }}>تحويل الفلوس</Text>

                        <TouchableOpacity onPress={() => navigation.navigate("Archives")}   >
                            <WalletSvg height={hp(6)} width={wp(10)} fill="#000" />
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        justifyContent: "space-around",
                        flex: 1, flexDirection: "column"
                    }}>
                        <View style={{
                            alignItems: "center",
                            alignSelf: "center"
                        }}>

                            <View style={[styles.shadowProp, {
                                backgroundColor: COLORS.green_light,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: hp(2.3)
                                , borderRadius: 10, width: w * .94,
                            }]}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.black }}>النقط الخاصه بك</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.green_mid }}>{DataUser.points}</Text>
                            </View>

                            <TextInput

                                style={{
                                    fontSize: RFPercentage(2.5),
                                    fontFamily: FONT.font_Almarai_Regular,
                                    color: COLORS.gray_dark,
                                    alignSelf: "center",
                                    padding: hp(2),
                                    marginTop: hp(4),
                                    width: w * .94,
                                    borderRadius: 8,
                                    borderColor: COLORS.green_mid,
                                    borderWidth: 2,

                                }}
                                value={inputValue}
                                onChangeText={onChangeText}
                                keyboardType="numeric"
                                placeholderTextColor={COLORS.gray_dark}
                                placeholder='عدد النقط المراد تحويلها' />

                            {errorMessage ? <Text style={[styles.error, { fontSize: RFPercentage(2) }]}>{errorMessage}</Text> : null}

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
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.green_mid }}>EG 0.00</Text>
                            </View>
                            <View style={{
                                borderColor: COLORS.gray_white,
                                marginTop: RFPercentage(2),
                                backgroundColor: COLORS.white,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingVertical: hp(1),
                                paddingHorizontal: hp(1),
                                // , borderRadius: 10, 
                                width: w * .88,
                            }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.8), color: COLORS.black, alignSelf: "flex-start" }}>طريقة الأستلام</Text>
                            </View>
                            <View style={{
                                backgroundColor: COLORS.white,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                margin: RFPercentage(2),
                                borderRadius: 10, width: w * .94,
                                borderWidth: 0
                            }}>

                                <View style={styles.container}>
                                    <View
                                        onPress={handleFirstCircleCheckPress}
                                        style={[
                                            styles.circleCheckContainer,
                                            selectedLanguage === "الدفع كاش",
                                        ]}
                                    >
                                        <TouchableOpacity
                                            onPress={handleFirstCircleCheckPress}
                                            style={styles.circleOuter}
                                        >
                                            {checked ? <View style={styles.circleInner}></View> : null}
                                        </TouchableOpacity>
                                        <Text style={styles.buttonText}>الدفع كاش</Text>
                                    </View>

                                    <View
                                        onPress={() => {
                                            handleLanguagePress("المحفظه الالكترونيه");
                                            setChecked(false);
                                            setChecked2(true);
                                        }}
                                        style={[
                                            styles.circleCheckContainer,
                                            selectedLanguage === "المحفظه الالكترونيه",
                                        ]}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                handleLanguagePress('المحفظه الالكترونيه');
                                                setChecked(false);
                                                setChecked2(true);
                                            }}
                                            style={styles.circleOuter}
                                        >
                                            {checked2 ? <View style={styles.circleInner}></View> : null}
                                        </TouchableOpacity>
                                        <Text style={styles.buttonText}>المحفظه الالكترونيه</Text>
                                    </View>



                                </View>
                            </View>
{/* 
                            {selectedLanguage === "الدفع كاش" ?
                                (<View  style={{
                                    borderColor: COLORS.gray_white,
                                    marginTop: RFPercentage(2),
                                    backgroundColor: COLORS.white,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingHorizontal: hp(1),
                                    paddingVertical: hp(1),
                                    width: w * .88,
                                }} >
                                    <Text style={{
                                        fontFamily: FONT.font_Almarai_Bold,
                                        fontSize: RFPercentage(2.8),
                                        color: COLORS.black, alignSelf: "flex-start"
                                    }}>برجاء اختيار العنوان</Text>


                                </View>)
                                : (null)} */}

                            <TextInput

                                style={{
                                    fontSize: RFPercentage(2.5),
                                    fontFamily: FONT.font_Almarai_Regular,
                                    color: COLORS.gray_dark,
                                    alignSelf: "center",
                                    padding: hp(2),
                                    marginTop: hp(4),
                                    width: w * .94,
                                    borderRadius: 8,
                                    borderColor: COLORS.green_mid,
                                    borderWidth: 2,

                                }}

                                value={valueNumberofvisa}
                                onChangeText={selectedLanguage === "المحفظه الالكترونيه" ? onChangeText2 : null}
                                keyboardType="numeric"
                                placeholderTextColor={COLORS.gray_dark}
                                placeholder='رقم المحفظة' />

                            {errorMessage2 ? (
                                <Text style={[styles.error, { fontSize: RFPercentage(2) }]}>
                                    {errorMessage2}
                                </Text>
                            ) : null}

                        </View>

                        {/* <ScrollView> */}
                        <View style={{ marginTop: hp(3), }}>
                            <Large_button button_name="تاكيد" Confirm_press={Confirm_press} />
                        </View>
                        {/* </ScrollView> */}
                    </View>

                </ScrollView>

                <Dialog
                    dialogStyle={{ borderRadius: hp(1), alignSelf: "flex-end" }}
                    visible={isModalVisable}
                    onTouchOutside={() => setISModalVisible(true)}>
                    <View style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: hp(1.5),
                    }}>

                        {/* <CorrectSvg width={RFPercentage(10)}
                            height={RFPercentage(10)}
                        /> */}

                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.black, fontSize: RFPercentage(2.8),
                            marginVertical: RFPercentage(2)
                        }}>هل انت متاكد من تنفيذ الطلب</Text>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center", justifyContent: "space-around",
                            width: Sizes.width * 0.75
                        }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setISModalVisible(false)
                                    navigation.navigate("ServicesOil")
                                }}

                                style={[styles.shadowProp, {
                                    width: hp(12),
                                    height: hp(6),
                                    borderRadius: hp(1),
                                    padding: hp(1),
                                    backgroundColor: COLORS.white,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWidth: 1,
                                    borderColor: COLORS.green_mid
                                }]}>
                                <Text style={{
                                    color: COLORS.green_mid,
                                    fontFamily: FONT.font_Almarai_Bold,
                                    fontSize: RFPercentage(2.3)

                                }}>نعم</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setISModalVisible(false)
                                }}

                                style={[styles.shadowProp, {
                                    width: hp(12),
                                    height: hp(6),
                                    borderRadius: hp(1),
                                    padding: hp(1),
                                    backgroundColor: COLORS.red_logout,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }]}>
                                <Text style={{
                                    color: COLORS.white,
                                    fontFamily: FONT.font_Almarai_Bold,
                                    fontSize: RFPercentage(2.3)
                                }}>لا</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </Dialog>

            </SafeAreaView>





        </>
    );
};

export default Money_transaction;
