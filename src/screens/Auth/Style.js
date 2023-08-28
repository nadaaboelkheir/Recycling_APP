import { COLORS, FONT, icons, Sizes } from '../../constants';

import { StyleSheet , Dimensions} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center"
    }, green_container: {
        flex: 0.16,
        
    },
    white_container: {
        alignItems :"center",
        flex: 0.84,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize : RFPercentage(3),
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Bold,
        marginLeft: RFPercentage(3)
    }, text_thin_style: {
        fontSize : RFPercentage(3),
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Regular,
        marginLeft: RFPercentage(3)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, view_text_and_checkbox: {
        marginVertical: RFPercentage(2),
        width: Sizes.width * .9,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    }, touchablopacity_checkbox_style: {
        backgroundColor: COLORS.green_mid
        , width: RFPercentage(4)
        , height: RFPercentage(4),
    }, text_with_checkbox: {
        width : Sizes.width * 0.8,
        // backgroundColor :"#00d",
        // justifyContent: "center",
        alignSelf: "center",
        textAlign: "left",
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: RFValue(17,h)
    }, view_text_to_check_for_login: {
        margin: RFPercentage(2),
        width: Sizes.width * .85,
        //  backgroundColor :"#00f",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center"
    }, checkbox_Icon:
    {
        tintColor: COLORS.white,
        height: RFPercentage(3.6),
    //    width: Sizes.width * 0.062,
        alignSelf: "center"


    },
    Error_Style:
        [FONT.font_Almarai_Regular,
        {
            color: COLORS.red_logout,
            // backgroundColor :"green",
            fontSize: RFPercentage(1.9),
            textAlign: "center"
        }
        ],


})