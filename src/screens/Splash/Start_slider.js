import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text } from 'react-native';
import { COLORS, FONT, lotties } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../constants/themes';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AuthStack from '../../navigations/AuthStack';


const Start_slider = () => {

    const navigation = useNavigation();

    const slides = [
        {
            key: 1,
            title: 'إعادة تدوير الزيت',
            text: 'حافظ علي البيئه من خلال تبديل الزيت المستعمل بنقاط من خلالنا تستطيع من خلالها التبرع بها او شراء منتجات او الحصول علي كوبونات خصم',
            image: lotties.green,
        },
        {
            key: 2,
            title: 'إعادة تدوير الزيت',
            text: 'حافظ علي البيئه من خلال تبديل الزيت المستعمل بنقاط من خلالنا تستطيع من خلالها التبرع بها او شراء منتجات او الحصول علي كوبونات خصم',
            image: lotties.ecology,
        },
        {
            key: 3,
            title: 'إعادة تدوير الزيت',
            text: "حافظ علي البيئه من خلال تبديل الزيت المستعمل بنقاط من خلالنا تستطيع من خلالها التبرع بها او شراء منتجات او الحصول علي كوبونات خصم",
            image: lotties.green,
        }
    ];

    const [showRealApp, setshowRealApp] = useState(true)

    renderSlides = ({ item }) => {
        return (
            <>
                <View style={{ alignItems: "center", justifyContent: "center", margin: RFPercentage(4) }}>
                    <Lottie style={{ width: hp(34.8), marginVertical: RFPercentage(4), height: hp(34.8), alignSelf: "center", justifyContent: "center" }}
                        source={item.image} autoPlay loop />
                    <Text style={{ fontFamily: FONT.font_Almarai_Bold, marginVertical: RFPercentage(2), fontSize: RFPercentage(4), color: COLORS.green_mid }} >{item.title}</Text>
                    <Text style={{ fontFamily: FONT.font_Almarai_Bold, lineHeight: 30, marginVertical: RFPercentage(2), letterSpacing: 2, fontSize: RFPercentage(3), textAlign: "center", color: "#000" }} >{item.text}</Text>
                </View>
            </>
        );
    }



    const renderDoneButton = () => (
        <View style={{
            backgroundColor: COLORS.green_mid, width: hp(15),
            borderRadius: RFPercentage(3),
        }}>
            <Text style={{
                fontFamily: FONT.font_Almarai_Bold, textAlign: "center",
                fontSize: RFPercentage(3), padding: RFPercentage(1.5),
                color: COLORS.white
            }}>تم</Text>
        </View>
    );

    const renderSkipButton = () => (
        <View style={{
            backgroundColor: COLORS.green_mid, width: hp(15),
            borderRadius: RFPercentage(3),
        }}>
            <Text style={{
                fontFamily: FONT.font_Almarai_Bold, textAlign: "center",
                fontSize: RFPercentage(3), padding: RFPercentage(1.5),
                color: COLORS.white
            }}>تخطي</Text>
        </View>
    );


    const renderNextButton = () => (
        <View style={{
            backgroundColor: COLORS.green_mid, width: hp(15),
            borderRadius: RFPercentage(3),
        }}>
            <Text style={{
                fontFamily: FONT.font_Almarai_Bold, textAlign: "center",
                fontSize: RFPercentage(3), padding: RFPercentage(1.5),
                color: COLORS.white
            }}>التالي</Text>
        </View>
    );





    return (

        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                {showRealApp ?
                    <AppIntroSlider
                    style = {{flex : 0.9}}
                        dotStyle={{ flexDirection: "column", width: hp(2.2), height: hp(2.2), borderRadius: RFPercentage(1.1), backgroundColor: COLORS.gray_light }}
                        activeDotStyle={{ width: hp(2.2), height: hp(2.2), borderRadius: RFPercentage(1.1), backgroundColor: COLORS.green_mid }}
                        renderSkipButton={renderSkipButton}
                        renderDoneButton={renderDoneButton}
                        renderNextButton={renderNextButton}
                        showSkipButton={true}
                        data={slides}
                        onDone={() => navigation.replace('Auth')}
                        onSkip={() => (setshowRealApp(false))}
                        renderItem={renderSlides}
                    >

                    </AppIntroSlider>

                    :
                 
                    <AuthStack/>
                }
            </SafeAreaView>
        </>
    )


}

export default Start_slider;