import React, { useEffect } from "react"
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from '../Style_Type_oil';
import { COLORS, FONT, } from '../../../constants';
import { RFPercentage, } from 'react-native-responsive-fontsize';

const Firstflatlist = ({ setnumber, data, setdata }) => {

    const w = Dimensions.get("screen").width
    const Oil_food = 10;
    const Oil_cars = 20;


    useEffect(() => {
        fun()
    }, [data])

    const fun = () => {
        let counter = 0
        for (i = 0; i < data.length; i++) {
            counter += data[i].initial
        }
        setnumber(counter)
    }

    const increment = (index) => {
        const products = [...data]
        products[index].initial += 1
        setdata(products)
    }


    const decrement = (index) => {

        const products = [...data]
        if (products[index].initial > 0) {
            products[index].initial -= 1
            setdata(products)
        }

    }

    return (
        <>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                contentContainerStyle={{ marginBottom: RFPercentage(20) }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                    <>
                        <View style={{ alignItems: "center", marginBottom: 20, marginTop: 10, justifyContent: "space-around", width: w * 0.5 }}>
                            <View style={[styles.shadowProp, styles.style_touchableopacity_categories]} >

                                <View style={{ alignItems: "center", paddingTop: RFPercentage(1.5) }}>
                                    <Image source={item.image}
                                        style={styles.style_image_in_touchableopacity} />
                                    <Text style={styles.style_text_in_touchableopacity}>{item.name}</Text>
                                    <Text style={styles.style_text_in_touchableopacit_pointsnumber}>النقط : {item.number_points}</Text>
                                </View>


                                {
                                    item.initial === 0 ? (
                                        <TouchableOpacity
                                            onPress={() => increment(index)}
                                            style={{
                                                backgroundColor: COLORS.green_mid,
                                                paddingHorizontal: RFPercentage(2.5),
                                                borderRadius: RFPercentage(2),
                                                margin: RFPercentage(1),
                                                marginHorizontal: RFPercentage(2)
                                            }}>
                                            <Text style={{
                                                paddingVertical: RFPercentage(2),
                                                fontSize: RFPercentage(2)
                                                , fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.white
                                            }}>اضافة الي العربة</Text>
                                        </TouchableOpacity>
                                    ) :
                                        (
                                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: w * 0.47 }}>

                                                <TouchableOpacity onPress={() => increment(index)}

                                                    style={{
                                                        alignItems: "center",
                                                        backgroundColor: COLORS.green_mid,
                                                        borderTopEndRadius: RFPercentage(3.5),

                                                    }}>

                                                    <Text style={styles.style_text_in_touchableopacity_toadd_to_cart}>+</Text>
                                                </TouchableOpacity>

                                                <Text numberOfLines={1} style={styles.style_number_in_touchableopacity}>{item.initial}</Text>

                                                <TouchableOpacity
                                                    onPress={() => decrement(index)}
                                                    style={{
                                                        alignItems: "center",
                                                        backgroundColor: COLORS.min_button,
                                                        borderTopStartRadius: RFPercentage(3.5),
                                                    }}>

                                                    <Text style={styles.style_text_in_touchableopacity_toadd_to_cart}>-</Text>

                                                </TouchableOpacity>

                                            </View>
                                        )
                                }


                            </View>

                        </View>

                    </>
                }
            />
        </>
    )
}


export default Firstflatlist;