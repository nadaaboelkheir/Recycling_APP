import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
    widthPercentageToDP as wp
    , heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');
const COLORS = {

    black: "#000",
    white: "#FFFFFF",
    white_gray:"#aaa",
    green_light: "#EDF7EA",
    green_mid: "#7DBB69",
    green: "#619902",
yellow_light :"#FEC300",
    background_confirm_page: "#FEEDB5BA",
    min_button: "#FEE181",
    gray_light: "#00000029",
    gray_mid: "#635B5B",
    gray_white : "#AAA",
    gray_dark: "#707070",
    bodrer_color: "#7070703A",
    gray_ofwhite: "#949292",
    text_color: "#AAAAAA",
    text_input_border: '#0000001F',


    black_mid: "#000000D6",
    black_light: "#000000DE",
    eye_color: "#00000099",

    yellow: "#FEEDB5BA",

    red_logout: "#FC0909",



}

const FONT = {
    font_in_black_noto: "NotoSansArabic-Black",
    font_bold_noto: "NotoSansArabic-Bold",
    font_extra_bold_noto: "NotoSansArabic-ExtraBold",
    font_ExtraLight_noto: "NotoSansArabic-ExtraLight",
    font_Light_noto: "NotoSansArabic-Light",
    font_Medium_noto: "NotoSansArabic-Medium",
    font_Regular_noto: "NotoSansArabic-Regular",
    font_SemiBold_noto: "NotoSansArabic-SemiBold",
    font_Thin_noto: "NotoSansArabic-Thin",
    ////////////another font  ALmarai/////////////

    font_Almarai_Bold: "Almarai-Bold",
    font_Almarai_ExtraBold: "Almarai-ExtraBold",
    font_Almarai_Light: "Almarai-Light",
    font_Almarai_Regular: "Almarai-Regular"

};

const Sizes = {
    width,
    height,
}

export {
    COLORS,
    FONT,
    Sizes,
    hp,
    wp
}