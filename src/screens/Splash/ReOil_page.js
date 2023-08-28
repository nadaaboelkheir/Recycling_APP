import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import { COLORS, FONT, images, lotties } from '../../constants';
import { hp } from '../../constants/themes';
import { Text, View } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, StatusBar } from 'react-native';


const Reoil = () => {
  const navigation = useNavigation();


  const WaitingList = async () => {
    let isfirst = await AsyncStorage.getItem("isfirst");
    isfirst = isfirst ? JSON.parse(isfirst) : true ;
    const token = await AsyncStorage.getItem("accessToken") || null;

    if (isfirst) {
      navigation.replace("Intro_slider")
    } else if (token) {
      navigation.replace("Home")
    } else {
      navigation.replace("Auth",{
        screen : "Tologin"
      })
    
    }

  }




  useEffect(() => {
    setTimeout(() => {
      WaitingList()
      // navigation.replace(firstTime ? 'Intro_slider' : (sign ? 'Home' : 'Auth'))
    }, 3500);
  }, [])


  return (
    <>
    <StatusBar  barStyle={'dark-content'} />
      <SafeAreaProvider style={{ alignItems :"center" , backgroundColor: COLORS.white, justifyContent: "center" }}>
       
         {/* backgroundColor: COLORS.yellow, green_mid */}
        <Lottie style={{ width: hp(35), height: hp(35), alignSelf: "center" }}
          source={lotties.Reoil} autoPlay loop />
          {/* <Image source={images.LOGO} style = {{width : hp(40) , height : hp(40)}} /> */}
        <Text style={{ alignSelf: "center", color: COLORS.green_mid, fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(6) }} >
          RE<Text style={{ alignSelf: "center", color: COLORS.green_mid, fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(5) }} >-Oil</Text ></Text>
      </SafeAreaProvider>


    </>

  );
}
export default Reoil;