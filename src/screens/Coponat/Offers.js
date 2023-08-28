import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, TextInput, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import { COLORS, FONT, Sizes, hp, wp, } from '../../constants/themes';
import { Copones } from '../../Utils/DummyData';
import { styles } from './Style_Offers';
import Bag from "../../../src/assets/Icons/Bag.svg"
import Search from "../../../src/assets/Icons/search_icone.svg"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Flatlist_Copones from './Flatlist_Copones';
import PlusSvg from "../../assets/Icons/plus.svg";
import MinusSvg from "../../assets/Icons/minus.svg";
const Offers = () => {

    const navigation = useNavigation();
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const [data, setdata] = useState(Copones)

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const [number, setnumber] = useState(0)

    useEffect(() => {
        fun()
    }, [data])

    const fun = () => {
        let counter = 0
        for (i = 0; i < data.length; i++) {
            counter += data[i].quantity
        }
        setnumber(counter)
    }

    const increment = (index) => {
        const updatedData = [...data];
        updatedData[index].quantity += 1;
        setdata(updatedData);
    };

    const decrement = (index) => {
        const updatedData = [...data];
        if (updatedData[index].quantity > 0) {
            updatedData[index].quantity -= 1;
            setdata(updatedData);
        }
    };

    const filteredData = data.filter(item => item.name.includes(searchQuery));

     const handleNextPage = () => {
        const filteredData = data.filter(item => item.quantity > 0);
        navigation.navigate("Checkoffers", { data: filteredData });
      };
      
    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>


                    <Back_arrow onPress={() => navigation.goBack()} />
                    <View>
                        <Text style={{
                            fontSize: RFPercentage(4),
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.white,
                        }}>العروض</Text>
                    </View>
                    {/* navigation.navigate("Coupon_code") */}
                    <TouchableOpacity onPress={handleNextPage}  >
                        <Bag onPress={() => { }} height={hp(6)} width={wp(12)} fill="#fff" />
                        {number > 0 ? <View style={{
                            height: hp(3.7), width: hp(3.7),
                            backgroundColor: COLORS.min_button, borderRadius: 20,
                            justifyContent: "center"
                            , alignItems: "center", position: "absolute", top: -5, left: -5
                        }} >
                            <Text style={{ color: COLORS.gray_dark, fontSize: RFPercentage(2) }} >{number}</Text>
                        </View> : null}
                    </TouchableOpacity>


                </View>




                <View style={styles.white_container}>


                    <View style={[{
                        borderWidth: 2,
                        borderColor: COLORS.green_mid,
                        borderRadius: 10,
                        marginBottom: 5,
                        width: w * 0.9,
                        flexDirection: "row"
                        , justifyContent: "space-between"
                    }]}>
                        <TextInput
                            style={{
                                color: COLORS.text_color,
                                width: w * 0.75,
                                padding: hp(1.5),
                                fontSize: RFPercentage(2.5),
                                fontFamily: FONT.font_Almarai_Regular,
                            }}

                            onChangeText={handleSearch}
                            value={searchQuery}
                            placeholder="ابحث عن عروض الكوبونات"
                            placeholderTextColor={COLORS.text_color}
                        />
                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.green_mid
                            , alignItems: "center", justifyContent: "center", borderRadius: 6
                        }]}>
                            <Search height={hp(4.8)} width={wp(14)} fill="#fff" />
                        </View>

                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        contentContainerStyle={{ marginBottom: RFPercentage(20) }}
                        numColumns={1}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <>
                                <View key={index} style={{ alignItems: "center" }}>
                                    <View style={[styles.shadowProp, {
                                        backgroundColor: COLORS.white,
                                        height: hp(16),
                                        width: w * 0.9,
                                        alignSelf: "center",
                                        borderRadius: RFPercentage(2),
                                        margin: 10,
                                        // padding: hp(3),
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-around"
                                    }]}>
                                        <Image
                                            source={item.image}
                                            style={{
                                                backgroundColor: "#fff",
                                                width: hp(12),
                                                height: hp(12),
                                            }}
                                        />

                                        <View style={{
                                            width: wp(60),
                                            maxWidth: wp(60),
                                            justifyContent: "center",
                                        }}>
                                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                                <Text style={{
                                                    fontFamily: FONT.font_Almarai_Bold,
                                                    color: COLORS.black,
                                                    fontSize: RFPercentage(2.5),
                                                    padding: RFPercentage(1),
                                                }}>{item.name}</Text>
                                                <Text style={{
                                                    fontFamily: FONT.font_Almarai_Bold,
                                                    color: COLORS.green_mid,
                                                    fontSize: RFPercentage(2.3),
                                                    padding: RFPercentage(1)
                                                }}>نقطة {item.number_points}</Text>
                                            </View>

                                            {item.quantity === 0 ? (
                                                <>

                                                    <TouchableOpacity
                                                        onPress={() => increment(index)}
                                                        style={{
                                                            backgroundColor: COLORS.green_mid,
                                                            width: hp(15),
                                                            padding: RFPercentage(1.4),
                                                            borderRadius: 15
                                                        }}>
                                                        <Text style={{
                                                            textAlign: "center",
                                                            fontSize: RFPercentage(2.4),
                                                            color: COLORS.white,
                                                            fontFamily: FONT.font_Almarai_Regular
                                                        }}>  بدل الان </Text>
                                                    </TouchableOpacity>

                                                </>
                                            ) : (
                                                <>
                                                    <View
                                                        style={{
                                                            height: RFPercentage(10),
                                                            maxWidth: Sizes.width * 0.4,
                                                            alignSelf: "flex-start",
                                                            flexDirection: "row",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        }}
                                                    >
                                                        <TouchableOpacity
                                                            style={styles.shadowProp}
                                                            onPress={() => increment(index)}
                                                        >
                                                            <PlusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
                                                        </TouchableOpacity>
                                                        <Text
                                                            style={{
                                                                color: COLORS.black,
                                                                fontFamily: FONT.font_Almarai_Bold,
                                                                fontSize: RFPercentage(2.5),
                                                                maxWidth: Sizes.width * 0.2
                                                            }}
                                                            numberOfLines={1}
                                                        >
                                                            {item.quantity}
                                                        </Text>
                                                        <TouchableOpacity
                                                            style={styles.shadowProp}
                                                            onPress={() => decrement(index)}
                                                        >
                                                            <MinusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </>
                                            )}
                                        </View>
                                    </View>


                                    {/* </View> */}

                                </View>

                            </>
                        )}
                    />


                </View>


            </SafeAreaView>



        </>
    )


}

export default Offers;