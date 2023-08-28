
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../../constants/themes';
import { styles } from './Style_money_archive';
import { useNavigation } from '@react-navigation/native';



const FlatList_money_archives = ({ data }) => {

    const navigation = useNavigation();

    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width


    return (
        <>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={1}
                renderItem={({ item }) =>
                    <>

                        <TouchableOpacity style={[styles.shadowProp,
                        {
                            backgroundColor: COLORS.white,
                            alignSelf: "center",
                            borderRadius: 10,
                            margin: 10,
                            padding: hp(1),
                            width: w * 0.9,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            padding : RFPercentage(2),

                        }]}>
                            <Image source={item.image}
                                style={{
                                    width: hp(11),
                                    height: hp(11),
                                    alignSelf: "center"
                                }}
                                resizeMode="contain"
                            />

                            <View style={{
                                justifyContent: 'space-between' ,
                                //  backgroundColor :"#00f",
                                 height : hp(13),
                                 maxWidth : hp(20),maxHeight : hp(14)
                            }}>

                                <Text numberOfLines={1} style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>{item.type_of_transaction}</Text>
                                <Text numberOfLines={1}style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize:RFPercentage(2) }}>التاريخ: <Text style={{ fontFamily: FONT.font_Almarai_Regular, color: COLORS.gray_dark, fontSize: RFValue(18, h) }}>{item.date}</Text></Text>
                                <Text  numberOfLines={1} style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize:RFPercentage(2)  }}>نقطة {item.number_points}</Text>
                            </View>

                            <View style={{ justifyContent: "space-between", height: hp(14) }}>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.green_mid, fontSize: RFValue(18, h)
                                }}>{item.status}</Text>

                                {item.status === "قيد الانتظار" ?
                                 <Text onPress={() => navigation.navigate("Edit_money_transaction")} style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.red_logout, fontSize: RFValue(18, h)
                                }}>تعديل</Text>
                                    : null }

                                <Text style={{
                                    textAlign :"left",
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.black, fontSize: RFValue(18, h)
                                }}>EG 0.00</Text>
                            </View>
                        </TouchableOpacity>

                    </>
                }
            />
        </>
    )
}



export default FlatList_money_archives;