import React, { useState } from "react";
import { Text, View, FlatList,ScrollView ,Dimensions, StatusBar } from "react-native";
import { COLORS, Sizes, FONT } from '../../../constants';
import { SafeAreaView } from "react-native-safe-area-context";
import Back_arrow from "../../../components/Back_arrow";
import { RFPercentage } from "react-native-responsive-fontsize";
import { styles } from "../HomeDelivery/StyleHomeDeliPage";
const Suggestions_and_complaints_record = () => {
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const [data,setData] = useState([{},{},{}])
    return (
        <>
            <StatusBar hidden={true} />

            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

                <View style={{ flex: 1 }}>

                    <View style={{
                        flexDirection: "row", alignItems: "center"
                        , width: w * 0.95,
                        marginBottom : RFPercentage(2),
                        justifyContent: "space-between",
                        padding: RFPercentage(2)
                    }}
                    >
                        <Back_arrow />
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.black,
                            fontSize: RFPercentage(3.5)
                        }}>سجل الشكاوي والأقتراحات
                        </Text>
                    </View>
                  
                    <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={1}
                // scrollEnabled={false}
                renderItem={({ item }) =>
                    <>
  <View style={{
                        shadowColor: COLORS.green_mid, borderWidth: 1,
                        borderColor: COLORS.green_mid,
                        elevation: 4,
                        shadowOpacity: .5,
                        width: w * 0.9,
                         minHeight: h * 0.20,
                        backgroundColor: COLORS.white,
                        alignSelf: "center",
                        justifyContent:"space-between",
                        marginTop :RFPercentage(2),
                        marginBottom :RFPercentage(2),

                        borderRadius: RFPercentage(2)
                    }} >
                        <Text style={{margin:RFPercentage(3) ,
                           fontFamily: FONT.font_Almarai_Bold,
                           color: COLORS.gray_mid,
                           fontSize: RFPercentage(2.5)
                        }}>
                            اكتب الشكاوي والأقتراحات   

                        </Text>
                        <Text style={{margin:RFPercentage(3) ,
                            alignSelf:"flex-end",
                           fontFamily: FONT.font_Almarai_Bold,
                           color: COLORS.green_mid,
                           fontSize: RFPercentage(2.5)
                        }}>
                            21 مايو 2023  

                        </Text>
                    </View>
                    </>
                }
            />

                </View>
            </SafeAreaView>

        </>
    );

}

export default Suggestions_and_complaints_record;