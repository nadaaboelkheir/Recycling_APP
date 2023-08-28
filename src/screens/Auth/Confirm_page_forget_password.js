
import {  Image, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Confirm_page_forget_password = () => {
    
    const navigation = useNavigation();

    return (
        <>


            <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: COLORS.white }}>
                <Image source={images.confirm_photo_page}
                    style={{ width: Sizes.width * .9, height: Sizes.height * .5, margin: RFPercentage(2) }} />

                <Text style={{ fontSize: RFPercentage(3.7), fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, margin: RFPercentage(2) }}>تم تغيير كلمه المرور بنجاح</Text>
                <View style={{ marginTop: RFPercentage(18.5), }}>
                    <Large_button button_name="تأكيد"  Confirm_press={() => navigation.navigate('Tologin') } />
                </View>

            </SafeAreaView>

        </>
    )


}


export default Confirm_page_forget_password;