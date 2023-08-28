import { COLORS, FONT, icons, Sizes } from '../../constants';

import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';



export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white,
justifyContent :"space-around"
    }, text_title_name: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: 20,
        textAlign :"center",
        justifyContent : "center",
        width : Sizes.width*0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent :"space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }
})