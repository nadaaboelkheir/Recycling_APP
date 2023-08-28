import { Dimensions } from "react-native"
import { COLORS, FONT, } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp } from "../../constants/themes";

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,

    }, 
    green_container: {
        flex: 0.1,
        marginTop : RFPercentage(1),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems :"center" ,
        paddingHorizontal : 15,
    }
    ,
    white_container: {
        flex: 0.9,
        paddingTop : hp(3) ,
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        justifyContent:"space-between",
    },
    view_photo_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
    , shadowProp: {
        shadowOffset: { width: 10, height: 14  },
        shadowColor: COLORS.black,
        elevation: 5,
        shadowOpacity: .2,
    }
    , style_of_container_for_view: {
        justifyContent: "center",
        marginTop: RFPercentage(4),
    }
    , style_touchableopacity_categories: {
        // paddingHorizontal : RFPercentage(1),
         alignItems :"center",  
        justifyContent: "center",
        backgroundColor: COLORS.green_light,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
         // borderRadius: RFPercentage(2),
        
    }, style_image_in_touchableopacity: {
        width: hp(18),
        height: hp(18),
        borderRadius:RFPercentage(2),
        padding : RFPercentage(5),
    }, style_text_in_touchableopacity: {
        fontFamily: FONT.font_Almarai_Regular,
        fontSize:RFPercentage(3),
        marginTop: RFPercentage(1),
        color: COLORS.green_mid

    }, style_text_in_touchableopacit_pointsnumber: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        fontSize: RFPercentage(3),
        marginVertical: RFPercentage(1.2),
        color: COLORS.black

    }, style_number_in_touchableopacity: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        fontSize: RFPercentage(3),
        alignSelf: "center",
        textAlign :"center",
        width : RFPercentage(8),
        color: COLORS.black

    }, style_text_in_touchableopacity_toadd_to_cart: {
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: RFPercentage(4),
        paddingHorizontal: RFPercentage(2.5),
        paddingVertical: RFPercentage(1.5),
        color: COLORS.white

    }


})