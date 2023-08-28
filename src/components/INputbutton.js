
import { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, StatusBar, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';


import { COLORS, FONT, Sizes } from '../constants/index';
import { hp } from '../constants/themes';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const INputbutton = ({
    label, value, placeholder, keyboardType, secureTextEntry, onChangeText, errors, touched
}) => {




    return (
        <>
            <StatusBar backgroundColor={COLORS.black} />

            <TextInput

                style={{
                    margin: RFPercentage(0.5),
                    width: Sizes.width * 0.85,
                    fontSize: RFPercentage(2.5),
                    fontFamily: FONT.font_Almarai_Regular,
                    color: "#635B5B",
                    alignSelf: "center",
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    paddingBottom: hp(1),
                    paddingHorizontal: hp(1)
                }}

                label={<Text style={{
                    fontSize: RFPercentage(2.5),
                    fontFamily: FONT.font_Almarai_Regular
                }}
                >{label}</Text>}

                textColor="#635B5B"
                mode='outlined'
                outlineColor="#0000001F"
                activeOutlineColor="#7DBB69"
                cursorColor={COLORS.gray_dark}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}


               
            />


            {errors && touched !== undefined ? <Text style={{
               width: Sizes.width * 0.8,
                color: COLORS.red_logout,  justifyContent: "center",
                fontFamily: FONT.font_Almarai_Regular,marginLeft :RFPercentage(2)
            }} >{errors}</Text>
                : <></>}

        </>
    )


}


export default INputbutton;