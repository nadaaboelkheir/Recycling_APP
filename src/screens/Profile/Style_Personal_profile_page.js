import { COLORS, FONT, icons, Sizes } from '../../constants';

import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';



export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white
        , alignContent: "center",

    }, text_title_name: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        justifyContent: "center",
        alignItems: "center",
        fontSize: RFPercentage(2.5),
        // margin: RFPercentage(0.5),
    },

    text_edit_button: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        fontSize: RFPercentage(2.5),
        color: COLORS.green_mid,
        // margin: RFPercentage(0.5),
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: RFPercentage(2.2),
        paddingBottom: RFPercentage(2),
        justifyContent: "space-between",
        marginTop: RFPercentage(4)
    }, style_Text_topof_points: {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.black,
        fontSize: RFPercentage(2.2),
        alignSelf: "center"
        , margin: RFPercentage(1)
    }, view_points: {
        alignSelf: "center",
        width: RFPercentage(15),
        backgroundColor: COLORS.white,
        borderWidth: RFPercentage(.25)
        , borderColor: COLORS.green_mid,
        alignItems: "center",
        borderRadius: RFPercentage(1.5),
    }
    , style_text_in_box_ofpoints: {
        fontSize:RFPercentage(4),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.green_mid,
        marginHorizontal: RFPercentage(1),
        height: RFPercentage(6),
        maxWidth: RFPercentage(20)
    },
    style_view_content_of_user_image_nameandemail: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: RFPercentage(1),
        alignContent: "center"
        , alignItems: "center"
    }, style_name_withphoto: {
        fontFamily: FONT.font_Almarai_Bold,
        fontSize: RFPercentage(2.5),
        color: COLORS.gray_mid
    }, style_email_withphoto:
    {
        fontFamily: FONT.font_Almarai_Regular
        , textAlign: "center"
        , fontSize: RFPercentage(2)
        , color: COLORS.black_mid
    },
    name_title: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.green_mid,
        fontSize: RFPercentage(2.5),
    },
    input_name_title: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        margin: RFPercentage(0.5),
        fontSize: RFPercentage(2),
        textAlign: "left",
    }, view_line: {
        borderBottomWidth: 2,
        // height: RFPercentage(4),
        // width: "90%",
        borderBottomColor: COLORS.bodrer_color,
        // padding: RFPercentage(0.1)
    }
})