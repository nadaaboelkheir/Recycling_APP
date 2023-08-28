import { COLORS, FONT, } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


export const styles = StyleSheet.create({
    Basic_container: {
        backgroundColor: COLORS.white,
        alignContent: "center",
        alignItems: "center",
    },
    text_Bold_style: {
        marginRight : RFPercentage(3),
        alignSelf: "center",
        fontSize: RFPercentage(3.5),
        textAlign: "center",
        color: COLORS.black,
        fontFamily: FONT.font_Almarai_ExtraBold,

    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: RFPercentage(2),
        paddingTop: RFPercentage(2)

    }
})