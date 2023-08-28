import { COLORS, FONT, } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignContent: "center",
       alignItems :"center"
    },
    text_Bold_style: {
        alignSelf :"center",
        fontSize: RFPercentage(3.5),
        textAlign: "center",
        color: COLORS.black,
        fontFamily: FONT.font_Almarai_ExtraBold,

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

    },
    View_days: {
        flexDirection: "row",
        marginTop: RFPercentage(4)

    }

})