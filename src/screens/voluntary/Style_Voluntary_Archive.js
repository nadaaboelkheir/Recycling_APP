import { Dimensions } from "react-native";
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from "../../constants/themes";

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white
        , alignContent: "center"
    }, text_Bold_style: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: 25,
        textAlign: "center",
        justifyContent: "center",
        width: w * 0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent :"space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, style_image_in_touchableopacity: {
        width: w * 0.34,
        height: h * 0.16,
    },
    white_container: {
        alignItems :"center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(4),
        borderTopStartRadius: RFPercentage(4)
        
    }, style_touchableopacity_categories: {
        
        backgroundColor: COLORS.green_light,
        width: w * 0.44,
        // height: h * 0.36,
        borderRadius: RFPercentage(2),
        alignItems: "center",
        marginVertical: h * 0.005,
        marginHorizontal: w * 0.02,
        marginTop : RFPercentage(3),
        marginBottom: RFPercentage(2),
        padding: RFPercentage(2)
    }, style_image_in_touchableopacity: {
        width: w * 0.33,
        height: h * 0.15,
    }, style_text_in_touchableopacity: {
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: 20,
         marginTop : RFPercentage(1),
        color: COLORS.green_mid

    }, shadowProp: {
        shadowOffset: { width: 10, height: 15 },
        shadowColor: COLORS.black,
        elevation: 10,
        shadowOpacity: .5,
    }
})