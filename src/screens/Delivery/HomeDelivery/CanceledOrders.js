
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT ,images  } from '../../../constants';
import { styles } from './StyleUncom';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { hp ,wp } from '../../../constants/themes';
import { CanceledOrdersData } from '../../../Utils/DummyData';
import { useState } from 'react';

const CanceledOrders = () => {
    // const navigation = useNavigation();

    // const [Deliveryorder] = useState(Deliveryorders);
    const [data , setData] = useState(CanceledOrdersData) 

    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width


    return (
        <>
<View style= {{flex :1 , backgroundColor : COLORS.white}}>
            <FlatList style={{flex :1}}
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={1}
                renderItem={({ item }) =>
                    <>
                    <View style={{ 
                    alignItems: "center",
                     backgroundColor: COLORS.white
                      }}>

                    <LinearGradient
                        colors={['#AED270CE', '#F44336']}
                        style={{ flex: 1 }}
                    >
                    </LinearGradient>
                    {/* {Deliveryorder.filter(function (item) {
                        return item.statues == "Waiting";
                    }).map((item, index) => ( */}

                        <LinearGradient
                            colors={['#AED270CE', '#7DBB69']}
                            key={item.orderData.id}
                            style={[styles.shadowProp, {
                                flexDirection: "column",
                                borderRadius: 10,
                                paddingLeft: hp(1),
                                justifyContent: "space-around",
                                marginVertical: 10,
                                width: hp(46)
                            }]}>
                            <View
                                style={{
                                    paddingVertical: RFPercentage(1),
                                    borderBottomLeftRadius: 2,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 2,
                                    borderTopRightRadius: 10,
                                    width: hp(45),
                                    flexDirection: "column",
                                    backgroundColor: COLORS.white
                                }}>
                                <View style={{
                                    flexDirection: "row",
                                     justifyContent: "space-around",
                                     alignItems:"center"
                                    , paddingHorizontal: RFPercentage(2),
                                     padding: RFPercentage(1),
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        flex: 1,
                                        alignItems:"center"

                                    }}>
                                        <Image source={item.orderData.image} resizeMode='center'
                                            style={{
                                                borderRadius: RFPercentage(3),
                                                width: hp(6),
                                                height: hp(6),
                                                alignSelf: "center"
                                            }} />

                                        <Text style={{
                                            fontSize: RFPercentage(2.5),
                                            color: COLORS.black, paddingHorizontal: RFPercentage(1.5)
                                            , fontFamily: FONT.font_Almarai_Regular
                                        }}>{item.orderData.name}</Text>
                                    </View>
                                    <Text style={{
                                        color: COLORS.gray_dark,
                                        textAlign: "center", justifyContent: "center"
                                        , fontFamily: FONT.font_Almarai_Regular
                                    }}>({item.orderData.order_serial})</Text>


                                </View>

                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>  كمية الزيت : <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.amount_oil}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>  رقم الهاتف: <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.phone_num}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>  العنوان: <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.address}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>  الحالة: <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.statues}</Text></Text>

                            </View>

                        </LinearGradient>

                    {/* ))} */}

                </View>
                    </>
                }
            />
                            </View>

        </>
    )
}



export default CanceledOrders;