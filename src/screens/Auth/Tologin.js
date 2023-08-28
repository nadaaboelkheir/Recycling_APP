import { useEffect, useState, useCallback } from "react"
import INPUTtext_password from '../../components/INPUTtext_password';
import { ScrollView, Image, Text, View, Linking, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, images, Sizes } from '../../constants';
import INputbutton from '../../components/INputbutton';
import CheckBox from '@react-native-community/checkbox';
import Large_button from "../../components/Large_button";
import { styles } from './Style_LoginPage';
import { hp } from "../../constants/themes";
import { Dimensions } from "react-native";
import { LoginSchema } from "../../Forms/Schema";
import { login_initial_values } from "../../Forms/Initial_values";
import { useFormik } from "formik";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from 'react-native-paper';
import { LoginUser, addToken } from "../../Redux/Reducers/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message"

const w = Dimensions.get("screen").width


const Tologin = () => {

    const googleUrl = 'https://google.com';
    const facebookUrl = 'https://facebook.com';
    const dispatch = useDispatch()
    
    const { accessToken, loading, login, error } = useSelector((state) => state.user);
    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: LoginSchema,
            initialValues: login_initial_values,
            onSubmit: () => {
                dispatch(LoginUser({
                    email: values.email,
                    password: values.password,
                })).unwrap().then((data) => {
                    if (data.error) {
                        if (data.error === "Email not found" || "Bad credentials") {
                            Toast.show({
                                type: 'error',
                                text1: 'برجاء التاكد من البريد الالكتروني و كلمة السر',
                                position: 'top',
                                topOffset: 100,
                                bottomOffset: 50,
                                visibilityTime: 1250,
                                autoHide: true,
                            });
                        } else {
                            Toast.show({
                                type: 'error',
                                text1: 'برجاء التاكد من البريد الالكتروني و كلمة السر',
                                position: 'top',
                                topOffset: 100,
                                bottomOffset: 50,
                                visibilityTime: 1250,
                                autoHide: true,
                            });
                        }
                    } else {
                        navigation.replace("Home");
                    }
                }).catch((error) => {
                    Toast.show({
                        type: 'error',
                        text1: 'برجاء التاكد من البريد الالكتروني و كلمة السر',
                        position: 'top',
                        topOffset: 100,
                        bottomOffset: 50,
                        visibilityTime: 1250,
                        autoHide: true,
                    });
                });
            },
        });



    const isFirsttime = async () => {
        await AsyncStorage.setItem(
            "isfirst", "false"
        );

    }


    useEffect(() => {
        isFirsttime()
    }, []);





    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);


    return (
        <>

            <ScrollView style={{ backgroundColor: COLORS.white }}>
                <SafeAreaView style={styles.Basic_container}>
                    <View style={styles.green_container}>

                        <View style={styles.view_arrow_and_text_style}>


                            <View>
                                <Text style={styles.text_Bold_style}>اهلا و سهلا</Text>
                                <Text style={styles.text_thin_style}>تسجيل الدخول الى حسابك</Text>
                            </View>


                        </View>


                    </View>

                    <View style={styles.white_container}>

                        <View style={{ padding: hp(5) }}>

                            <INputbutton
                                label="البريد الألكتروني"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                errors={errors.email}
                                touched={touched.email}
                            />


                            <View style={{ paddingTop: hp(2.5) }}>

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

                                    <View style={{ alignSelf: "flex-start" }}>
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

                                    <TouchableOpacity style={{ marginRight: RFPercentage(2.5) }}>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Regular, fontSize: RFPercentage(2.2), color: COLORS.green }} onPress={() => navigation.navigate("Forgetpassword_EnterEmail")}>نسيت كلمة المرور؟</Text>
                                    </TouchableOpacity>



                                </View>
                            </View>


                            <View style={{ paddingVertical: hp(4) }}>
                                <Large_button button_name="تسجيل الدخول" Confirm_press={handleSubmit} />
                            </View>

                            <View style={{
                                paddingTop: RFPercentage(4),
                                flexDirection: "row",
                                alignSelf: "center",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <View style={{
                                    width: w * 0.25,
                                    borderWidth: RFPercentage(0.1),
                                    backgroundColor: COLORS.gray_light
                                }}></View>

                                <Text style={{ color: COLORS.black, fontSize: RFPercentage(2), justifyContent: "center", textAlign: "center", paddingHorizontal: hp(1.5), fontFamily: FONT.font_Almarai_Bold }}>أو تسجيل الدخول بواسطة</Text>

                                <View style={{
                                    width: w * 0.25,
                                    borderWidth: RFPercentage(0.1),
                                    backgroundColor: COLORS.gray_light
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
                                <TouchableOpacity style={{ width: 50, height: 50 }}
                                    onPress={() => { Linking.openURL(facebookUrl) }}>
                                    <Image source={images.facebook} style={{
                                        width: 50,
                                        height: 50
                                    }}

                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { Linking.openURL(googleUrl) }}>

                                    <Image source={images.google} style={{
                                        width: 50,
                                        height: 50
                                    }}
                                        width={50} height={50}
                                    />

                                </TouchableOpacity>

                            </View>

                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    color: COLORS.black,
                                    fontSize: RFPercentage(2),
                                    fontFamily: FONT.font_Almarai_Regular
                                }}> هل ليس لديك حساب ؟
                                    <Text onPress={() => { navigation.navigate("Signup_page1") }} style={{ color: COLORS.green_mid, fontSize: RFPercentage(2), fontFamily: FONT.font_Almarai_Bold }} >أنشيئ حساب</Text></Text>
                            </View>

                        </View>
                    </View>


                </SafeAreaView>


            </ScrollView>




        </>
    )


}

export default Tologin;