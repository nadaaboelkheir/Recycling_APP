import { COLORS, FONT, icons, Sizes } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


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
        fontSize: RFPercentage(3),
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Regular,
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


    },

})