import { TouchableOpacity, StyleSheet, Dimensions, Text, View } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, FONT } from '../constants/index';
import BackarrowWhiteSVG from "../../src/assets/Icons/backWhiteArrow.svg"
import { hp, wp } from '../constants/themes';
import { SafeAreaView } from 'react-native-safe-area-context';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const HeaderDeliveryAuth = ({ onPress, namePage, back, help }) => {


    return (
        <>


            <SafeAreaView style={{
                backgroundColor: COLORS.green_mid,
                width: w * 1,flex:1
            }}>

                <View style={{flex:1 ,paddingVertical:RFPercentage(4) , padding :RFPercentage(2), flexDirection: "row", justifyContent: "space-between" }}>

                    <View style={{ flexDirection: "row" , justifyContent:"center" ,alignItems :"center" }}>
                        {help ? <>
                            <TouchableOpacity style = {{ paddingHorizontal : RFPercentage(2),borderRadius:RFPercentage(4),
                                 backgroundColor :COLORS.white , alignItems :"center" , marginLeft :RFPercentage(2) }}>
                                <Text  style={{
                                    fontSize: RFPercentage(2.8),padding : RFPercentage(1),
                                    fontFamily: FONT.font_Almarai_Bold, color: COLORS.black
                                }}>المساعده</Text>
                            </TouchableOpacity>
                        </> :

                            <>
                                {back ? <>
                                    <TouchableOpacity onPress={onPress} style={{ marginRight: 6 }} >
                                        <BackarrowWhiteSVG height={hp(4)} width={hp(4)} />
                                    </TouchableOpacity>


                                </> : null}



                                <Text style={{
                                    // backgroundColor :"#00d",
                                    fontSize: RFPercentage(3),
                                    fontFamily: FONT.font_Almarai_Bold, color: COLORS.white
                                }}>{namePage}</Text>

                            </>}


                    </View>

                    <Text style={{
                        // backgroundColor :"#00d",
                        fontSize: RFPercentage(3.8),
                        fontFamily: FONT.font_Almarai_Bold, color: COLORS.white
                    }} >RE-OiL</Text>

                </View>
            </SafeAreaView>

        </>
    )
}
const styles = StyleSheet.create({


})

export default HeaderDeliveryAuth;