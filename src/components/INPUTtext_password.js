
import { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { COLORS, FONT, Sizes } from '../constants/index';
import { hp } from '../constants/themes';

// const EyeIcon = <Icon name="eye" size={24} color="black" />;
const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width



const INPUTtext_password = ({ value, onChangeText, visible, setVisible,
    label, placeholder, keyboardType, errors, touched,
}) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
        setVisible(!visible);
    };


    return (
        <>

            <TextInput

                style={{
                    margin: RFPercentage(0.5),
                    width: Sizes.width * 0.85,
                    // fontSize: RFValue(20.5,h),
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
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                right={

                    <TextInput.Icon
                        icon={secureTextEntry ? 'eye-off' : 'eye'}
                        iconColor={COLORS.black}
                        onPress={toggleSecureEntry}
                        size={hp(3)}

                    />
                }
            />


            {errors && touched !== undefined ? <Text style={{
                width: Sizes.width * 0.8,
                color: COLORS.red_logout, justifyContent: "center",
                fontFamily: FONT.font_Almarai_Regular, marginLeft: RFPercentage(2)
            }} >{errors}</Text>
                : <></>}


        </>
    )


}


export default INPUTtext_password;

