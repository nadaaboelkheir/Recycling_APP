import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT, Sizes, images } from '../../../constants';
import HeaderDeliveryAuth from '../../../components/HeaderDeliveryAuth';
import INputbutton from '../../../components/INputbutton';
import { Delivery_Login_initial_values } from '../../../Forms/Initial_values';
import { useFormik } from 'formik';
import { DeliveryLoginSchema } from '../../../Forms/Schema';
import { Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../../constants/themes';
import Large_button from '../../../components/Large_button';
import INPUTtext_password from '../../../components/INPUTtext_password';
import { Checkbox } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




const To_login_Delivery = () => {
const navigation = useNavigation()
    const w = Dimensions.get("screen").width
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };
    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: DeliveryLoginSchema,
            initialValues: Delivery_Login_initial_values,
            onSubmit: () => {
                // navigation.replace('Home');
            },
        });


    return (
        <>





            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView>
                    <HeaderDeliveryAuth namePage="تسجيل الدخول" show={false} />

                    <View style={{
                        marginTop: RFPercentage(6),
                        justifyContent: "center", alignItems: "center"
                    }}>

                        <INputbutton

                            label="البريد الألكتروني"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            errors={errors.email}
                            touched={touched.email}
                        />

                        <INPUTtext_password
                            label="كلمة المرور"
                            value={values.password}
                            onChangeText={handleChange('password')}
                            errors={errors.password}
                            touched={touched.password}
                            password={password}
                            setPassword={setPassword}
                            visible={passwordVisible}
                            setVisible={setPasswordVisible}


                        />

                        <View style={{
                            flexDirection: "row",
                            width: Sizes.width * 0.95,
                            alignSelf: "center",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>

                            <View style={{ alignSelf: "flex-start"}}>
                                <Checkbox.Item

                                    labelStyle={{ color: COLORS.black, textAlign: "auto", fontFamily: FONT.font_Almarai_Regular, fontSize: RFPercentage(2) }}
                                    position='leading'
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={handleCheck}
                                    color={COLORS.green_mid}
                                    rippleColor={COLORS.green_mid}
                                    uncheckedColor={COLORS.gray_light}
                                    label="تذكرني"
                                />
                            </View>

                            <TouchableOpacity style ={{marginRight : RFPercentage(2.5) }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Regular, fontSize: RFPercentage(2.2), color: COLORS.green }} onPress={() => navigation.navigate("Forgetpassword_EnterEmail")}>نسيت كلمة المرور؟</Text>
                            </TouchableOpacity>


                           
                        </View>


                        <View style={{ paddingVertical: hp(4) }}>
                            <Large_button button_name="تابع" Confirm_press={() => {
                                navigation.navigate("Requests_search")
                                handleSubmit();}
                                } />
                        </View>
                    </View>

                    <View style={{
                        marginTop: RFPercentage(6)
                    }}>

                        <View style={{
                            flexDirection: "row",
                            alignSelf: "center",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <View style={{
                                width: w * 0.44,
                                borderWidth: RFPercentage(0.1),
                                backgroundColor: COLORS.gray_dark
                            }}></View>

                            <Text style={{ color: COLORS.black, fontSize: RFPercentage(2), justifyContent: "center", textAlign: "center", paddingHorizontal: hp(1.5), fontFamily: FONT.font_Almarai_Bold }}>أو</Text>

                            <View style={{
                                width: w * 0.44,
                                borderWidth: RFPercentage(0.1),
                                backgroundColor: COLORS.gray_dark
                            }}></View>


                        </View>

                        <View style={{
                            marginVertical: hp(2.5),
                            flexDirection: "row",
                            alignSelf: "center",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: Sizes.width * 0.40,
                            height: Sizes.height * 0.1
                        }}>
                            <Image source={images.facebook} style={{ width: 50, height: 50 }} />

                            <Image source={images.google} style={{ width: 50, height: 50 }} />

                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: COLORS.black, fontSize: RFPercentage(2), fontFamily: FONT.font_Almarai_Regular }}> هل ليس لديك حساب ؟ <Text onPress={() => { navigation.navigate("Signup_page1") }} style={{ color: COLORS.green_mid, fontSize: RFPercentage(2), fontFamily: FONT.font_Almarai_Bold }} >أنشيئ حساب</Text></Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>



        </>
    )


}

export default To_login_Delivery;