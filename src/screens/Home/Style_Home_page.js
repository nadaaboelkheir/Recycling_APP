import { Dimensions } from "react-native"
import { COLORS, FONT, } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from "../../constants/themes";

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
        alignContent: "center"
    }, green_container: {
        flex: 0.16,
    },
    white_container: {
        flex: 0.84,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        textAlign :"left",
        // backgroundColor :"#00d",
        fontSize: RFPercentage(3),
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Bold,
        marginRight: RFPercentage(6)
    }, text_thin_style: {
        fontSize: RFPercentage(3),
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Regular,
        marginRight: RFPercentage(6)
    },
    view_photo_and_text_style: {
        margin: RFPercentage(2),
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: RFPercentage(3.5)
    }, shadowProp: {
        shadowOffset: { width: 10, height: 14 },
        shadowColor: COLORS.black,
        elevation: 10,
        shadowOpacity: .5,
    },
    style_of_container_for_touchableopacity:
    {
        width: w * 1,
        marginTop: RFPercentage(8),

    }
    ,
    style_image_in_touchableopacity: {
        width: w * 0.31,
        height: w * 0.31,
        alignSelf: "center"
    }, style_text_in_touchableopacity: {
        fontFamily: FONT.font_Almarai_Bold,
        fontSize: RFPercentage(2.3),
        color: COLORS.green_mid

    }


})