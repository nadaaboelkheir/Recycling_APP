import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Dimensions, Image, ScrollView } from 'react-native';
import Back_arrow from '../../components/Back_arrow';
import { styles } from './Style_Foundation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import { hp } from "../../constants/themes";
import Large_button from "../../components/Large_button";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { getonecharity } from '../../Redux/Reducers/CharitiesSlice';




const FoundationPage = ({ route }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const id = route.params?.id; // Access the id parameter with optional chaining

    const { onecharity } = useSelector((state) => state.charities);


    const handleTOdonate = () => {
        navigation.navigate("Donate", { onecharity });
      };

    
      useFocusEffect(
        useCallback(() => {
            if (id) {
                // Fetch the specific charity data using the id
                // إحضار بيانات المؤسسة الخيرية المحددة باستخدام المعرف
                const selectedCharity = onecharity.find((onecharity) => onecharity.id === id);
            }
        }, [onecharity, id])
      );

    return (
        <>
            <SafeAreaView style={styles.Basic_container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.view_arrow_place]}>
                        <Back_arrow onPress={() => navigation.goBack()} />
                    </View>

                    <View style={{ marginVertical: RFPercentage(3) }}>
                        <Image source={{ uri: onecharity.imageUri }} resizeMode='center'
                            style={styles.style_image} />
                    </View>



                    <View style={styles.style_View_of_counterandpoints}>
                        <View style={[styles.shadowProp, styles.style_oneof_View_counter_or_points]}>
                            <Text style={styles.style_Text_for_POints}>عدد المتبرعين</Text>
                            <Text style={styles.style_Number_points} >{onecharity.numberOfDonors}</Text>
                        </View>

                        <View style={[styles.shadowProp, styles.style_oneof_View_counter_or_points]}>
                            <Text style={styles.style_Text_for_POints}>النقط الحالية</Text>
                            <Text style={styles.style_Number_points}>{onecharity.currentPoints}</Text>
                        </View>

                    </View>


                    <View style={[styles.shadowProp, styles.style_View_about_Foundation]}>

                        <Text style={styles.style_about_word}>حول</Text>
                        <Text style={styles.style_about_text_dis}>{onecharity.about}</Text>

                    </View>

                    <View style={[styles.shadowProp, styles.style_email_and_number_View]}>

                        <Text style={styles.style_email_text}>الموقع الالكتروني : <Text style={styles.style_email_and_number_validation}>{onecharity.site}</Text></Text>
                        <Text style={styles.styles_number_text}>التليفون : <Text style={styles.style_email_and_number_validation}>{onecharity.phone}</Text></Text>

                    </View>

                    <View style={{ padding: hp(3) }}>
                        <Large_button button_name="تبرع الان"  Confirm_press={handleTOdonate} />
                    </View>


                </ScrollView>





            </SafeAreaView>



        </>
    )


}


export default FoundationPage;