
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, images } from '../../../constants';
import { hp, wp } from '../../../constants/themes';
import { styles } from '../Style_ShareTheGood';
import { useNavigation } from '@react-navigation/native';
import { getcharities, getonecharity } from '../../../Redux/Reducers/CharitiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



const FlatlitShareTheGood = ({ data }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

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
                        <TouchableOpacity
                        // "FoundationPage" item.id.toString()
                            // onPress={() => {
                                  onPress={() => navigation.navigate("FoundationPage", {
                                name: item
                            })}
                            // }}
                          
                            style={[styles.shadowProp, {
                                backgroundColor: COLORS.white, alignSelf: "center",
                                borderRadius: 10,
                                margin: 10, padding: hp(1),
                                flexDirection: "row", alignItems: "center"
                            }]}>
                            <Image source={images.magdi_yacoub_foundation_logo}
                                style={{ backgroundColor: "#fff", width: hp(15), height: hp(15), alignSelf: "center" }} />

                            <View style={{ justifyContent: "space-between", maxWidth: wp(60), marginLeft: 10 }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.5), }}>{item.name}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Light, color: COLORS.black, fontSize: RFPercentage(2.5) }}>{item.description}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFPercentage(2.5), }}>نقط {item.currentPoints}</Text>
                            </View>
                        </TouchableOpacity>




                    </>
                }
            />
        </>
    )
}



export default FlatlitShareTheGood;