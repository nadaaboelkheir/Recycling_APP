import { Dimensions } from "react-native";
import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from "../../constants";
import { hp, wp } from "../../constants/themes";


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white
        , alignContent: "center",
        
    },
    view_arrow_place: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(2),
    },
    white_container: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(4),
        borderTopStartRadius: RFPercentage(4)


    }, shadowProp: {
        shadowColor: COLORS.black,
        elevation: 4,
        shadowOpacity: .5,
    },
    style_image: {
        width: hp(30),
        height: hp(20),
        alignSelf: "center"
    },
    style_View_of_counterandpoints: {
        flexDirection: "row",
        marginBottom: hp(3),
        justifyContent: "space-around",
        alignItems: "center"
    },
    style_oneof_View_counter_or_points:
    {
        borderRadius: 10,
        padding: hp(2.5),
        justifyContent: "center",
        backgroundColor: COLORS.green_light,
        width: w * 0.4,
        alignItems: "center"
    }, style_Text_for_POints:
    {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.black,
        textAlign: "center",
        fontSize: RFPercentage(2.5)
    },
    style_Number_points:
    {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.green_mid,
        textAlign: "center",
        fontSize: RFPercentage(2.5)
    },
    style_View_about_Foundation:
    {
        borderBottomEndRadius: 15,
        marginBottom: 20
        , backgroundColor: COLORS.white,
        borderBottomStartRadius: 15,
        padding: hp(2.25)
    },
    style_about_word: {
        fontFamily: FONT.font_Almarai_Bold,
        marginBottom: 5,
        color: COLORS.black,
        fontSize: RFPercentage(3),
        justifyContent: "center"
    },
    style_about_text_dis: {
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.gray_mid,
        fontSize: RFPercentage(2.5),
        justifyContent: "center",
        padding :RFPercentage(1),
        letterSpacing :5
    },
    style_email_and_number_View: {
        borderBottomEndRadius: 15
        , backgroundColor: COLORS.white
        , borderBottomStartRadius: 15
        , padding: hp(2.25)
    },
    style_email_text: {
        fontFamily: FONT.font_Almarai_Bold,
        marginBottom: 5,
        color: COLORS.black,
        fontSize: RFPercentage(2.5),
        justifyContent: "center"
    }, styles_number_text:
    {
        fontFamily: FONT.font_Almarai_Bold,
        marginBottom: 5,
        color: COLORS.black,
        fontSize: RFPercentage(2.5),
        justifyContent: "center"
    }, style_email_and_number_validation:
    {
        color: COLORS.green_mid,
        justifyContent: "center"
    }

})