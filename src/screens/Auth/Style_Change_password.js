import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native"
import { COLORS, FONT } from '../../constants';

const w = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        alignContent :"center"
    }, text_Bold_style: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: RFPercentage(3.5),
        textAlign: "center",
        justifyContent: "center",
        width: w * 0.8,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        // justifyContent :"space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    },
})