import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT, Sizes, images, } from '../../../constants';
import HeaderDeliveryAuth from '../../../components/HeaderDeliveryAuth';
// import { useFormik } from 'formik';
import { Text, View, Dimensions, Image,TouchableOpacity, ScrollView,PermissionsAndroid, Alert, ImageBackground } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../../constants/themes';
import Large_button from '../../../components/Large_button';
import Add_layer_icon from "../../../assets/Icons/add_layer.svg"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Icon from "react-native-vector-icons/FontAwesome5"
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { styles } from '../../voluntary/Style_Donate';
import { set } from 'react-native-reanimated';
import { shadow } from 'react-native-paper';

  

const Car_id_picture = () => {
  let options ={
    storageOptions:{
      saveToPhoto : true,
      mediaType :"photo"
    },
  };
  const[SheetOpen,setSheetOpen] = useState(false);
  const[frontSheetOpen,setFrontSheetOpen] = useState(false);
  const [frontDisabled , setfrontDisabled] = useState(false)
  const [backDisabled , setBackDisabled] = useState(false)

  const [back_image ,setBackImage] = useState(false);
  const [frontImage ,setFrontImage] = useState(false);
  const [ selectBackImage,setSelectBackImage] = useState("");
  const [ selectFrontImage,setSelectFrontImage] = useState("");
  const [hiddenFrontSheet,setHiddenFrontSheet] = useState(true)
  const [hiddenSheet,setHiddenSheet] = useState(true)

  // const openCamera = async () => {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //   );
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED){
  // const result = await launchCamera();  
  //   }
  // };

// const imagePicker = () =>{
//   launchCamera(options,response =>{
// //  const data = 
//  selectImage[response.assets[0].uri]
//   // console.log(response.assets[0].uri)
// })
// // setSelectImage(data)

// }

const  CameraFrontImagePicker =  async () => {
  await launchCamera(options, response => {
      if (response.assets && response.assets.length > 0) {
          setSelectFrontImage(response.assets[0].uri);

      }
      setFrontImage(true)
      setHiddenFrontSheet(true)
      // console.log(response.assets[0].uri)
  });
};
const  libraryFrontImagePicker =  async () => {
  await launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
          setSelectFrontImage(response.assets[0].uri);

      }
      setFrontImage(true)
      setHiddenFrontSheet(true)
      // console.log(response.assets[0].uri)
  });
};
const  CameraBackImagePicker =  async () => {
  await launchCamera(options, response => {
      if (response.assets && response.assets.length > 0) {
          setSelectBackImage(response.assets[0].uri);

      }
      setBackImage(true)
      setHiddenSheet(true)
      // console.log(response.assets[0].uri)
  });
};
const  backImagePickero =  async () => {
  await launchCamera(options, response => {
      if (response.assets && response.assets.length > 0) {
          setSelectBackImage(response.assets[0].uri);

      }
      setBackImage(true)
      setHiddenSheet(true)
      // console.log(response.assets[0].uri)
  });
};

const  libraryBackImagePicker =  async () => {
  await launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
          setSelectBackImage(response.assets[0].uri);

      }
      setBackImage(true)
      setHiddenSheet(true)
      // console.log(response.assets[0].uri)
  });
};
    const w = Dimensions.get("screen").width

    return (
        <>





            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView >
                    <HeaderDeliveryAuth namePage=" صورة الرخصة" show={false}  back={true}/>

                    <View style={{ 
                      // justifyContent: "space-around", 
                      alignSelf:"center",
                      // ,height:hp(10),
          marginTop: RFPercentage(2)
          
          }}>

            <Text style={{ alignSelf: "center",
            textAlign :"center" , 
            color: COLORS.black, 
            fontFamily: FONT.font_Almarai_Regular,
            marginTop:RFPercentage(2),
            marginBottom:RFPercentage(2),
            fontSize: RFPercentage(2.6)}}>التقط صورة لرخصة السيارة الأمامية  
            
            </Text>
            <Text
              style={{ alignSelf: "center",
               color: COLORS.gray_mid,
               fontFamily: FONT.font_Almarai_Regular,
textAlign:"center",
lineHeight:RFPercentage(4),
fontSize: RFPercentage(2.6) }} 
>يجب ان تكون صوره اصلية وواضحه وليست نسخه مصورة تأكد أن تكون جميع المعلومات واضحة وأن الرخصة سارية وليست منتهية </Text>
         
        </View>
        {frontImage  ?
        <>
        <View 
        
        // onMouseMove={()=>{console.log("sa")}}
        style={{alignItems:"center",justifyContent:"center",marginVertical:RFPercentage(3)}}>

          <ImageBackground source={{uri:selectFrontImage}} style={{width :Sizes.width*0.7,
            height:Sizes.height*0.22}}>
                <TouchableOpacity onPress={()=>{
                  setFrontImage(false)
                }}>
                  
                          <Icon name='times' style={{
                            padding :RFPercentage(1),
                            alignSelf:"flex-start" ,
                          shadowColor:"#fff",shadowOpacity:0.4,elevation:5
                          }} size={25} color={COLORS.red_logout}/>
                </TouchableOpacity >

            </ImageBackground>
        </View>

        </> : <>
        
        <View style={[,{alignItems:"center",
         shadowColor: COLORS.black,
        //  elevation: 4,
         shadowOpacity: .5,
        justifyContent:"center",
        marginVertical:RFPercentage(3),
        alignSelf:"center",
        width :Sizes.width*0.7,
            height:Sizes.height*0.22,
            // borderRadius :RFPercentage(4),
            borderWidth:1,
            borderColor : COLORS.green_mid
}]}>
         <TouchableOpacity 
         disabled = {frontDisabled}
         onPress={()=>{
          setfrontDisabled(true)
           setHiddenFrontSheet(false)
           setFrontSheetOpen(true)
           setHiddenSheet(true)
         }}> 
         <Add_layer_icon width ={50} height={50} />
         </TouchableOpacity>
        </View>
        </>}

        {back_image  ?
        <>
        <View style={{alignItems:"center",justifyContent:"center",marginVertical:RFPercentage(3)}}>
          <ImageBackground source={{uri:selectBackImage}} style={{width :Sizes.width*0.7,
            height:Sizes.height*0.22}}>
               <TouchableOpacity onPress={()=>{
                  setBackImage(false)
                }}>
                  
                          <Icon name='times' style={{
                            padding :RFPercentage(1),
                            alignSelf:"flex-start" ,
                          shadowColor:"#fff",shadowOpacity:0.4,elevation:5
                          }} size={25} color={COLORS.red_logout}/>
                </TouchableOpacity >

            </ImageBackground>
        </View>

        </> : <>
        
        <View style={[,{alignItems:"center",
         shadowColor: COLORS.black,
        //  elevation: 4,
         shadowOpacity: .5,
        justifyContent:"center",
        marginVertical:RFPercentage(3),
        alignSelf:"center",
        width :Sizes.width*0.7,
            height:Sizes.height*0.22,
            // borderRadius :RFPercentage(4),
            borderWidth:1,
            borderColor : COLORS.green_mid
}]}>
         <TouchableOpacity 
         disabled = {backDisabled}
         onPress={()=>{
          setHiddenSheet(false)
          setSheetOpen(true)
          setHiddenFrontSheet(true)
          setBackDisabled(true)
          // backImagePicker()
        }}
          > 
         <Add_layer_icon width ={50} height={50} />
         </TouchableOpacity>
        </View>
        </>}        
        
        <Large_button button_name="تأكيد"  
          Confirm_press={()=> 
            {imagePicker()}}
             />
  {
    hiddenSheet? 
    <>
    
    </> : <>
    <View style={{alignSelf:"center",width:w,alignItems:"center",justifyContent:"center",alignSelf:"center"}}>

    <BottomSheet
   
    isOpen ={SheetOpen}
    wrapperStyle={{
      width:w*0.9,
alignSelf:"center",
backgroundColor:COLORS.green,
    }}
    outerContentStyle={{backgroundColor:COLORS.white,
      alignSelf:"center"
    }}
    innerContentStyle ={{flex:1,width:w}}
    sliderMunHeight={0} onOpen={()=>{
      setSheetOpen(true);
      setBackDisabled(true)
      
                // console.log("dadad")
                }} 
                onClose = {()=>{
                    // console.log("Close") ;
              setHiddenSheet(true)
              setBackDisabled(false)
              
              }}
                >
                  <TouchableOpacity
                  onPress={()=>{CameraBackImagePicker()}}
                  style={{
                    // flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    padding:RFPercentage(2),
                  // width:w*0.8,
                  borderBottomColor:COLORS.green_mid,borderBottomWidth:1,
  justifyContent:"center",
  alignItems:"center"}}>
  <Text style={{
                     color:COLORS.gray_dark,
                     fontSize:RFPercentage(2.5),
    fontFamily:FONT.font_Almarai_Bold}}>التقاط صورة</Text>
</TouchableOpacity>

<TouchableOpacity
                  onPress={()=>{libraryBackImagePicker()}}


style={{
                    // flex:1,
                  borderTopColor:COLORS.green_mid,
                  borderTopWidth:1,
                    padding:RFPercentage(2),
                  // width:w*0.9,
                  borderBottomColor:"#CCC",
                  // borderBottomWidth:1,
  justifyContent:"center",
  alignItems:"center"}}>
  <Text style={{
                     color:COLORS.gray_dark,
                     fontSize:RFPercentage(2.5),
    fontFamily:FONT.font_Almarai_Bold}}>معرض الصور</Text>
</TouchableOpacity>
      </BottomSheet>
      </View>

    </>
  }

{
    hiddenFrontSheet? 
    <>
    
    </> : <>
    <View style={{alignSelf:"center",width:w,alignItems:"center",justifyContent:"center",alignSelf:"center"}}>

    <BottomSheet
   
    isOpen ={frontSheetOpen}
    wrapperStyle={{
      width:w*0.9,
alignSelf:"center",
backgroundColor:COLORS.green,
    }}
    outerContentStyle={{backgroundColor:COLORS.white,
      alignSelf:"center"
    }}
    innerContentStyle ={{flex:1,width:w}}
    sliderMunHeight={0} onOpen={()=>{setFrontSheetOpen(true);
                // console.log("dadad")
                }} 
                onClose = {()=>{
                  setfrontDisabled(false)
                  setfrontDisabled(false)
                  // console.log("Close") ;
              setHiddenFrontSheet(true)
              }}
                >
                  <TouchableOpacity
                  onPress={()=>{CameraFrontImagePicker()}}
                  style={{
                    // flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    padding:RFPercentage(2),
                  // width:w*0.8,
                  borderBottomColor:COLORS.green_mid,borderBottomWidth:1,
  justifyContent:"center",
  alignItems:"center"}}>
  <Text style={{
                     color:COLORS.gray_dark,
                     fontSize:RFPercentage(2.5),
    fontFamily:FONT.font_Almarai_Bold}}>التقاط صورة</Text>
</TouchableOpacity>

<TouchableOpacity
                  onPress={()=>{libraryFrontImagePicker()}}


style={{
                    // flex:1,
                  borderTopColor:COLORS.green_mid,
                  borderTopWidth:1,
                    padding:RFPercentage(2),
                  // width:w*0.9,
                  borderBottomColor:"#CCC",
                  // borderBottomWidth:1,
  justifyContent:"center",
  alignItems:"center"}}>
  <Text style={{
                     color:COLORS.gray_dark,
                     fontSize:RFPercentage(2.5),
    fontFamily:FONT.font_Almarai_Bold}}>معرض الصور</Text>
</TouchableOpacity>
      </BottomSheet>
      </View>

    </>
  }
  

                </ScrollView>
            </SafeAreaView>
            
        </>
    )


}

export default Car_id_picture