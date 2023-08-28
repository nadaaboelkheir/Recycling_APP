
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../../constants';
import { hp } from '../../../constants/themes';
import { styles } from '../Style_Voluntary_Archive';



const FlatlistTouchableOpacity = ({data}) => {


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

                        <TouchableOpacity style={[styles.shadowProp,{ backgroundColor: COLORS.white, 
                        borderRadius: 10, margin: 10,padding: hp(1),  
                        flexDirection: "row", alignItems: "center" }]}>
                            <Image source={item.image}
                                style={{ width: hp(15), height: hp(15), alignSelf: "center" }} />

                            <View style={{ justifyContent: 'space-between', marginLeft: 10 }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.6) }}>{item.name}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.4) }}>التاريخ: <Text style={{ fontFamily: FONT.font_Almarai_Regular, color: COLORS.gray_dark, fontSize: RFPercentage(2)}}>{item.date}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFPercentage(2.4) }}>نقطة {item.number_points}</Text>
                            </View>
                        </TouchableOpacity>

                    </>
                }
            />
        </>
    )
}



export default FlatlistTouchableOpacity;