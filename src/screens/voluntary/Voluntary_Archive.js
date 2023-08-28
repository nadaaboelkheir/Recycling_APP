import React, { useCallback, useEffect, useState } from "react"
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Back_arrow from '../../components/Back_arrow';
import { styles } from './Style_Voluntary_Archive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants";
import { FONT, hp } from "../../constants/themes";
import { RFPercentage } from "react-native-responsive-fontsize";
import { getdonation } from "../../Redux/Reducers/DonationSlice";



const Voluntary_Archive = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation();
    useFocusEffect(
        useCallback(() => {
            dispatch(getdonation());
        }, [dispatch])
    );

    // useEffect(() => {
    //     dispatch(getdonation());
    // }, [dispatch])


    const { ALL_Donations } = useSelector((state) => state.donation);

    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={[styles.view_arrow_and_text_style]}>
                    <Back_arrow onPress={() => navigation.goBack()} />
                    <View>
                        <Text style={[styles.text_Bold_style, { textAlign: "center" }]}>أرشيف التبرعات</Text>
                    </View>
                </View>

                <FlatList
                    data={ALL_Donations.donations}
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.white,
                            borderRadius: 10,
                            margin: 5,
                            padding: RFPercentage(1),
                            flexDirection: "row",
                            alignItems: "center"
                        }]}>
                            <Image
                                source={{ uri: item.charityImageUri }}
                                resizeMode='center'
                                style={{ backgroundColor: "#fff", width: hp(14), height: hp(14) }}
                            />

                            <View style={{ marginLeft: 10, maxWidth: RFPercentage(35) }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.6) }}>{item.charityName}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.3) }}>التاريخ:<Text style={{ fontFamily: FONT.font_Almarai_Regular, justifyContent: "center", color: COLORS.gray_dark, fontSize: RFPercentage(2.3) }}>{item.createdAt}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFPercentage(2.4) }}>نقطة {item.points}</Text>
                            </View>
                        </View>
                    )}
                />
            </SafeAreaView>



        </>
    )


}


export default Voluntary_Archive;