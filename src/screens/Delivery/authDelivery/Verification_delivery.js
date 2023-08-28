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





const Verifecation_delivery = () => {

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
                    <HeaderDeliveryAuth namePage=" رمز التأكيد" show={false}  back={true}/>

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
            fontSize: RFPercentage(2.6)}}> أدخل الرمز المكون من 4 أرقام الذي
            
            </Text>
            <Text
              style={{ alignSelf: "center", color: COLORS.black,
               fontFamily: FONT.font_Almarai_Regular,
               alignSelf:"baseline",
                fontSize: RFPercentage(2.6) }}>  ارسلناه إلي  <Text style={{ fontSize: RFPercentage(2),
                 color: COLORS.green_mid,fontFamily:FONT.font_Almarai_Bold }}>nadaabo5@gmail.com</Text></Text>

          </View>
          {/* <SafeAreaView style={styles.root}> */}
          <View>
            <CodeField
            
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={{ padding:RFPercentage(4), justifyContent: "space-around", flexDirection: "row",marginVertical:RFPercentage(4) }}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text 
                  key={index}
                  style={[ {
                    borderRadius: RFPercentage(1),
                    width: 50,
                    height: 60,
                    lineHeight: 38,
                    fontSize: 24,
                    borderWidth: 2,
                    marginHorizontal: RFPercentage(1),
                    borderColor: COLORS.gray_ofwhite,
                    textAlign: 'center',
                    color : COLORS.black
                  } , isFocused &&  {
                    borderColor: COLORS.green_mid,
                  }]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          {/* </SafeAreaView> */}

          <Text style={{
            alignSelf: "center", marginBottom: RFPercentage(5),fontSize:RFPercentage(2.6),
            fontFamily: FONT.font_Almarai_Regular, color: COLORS.gray_mid
          }}>الم تستلم الرمز ؟ <Text style={{ fontFamily: FONT.font_Almarai_Bold, 
          color: COLORS.green_mid ,fontSize :RFPercentage(2.6)}}>أرسل مرة أخري</Text></Text>
          <Large_button button_name="تأكيد" 
        //   Confirm_press={()=> 
        //     navigation.navigate("Password_reset_page")}
             />

        </View>

                </ScrollView>
            </SafeAreaView>



        </>
    )


}

export default Verifecation_delivery;