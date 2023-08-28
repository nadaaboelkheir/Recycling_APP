import { Dimensions } from "react-native";
import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from "../../constants";
import { hp, wp } from "../../constants/themes";


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    view_arrow_place: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "flex-start",
        padding: RFPercentage(2),
      
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

    }, style_image: {
        width: wp(55),
        height: hp(23),
        alignSelf: "center"
    },
    error: {
        color: 'red',
        fontSize: RFValue(18, h),
        alignSelf: "center"

    }
    , text_title_name: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: RFPercentage(3.5),
        textAlign: "center",
        justifyContent: "center",
        width: w * 0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, touchableopacity_style: {
        backgroundColor: COLORS.white,
        // , padding: RFPercentage(3.1),
        flexDirection: "row",
        // margin: RFPercentage(2),
        borderWidth: 0,
        borderRadius: RFPercentage(1.5)

    },
    button: {
        width: '80%',
        height: RFPercentage(8),
        backgroundColor: COLORS.gray_light,
        borderRadius: RFPercentage(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: RFPercentage(2),
    },
    selectedButton: {
        backgroundColor: COLORS.white,

    },
    buttonText: {
        fontSize: RFPercentage(2.3),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.black,
    },
    disabledSubmitButton: {
        backgroundColor: COLORS.gray_light,
    },
    submitButtonText: {
        fontSize: RFPercentage(2.5),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.white,
    },
    view_outter: {
        backgroundColor: '#ddd',
        width: 25,
        height: 25,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_inner: {
        backgroundColor: COLORS.green_mid,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 15,
        height: 15,
        borderRadius: 8,
    },
    Container_TouchableOpacity: {
        borderRadius: RFPercentage(1),
        alignItems: "center",
        justifyContent: "center",
        width: Sizes.width * 0.4,
        height: Sizes.height * 0.07,
        backgroundColor: COLORS.green_mid,
    },
    Text_style: {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.white,
        fontSize: RFPercentage(3.5),
        alignItems: "center",


    },
    container: {
        flex: 1,
        margin: RFPercentage(2),
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    circleCheckContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    circleOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.green_mid,
    },
})



