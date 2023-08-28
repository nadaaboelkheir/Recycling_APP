import { useEffect, useState } from "react"
import { ScrollView, SafeAreaView, StatusBar, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import Large_button from "../../components/Large_button";
import { hp } from "../../constants/themes";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { GetresetPasswordCode, PostresetPassword, resetPassword } from "../../Redux/Reducers/passwordResetSlice";
import Toast from "react-native-toast-message"


const Verification_page = () => {
  const route = useRoute();
  const { data } = route.params;
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue, });

  const navigation = useNavigation();
  const success = useSelector(state => state.passwordReset.success);
  const error = useSelector(state => state.passwordReset.error);
  const dispatch = useDispatch();


  const handlePasswordReset = (code) => {
    if (code.trim() === '') {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please enter the verification code',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 100,
      });
      return;
    }

    dispatch(PostresetPassword({ body: { code }, code }))
      .then(() => {
        if (!success && error) {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: error,
            visibilityTime: 3000,
            autoHide: true,
            topOffset: 50,
            bottomOffset: 100,
          });
        } else if (success) {
          navigation.navigate("Password_reset_page");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>

      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.Basic_container}>
          <View style={styles.green_container}>

            <View style={styles.view_arrow_and_text_style}>
              <Back_arrow onPress={() => navigation.goBack()} />

              <View>
                <Text style={styles.text_thin_style}>تحقق من الرقم  السري </Text>
              </View>


            </View>


          </View>



          <View style={styles.white_container}>
            <Image source={images.Otp} style={{
              width: hp(40),
              height: hp(40)
              , alignSelf: "center"
            }} />
            <View style={{ justifyContent: "space-around", marginTop: RFPercentage(4) }}>
              <Text style={{ lineHeight: RFPercentage(3.5), padding: RFPercentage(2), alignSelf: "center", textAlign: "center", color: COLORS.black, fontFamily: FONT.font_Almarai_Regular, fontSize: 16 }}> أدخل الرمز المكون من 4 أرقام الذي<Text style={{ alignSelf: "center", color: COLORS.black, fontFamily: FONT.font_Almarai_Regular, fontSize: 16 }}>  ارسلناه إلي  <Text style={{ fontSize: 18, color: COLORS.green_mid }}>{data}</Text></Text>
              </Text>

            </View>
            <SafeAreaView style={styles.root}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </SafeAreaView>

            <Text style={{

              alignSelf: "center", marginBottom: RFPercentage(5),
              fontFamily: FONT.font_bold_noto, color: COLORS.black_light
            }}>الم تستلم الرمز ؟ <Text style={{ fontFamily: FONT.font_bold_noto, color: COLORS.green_mid }} onPress={() => dispatch(GetresetPasswordCode(data))} >أرسل مرة أخري</Text></Text>

            <Large_button button_name="تأكيد" Confirm_press={() => handlePasswordReset(value)} />

          </View>

        </View>
      </ScrollView>
    </>
  )


}
export const styles = StyleSheet.create({
  Basic_container: {
    flex: 1,
    backgroundColor: COLORS.green_mid
    , alignContent: "center",

  }, green_container: {
    flex: 0.16,

  },
  white_container: {
    flex: 0.84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderTopEndRadius: RFPercentage(8),
    borderTopStartRadius: RFPercentage(8)
  }, text_Bold_style: {
    fontSize: RFPercentage(3),
    color: COLORS.white,
    fontFamily: FONT.font_Almarai_Bold,
    marginLeft: RFPercentage(3)
  }, text_thin_style: {
    fontSize: RFPercentage(3.5),
    color: COLORS.white,
    fontFamily: FONT.font_Almarai_Bold,
    marginLeft: RFPercentage(3)
  },
  view_arrow_and_text_style: {
    flexDirection: "row",
    // justifyContent: "space-between",
    margin: RFPercentage(2),
    marginTop: RFPercentage(4)
  }, view_text_and_checkbox: {
    margin: RFPercentage(1.5),
    width: Sizes.width * .85,
    // backgroundColor :"#00f",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  }, touchablopacity_checkbox_style: {
    backgroundColor: COLORS.green_mid
    , width: RFPercentage(4)
    , height: RFPercentage(4),
  }, text_with_checkbox: {
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: FONT.defult_font,
    fontSize: 14
  }, view_text_to_check_for_login: {
    margin: RFPercentage(2),
    width: Sizes.width * .85,
    //  backgroundColor :"#00f",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center"
  }, back_Icon:
  {
    tintColor: COLORS.white,
    height: RFPercentage(3.6),
    width: Sizes.width * 0.062,
    alignSelf: "center"


  }, root: { padding: 20, justifyContent: "space-around", flexDirection: "row" },
  title: { textAlign: 'center', fontSize: 0 },
  codeFieldRoot: {},
  cell: {
    borderRadius: RFPercentage(1),
    width: 50,
    height: 60,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    marginHorizontal: RFPercentage(1),
    borderColor: COLORS.gray_ofwhite,
    textAlign: 'center',
    color: COLORS.black
  },
  focusCell: {
    borderColor: COLORS.green_mid,
  },


})
export default Verification_page;