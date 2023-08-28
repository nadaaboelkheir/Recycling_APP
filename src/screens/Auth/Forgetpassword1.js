
import { ScrollView, Image, Text, View, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, images, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import { ForgetPasswordEmailSchema } from '../../Forms/Schema';
import { Forgetpassword_initial_values } from '../../Forms/Initial_values';
import { useFormik } from 'formik';
import { styles } from './Style_forgetpassword_enteremail';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import Toast from "react-native-toast-message"
import { GetresetPasswordCode } from '../../Redux/Reducers/passwordResetSlice';

const w = Dimensions.get("screen").width

const Forgetpassword_EnterEmail = (props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation();
    const handlePasswordReset = (email) => {
        dispatch(GetresetPasswordCode(email))
            .then(() => {
                navigation.navigate("Verification_page" , {data : email });
            })
            .catch((error) => {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: error ,
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 50,
                    bottomOffset: 100,

                  });
            });
    };

    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: ForgetPasswordEmailSchema,
            initialValues: Forgetpassword_initial_values,
            onSubmit: () => {
                handlePasswordReset(values.email)
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
                                <Text style={styles.text_Bold_style}>نسيت كلمه المرور</Text>
                                <Text style={styles.text_thin_style}>تحقق من البريد الالكتروني </Text>
                            </View>


                        </View>


                    </View>

                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(2) }}>

                            <Image source={images.forget_password} style={{
                                alignSelf: "center",
                                width: w * 0.8,
                                height: w * 0.8,
                            }} />

                            <View style={{ alignItems: "center", margin: RFPercentage(1) }}>
                                <Text style={{
                                    textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(3), color: COLORS.gray_mid
                                }}> سوف نرسل رمزا على البريد الخاص بك</Text>
                                <Text style={{
                                    textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(3), color: COLORS.gray_mid
                                }}> لإعادة تعيين رقمك السري </Text>

                            </View>

                            <INputbutton
                                label="البريد الالكتروني"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                errors={errors.email}
                                touched={touched.email}
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

export default Forgetpassword_EnterEmail;