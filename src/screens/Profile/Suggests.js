import React, { useState } from 'react';
import { ScrollView, TextInput, Text, View, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import { styles } from './StyleSuggests';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sizes, hp, wp } from '../../constants/themes';
import Large_button from '../../components/Large_button';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Suggests = () => {

    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (text) => {
        if (text.length < 10) {
            setError('برجاء ادخال اكتر من 10 احرف');
        } else {
            setError('');
        }

        setInputValue(text);
    };



    return (
        <>



            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <SafeAreaView style={styles.Basic_container}>


                    <View style={[styles.view_arrow_and_text_style]}>
                        <Back_arrow onPress={() => navigation.navigate("Profile_list")} />

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[styles.text_Bold_style]}>الشكاوي والاقتراحات</Text>
                        </View>

                    </View>
                    <View style={{ marginTop: RFPercentage(10) }}>
                        <TextInput
                            placeholder='اكتب الشكاوي والاقتراحات'
                            numberOfLines={4}
                            multiline={true}
                            onChangeText={handleInputChange}
                            value={inputValue}
                            style={{
                                textAlignVertical: "top",
                                padding: RFPercentage(3),
                                width: w * 0.9,
                                borderRadius: 15,
                                height: hp(25),
                                borderWidth: 2,
                                borderColor: COLORS.green_mid,
                                backgroundColor: COLORS.white,
                                fontFamily: FONT.font_Almarai_Regular,
                                alignSelf: "center",
                                justifyContent: "center",
                                fontSize: RFPercentage(2.5)
                            }}

                        />
                        {error ? <Text style={{ color: 'red', textAlign: "center", fontFamily: FONT.font_Almarai_Regular, fontSize: RFPercentage(2) }}>{error}</Text> : null}
                    </View>

                    <View style={{
                        marginTop: RFPercentage(10),
                        paddingTop: RFPercentage(4),
                        flexDirection: "row",
                        alignSelf: "center",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: w * 0.35,
                            borderWidth: RFPercentage(0.1),
                            backgroundColor: "#7070703A",
                            borderColor: "#707070"
                        }}></View>

                        <Text style={{
                            color: COLORS.black,
                            fontSize: RFPercentage(2),
                            justifyContent: "center",
                            textAlign: "center",
                            paddingHorizontal: hp(1.5),
                            fontFamily: FONT.font_Almarai_Bold
                        }}>أو اتصل بنا</Text>

                        <View style={{
                            width: w * 0.35,
                            borderWidth: RFPercentage(0.1),
                            backgroundColor: "#7070703A",
                            borderColor: "#707070"
                        }}></View>


                    </View>
                    <View style={{ flexDirection: "row", margin: RFPercentage(3) }}>
                        <Icon name="phone"size={hp(3)} style={{ alignSelf : "center", color: COLORS.black , justifyContent :"center" }} />
                        <Text style={{justifyContent :"center",alignSelf :"center",
                            marginHorizontal: RFPercentage(2), fontFamily: FONT.font_Almarai_Regular,
                            color: COLORS.green_mid, fontSize: RFPercentage(2.5)
                        }}> <Text style = {{fontSize : RFPercentage(3.5)}}>+ </Text>02 - 27365166</Text>
                    </View>



                        {/* navigation.navigate('Home') */}
                        <Large_button button_name="ارسال" Confirm_press={() => { }} />

                </SafeAreaView>


            </ScrollView>




        </>
    )


}

export default Suggests;