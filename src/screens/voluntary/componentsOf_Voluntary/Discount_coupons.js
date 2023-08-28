
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StatusBar,TextInput,TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp ,Sizes } from '../../constants/themes';
import { styles } from './Style_Donate';
import { useNavigation } from '@react-navigation/native';
import EditSvg from "../../assets/Icons/edit.svg"



const Discount_coupons = () => {




    const CurrentPoints = 3000


    const [points, setPoints] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [inputValue, setInputValue] = useState('');

    const onChangeText = (text) => {
        setInputValue(text);
        setErrorMessage('');
        if (isNaN(Number(text))) {
            setInputValue('');
            setErrorMessage('برجاء ادخال رقم');
        } else if (Number(text) > CurrentPoints * 1) {
            setInputValue('');
            setErrorMessage('برجاء ادخال عدد نقاط اقل من عدد نقاطك ');
        }
    };



    return (
        <>

            <SafeAreaView style={styles.Basic_container}>

            <StatusBar hidden={true} />
            <View style={{ flex: 1, backgroundColor: COLORS.white ,padding: RFPercentage(2)}}>
                        <View style={{ width: Sizes.width * .6, 
                            flexDirection: "row",
                             justifyContent: "space-between",
                             alignItems: "center" }}>
                            <Back_arrow />
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, 
                                color: COLORS.black, fontSize: RFPercentage(3) }}>كوبونات الخصم</Text>

                        </View>
                        
                        {/* <View style={{ justifyContent: "space-around", flexDirection: "row" }}> */}
                    {/* <View style={{ alignItems: "center", alignSelf: "center" }}> */}

                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.green_light,
                             flexDirection: "row", 
                            justifyContent: "space-between",
                             padding: hp(2.3)
                            , borderRadius: 10,
                             width: w * .94,
                            marginTop : hp(10)
                        }]}>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold,
                                 fontSize: RFPercentage(2.5), color: COLORS.black }}>النقط الخاصه بك</Text>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold,
                                 fontSize: RFPercentage(2.5), 
                                 color: COLORS.green_mid }}>{CurrentPoints}</Text>
                        {/* </View> */}
{/* </View> */}
                        </View>
                    

                        <View style={[styles.shadowProp, ,
                     { backgroundColor: COLORS.white, alignSelf: "center", 
                     borderRadius: 10, margin: 10, padding: hp(2), width: w * 0.92, 
                     flexDirection: "row", alignItems: "center" ,justifyContent:"space-between"}]}>

                {/* <View style={{width:Sizes.width*0.90,height :Sizes.height*0.16 , 
                    borderWidth:1,
                    borderRadius:12,
                    borderColor:COLORS.green_mid,
                    flexDirection:"row"
                    ,alignItems:"center",
                    elevation:0.5   
                    }}> */}
                        {/* image_containner */}
                       <View style={{ 
                    width:RFPercentage(10) ,
                     height:RFPercentage(8),
                          justifyContent:"center",
                          alignItems:"center" 
                        //   borderWidth:1
                        ,right:RFPercentage(3)

                          }}> 
                <Image source={require("../../assets/Images/type_oil.png")}
                 resizeMode="center"
                  />
</View>

{/* text_plus_min_button */}


<View style={{ 
    // padding:RFPercentage(1),
    // maxWidth :Sizes.width*0.4,
    // alignSelf:"flex-start",
    // flexDirection:"row" ,
    // alignItems:"",
    height:RFPercentage(12),
justifyContent:"space-between",
    //  borderWidth:1 ,
    //  width : Sizes.width*0.
right:RFPercentage(2),
// alignSelf:"center"
     }}>
<Text numberOfLines={1}
style={{  
fontSize:RFPercentage(3),
fontFamily:FONT.font_Almarai_Bold,
color:COLORS.green_mid,    
// width : Sizes.width*0.45,
// alignSelf:"flex-start"
}}
>ماكدونلز خصم 25%</Text>
<Text numberOfLines={1}
style={{  
fontSize:RFPercentage(3),
fontFamily:FONT.font_Almarai_Bold,
color:COLORS.green_mid, 
// top : hp(1),

// width : Sizes.width*0.45,
alignSelf : "flex-start"
}}
>نقطة 100</Text>

                    </View>
<View style = {{justifyContent :"space-between",
height:RFPercentage(12),
// padding :hp(0.5),
// alignItems:"flex-start",
// right : RFPercentage(4),
// borderWidth :1
}}>
<View style={{
    // flexDirection:"row"
     }}>
    <Text style={{
    color :COLORS.black ,
    fontFamily : FONT.font_Almarai_Bold,
    fontSize:RFPercentage(3),
    }} numberOfLines={1}>لم يستخدم </Text>
   

</View>
<View style={{flexDirection:"row" ,
 alignItems :"center",
 justifyContent:"space-between"
//  width :RFPercentage(12)
 ,
 
//  top :RFPercentage(-2)
//  padding :hp(1)}
 } }>
<TouchableOpacity>
    <EditSvg style = {{right :RFPercentage(1)}} 
    width ={RFPercentage(3)} 
    height = {RFPercentage(4)}  />
</TouchableOpacity>
    <TouchableOpacity>
    <Text style={{
    color :COLORS.red_logout ,
    fontFamily : FONT.font_Almarai_Bold,
    fontSize:RFPercentage(3)
    ,
    
    right :RFPercentage(1)
     }} numberOfLines={1}>تعديل </Text>
     </TouchableOpacity>
 </View>


</View>
</View>



                        </View>


            </SafeAreaView>






        </>
    );
};

export default Discount_coupons;
