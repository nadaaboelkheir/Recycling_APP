import React , {useState } from "react"
import {View,SafeAreaView,Text,ImageBackground,Dimensions} from "react-native"
import { COLORS,FONT,images,Sizes } from "../../constants"
import { Image } from "react-native-animatable"
import { RFPercentage } from "react-native-responsive-fontsize"
import Large_button from "../../components/Large_button"
const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width
const Select_user = () => {
return(
<>
<SafeAreaView style={{flex:1,background : COLORS.white}}>
<View style ={{flex:1 , backgroundColor:COLORS.white , alignItems:"center"}}>
 <Image style ={{ width :w*0.9,height :h*0.6}} source={images.Select_user}/>
<Text style = {{fontFamily:FONT.font_Almarai_Bold,color : COLORS.black,fontSize:RFPercentage(2.5)}}>تسجيل الدخول أو إنشاء حساب </Text>
<View style={{marginVertical : RFPercentage(3)}}><Large_button button_name="مسخدم"/>
</View>

<Large_button button_name="مندوب"/>

</View>
</SafeAreaView>
</>
);

}
export default Select_user;