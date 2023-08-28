import { ScrollView, Image, Text, View, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, images } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import {  Forget_passwordSchema } from '../../Forms/Schema';
import {  Forget_password_initial_Values } from '../../Forms/Initial_values';
import { useFormik } from 'formik';
import { styles } from './Style_Password_reset_page';
import { useState } from 'react';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PostconfirmationPassword } from '../../Redux/Reducers/passwordResetSlice';
import { useDispatch } from 'react-redux';
import Toast from "react-native-toast-message"

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Password_reset_page = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const { handleChange, handleSubmit, values, errors, touched } = useFormik({
        validationSchema: Forget_passwordSchema,
        initialValues: Forget_password_initial_Values,
        onSubmit: () => {
            dispatch(
                PostconfirmationPassword({
                    password: values.password,
                    passwordConfirmation: values.passwordConfirmation,
                })
            )
                .then(() => {
                    navigation.navigate("Confirm_page_forget_password");
                })
                .catch((error) => {
                    Toast.show({
                        type: 'error',
                        position: 'bottom',
                        text1: "برجاء التاكد من كلمة المرور و تاكيدها ",
                        visibilityTime: 3000,
                        autoHide: true,
                        topOffset: 50,
                        bottomOffset: 100,
                    });
                });
        },
    });

    return (
        <>



            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <SafeAreaView style={styles.Basic_container}>
                    <View style={styles.green_container}>

                        <View style={styles.view_arrow_and_text_style}>
                            <Back_arrow onPress={() => navigation.goBack()} />

                            <View>
                                <Text style={styles.text_Bold_style}>تعيين كلمة مرور جديدة</Text>
                            </View>


                        </View>


                    </View>

                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(2) }}>

                            <Image source={images.Resetpassword} style={{
                                alignSelf: "center",
                                width: w * 0.8,
                                height: w * 0.8,
                            }} />

                            <View style={{ alignItems: "center", margin: RFPercentage(1) }}>
                                <Text style={{
                                    textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(3), color: COLORS.gray_mid
                                }}>برجاء تعيين كلمة المرور الجديدة الخاصة بك </Text>

                            </View>

                            <INPUTtext_password
                                label="كلمة المرور"
                                value={values.password}
                                errors={errors.password}
                                touched={touched.password}
                                visible={passwordVisible}
                                setVisible={setPasswordVisible}
                                onChangeText={handleChange('password')}
                            />


                            <INPUTtext_password
                                label="تأكيد كلمة المرور"
                                value={values.passwordConfirmation}
                                errors={errors.passwordConfirmation}
                                touched={touched.passwordConfirmation}
                                visible={confirmPasswordVisible}
                                setVisible={setConfirmPasswordVisible}
                                onChangeText={handleChange('passwordConfirmation')}

                            />

                        </View>


                    </View>



                </SafeAreaView>
                <View style={{ marginVertical: RFPercentage(3) }}>
                    <Large_button button_name="إرسال" Confirm_press={handleSubmit} />
                </View>


            </ScrollView>




        </>
    )


}

export default Password_reset_page;