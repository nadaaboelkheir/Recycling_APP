import { useState } from 'react';
import * as React from 'react';
import { ScrollView, Dimensions, Image, TouchableOpacity, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// import { RadioButton } from 'react-native-paper';
const w = Dimensions.get("screen").width


const Choose_language_page = (props) => {
    const navigation = useNavigation();
   
    const LANGUAGE_OPTIONS = [
        { label: 'اللغة العربية', value: 'ar' },
        { label: 'English', value: 'en' },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [checked, setChecked] = useState(false);

    const handleLanguagePress = (value) => {
        setSelectedLanguage(value);
        setChecked(!checked)
    };




    return (
        <>
            <StatusBar backgroundColor={COLORS.black} />

            <ScrollView style={{ backgroundColor: COLORS.white }}>

                <SafeAreaView style={styles.Basic_container}>

                    <View style={styles.view_arrow_and_text_style}>

                        <Back_arrow onPress={() => navigation.navigate("Profile_list")}  />


                        <View>
                            <Text style={styles.text_title_name}>اختار اللغه</Text>
                        </View>


                    </View>

                    <View style={styles.container}>
                        {LANGUAGE_OPTIONS.map(({ label, value }) => (
                            <TouchableOpacity
                                key={value}
                                onPress={() => handleLanguagePress(value) && setChecked(!checked)}
                                style={[
                                    styles.touchableopacity_style,
                                    selectedLanguage === value && styles.selectedButton,
                                ]}>

                                <View style={styles.view_outter}>
                                    {checked === true ? <View style={styles.view_inner}></View> : null}
                                </View>

                                {/* <View style={styles.view_inner}></View> */}
                                <Text style={styles.buttonText}>{label}</Text>
                            </TouchableOpacity>
                        ))}


                    </View>
                    <View style={{ marginTop: RFPercentage(4) }}>
                        <Large_button button_name="تأكيد"  />
                    </View>
                </SafeAreaView>


            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        alignContent: "center",
        backgroundColor: COLORS.white,
    }, text_title_name: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: RFPercentage(3.5),
        textAlign: "center",
        justifyContent: "center",
        width: w * 0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, touchableopacity_style: {
        backgroundColor: COLORS.white
        , padding: RFPercentage(3.1),
        flexDirection: "row",
        margin: RFPercentage(2),
        borderWidth: 2,
        borderRadius: RFPercentage(1.5)

    },

    button: {
        width: '80%',
        height: RFPercentage(8),
        backgroundColor: COLORS.gray_light,
        borderRadius: RFPercentage(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: RFPercentage(2),
    },
    selectedButton: {
        backgroundColor: COLORS.green_mid,
    },
    buttonText: {
        marginHorizontal: RFPercentage(2),
        fontSize: RFPercentage(2.5),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.black,
    },
    disabledSubmitButton: {
        backgroundColor: COLORS.gray_light,
    },
    submitButtonText: {
        fontSize: RFPercentage(2.5),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.white,
    },
    view_outter: {
        backgroundColor: '#ddd',
        width: 25,
        height: 25,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_inner: {
        backgroundColor: COLORS.green_mid,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 15,
        height: 15,
        borderRadius: 8,
    },
})

export default Choose_language_page;