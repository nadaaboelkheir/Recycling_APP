import { COLORS, FONT, icons, Sizes } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../constants/themes';


export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
        alignContent: "center",
       
    }, green_container: {
        flex: 0.30,
      
 
    },
    white_container: {
        flex: 0.70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(3.5),
        borderTopStartRadius: RFPercentage(3.5)
    }, 
    text_Bold_style: {
        alignSelf :"center",
        fontSize: RFPercentage(3.5),
        textAlign: "center",
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_ExtraBold,

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