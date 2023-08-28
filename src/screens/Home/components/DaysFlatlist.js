import React, { useState } from "react"
import { TouchableOpacity, Text,  FlatList } from 'react-native';
import { COLORS, } from '../../../constants';
import { RFPercentage, } from 'react-native-responsive-fontsize';
import { FONT, hp } from "../../../constants/themes";

const DaysFLatlist = ({ data }) => {

    const [activeDay, setActiveDay] = useState(data[0]);


    return (
        <>

            <FlatList

                data={data}
                numColumns={1}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <>
                        <TouchableOpacity
                            onPress={() => setActiveDay(item)}
                            style={{
                                marginBottom: 10,
                                height: hp(14),
                                width: hp(13.5),
                                justifyContent: "center",
                                backgroundColor: item === activeDay ? COLORS.white : "#00000029",
                                marginHorizontal: RFPercentage(1),
                                borderTopEndRadius: RFPercentage(2),
                                borderTopStartRadius: RFPercentage(2),
                                borderBottomStartRadius: RFPercentage(2),
                                elevation: 1.5,
                                shadowColor: COLORS.black_light,
                                shadowOpacity: 0.2,
                                shadowRadius: 2,

                            }}>
                            <Text style={{
                                fontFamily: FONT.font_Almarai_Bold, textAlign: "center",
                                fontSize: RFPercentage(3.4), color: item === activeDay ? COLORS.green_mid : COLORS.white,
                            }}>{item.day}</Text>
                        </TouchableOpacity>
                    </>
                }
            />
        </>
    )
}

// // shadowProp: {
//     shadowColor: COLORS.black,
//     elevation: 4,
//     shadowOpacity: .5,

// // }
// shadowProp: {
//     shadowOffset: { width: 10, height: 14 },
//     shadowColor: COLORS.black,
//     elevation: 10,
//     shadowOpacity: .5,
// }
// })

export default DaysFLatlist;