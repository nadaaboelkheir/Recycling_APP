import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT, Sizes, images } from '../../../constants';
import HeaderDeliveryAuth from '../../../components/HeaderDeliveryAuth';
// import { useFormik } from 'formik';
import { Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../../constants/themes';
import Large_button from '../../../components/Large_button';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import INputbutton from '../../../components/INputbutton';





const Forget_delivery_password = () => {

    const w = Dimensions.get("screen").width

    const [checked, setChecked] = useState(false);

    // const handleCheck = () => {
    //     setChecked(!checked);
    // };
    
  const CELL_COUNT = 4;
  //   const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    return (
        <>





            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView>
                    <HeaderDeliveryAuth namePage="نسيت كلمة المرور" show={false}  back={true}/>

                    <View style={{ 
                      justifyContent: "space-around", 
                      alignSelf:"center"
                      ,height:hp(10),
          marginTop: RFPercentage(10)
          
          }}>

            <Text style={{ alignSelf: "center",
            textAlign :"center" , 
            color: COLORS.black, 
            fontFamily: FONT.font_Almarai_Regular,
            fontSize: RFPercentage(2.6)}}> سوف نرسل رمزاً لبريدك الخاص 
            
            </Text>
            <Text
              style={{ alignSelf: "center", color: COLORS.black,
               fontFamily: FONT.font_Almarai_Regular,
               alignSelf:"center",
                fontSize: RFPercentage(2.6) }}>لإعادة تعيين رقمك السري</Text>

          </View>
          {/* <SafeAreaView style={styles.root}> */}
          <View>
           {/* </SafeAreaView> */}
           <View style={{marginVertical:RFPercentage(4)}}>

           </View>
<INputbutton label="البريد الإلكتروني أو رقم الهاتف" />
       
          <Large_button button_name="إرسال" 
        //   Confirm_press={()=> 
        //     navigation.navigate("Password_reset_page")}
             />

        </View>

                </ScrollView>
            </SafeAreaView>



        </>
    )


}

export default Forget_delivery_password;