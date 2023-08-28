
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, StatusBar, Modal } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import User_image from '../../components/User_image';
import { styles } from './Style_Personal_profile_page';
import Back_arrow from '../../components/Back_arrow';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { fetchUserData } from '../../Redux/Reducers/ProfileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Reducers/authSlice';



const Personal_Profile_page = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const { DataUser, loading } = useSelector((state) => state.profile);

    useFocusEffect(
        useCallback(() => {
            dispatch(fetchUserData());
        }, [dispatch])
    );

    return (
        <>
            <StatusBar backgroundColor={COLORS.black} />

            <ScrollView style={{ backgroundColor: COLORS.white }}>

                <SafeAreaView style={styles.Basic_container}>

                    <View style={styles.view_arrow_and_text_style}>

                        <Back_arrow onPress={() => navigation.navigate("Profile_list")} />

                        <View>
                            <Text style={styles.text_title_name}>الملف الشخصي</Text>
                        </View>

                        <View>
                            <Text onPress={() => navigation.navigate("Profile_data_page")}
                                style={styles.text_edit_button}>تعديل</Text>
                        </View>

                    </View>


                    <View style={{
                        flexDirection: "row",
                        paddingHorizontal: RFPercentage(2),
                        alignItems: "center",
                        backgroundColor: COLORS.white
                    }}>
                        <User_image />
                        <View style={{ margin: RFPercentage(2) }}>
                            <Text style={styles.style_name_withphoto}>{DataUser.fullName}</Text>
                            <Text style={styles.style_email_withphoto}>{DataUser.email}</Text>
                        </View>

                    </View>

                    <View style={styles.style_view_content_of_user_image_nameandemail}>

                        <View>
                            <Text style={styles.style_Text_topof_points}>النقط الحاليه</Text>
                            <TouchableOpacity style={styles.view_points}>
                                <Text onPress={() => setModalVisible(true)} numberOfLines={1}
                                    style={styles.style_text_in_box_ofpoints}>{DataUser.points}</Text>
                            </TouchableOpacity>
                        </View>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    padding: 20,
                                    borderRadius: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        marginBottom: 10,
                                        fontFamily: FONT.font_Almarai_Bold,
                                    }}>النقط : {DataUser.points}</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: COLORS.green_mid,
                                            textAlign: 'center',
                                            fontFamily: FONT.font_Almarai_Bold,
                                        }}>اغلق</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                        <View >
                            <Text style={styles.style_Text_topof_points} >النقط المستخدمه</Text>
                            <TouchableOpacity style={styles.view_points}>
                                <Text onPress={() => setModalVisible2(true)} numberOfLines={1}
                                    style={styles.style_text_in_box_ofpoints}>{DataUser.usedPoints}</Text>
                            </TouchableOpacity>
                        </View>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible2}
                            onRequestClose={() => setModalVisible2(false)}
                        >
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    padding: 20,
                                    borderRadius: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontFamily: FONT.font_Almarai_Bold,
                                        marginBottom: 10,
                                    }}>النقط : {DataUser.usedPoints}</Text>
                                    <TouchableOpacity onPress={() => setModalVisible2(false)}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: COLORS.green_mid,
                                            textAlign: 'center',
                                            fontFamily: FONT.font_Almarai_Bold,
                                        }}>اغلق</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                    </View>

                    <View style={{
                        marginTop: RFPercentage(4), paddingHorizontal: RFPercentage(4),
                        paddingBottom: RFPercentage(4)
                    }}>

                        <View style={{ marginTop: RFPercentage(2) }}>
                            <Text style={styles.name_title} >الاسم</Text>
                            <Text style={styles.input_name_title}>{DataUser.fullName}</Text>
                            <View style={styles.view_line}></View>
                        </View>




                        <View style={{ marginTop: RFPercentage(2) }}>
                            <Text style={styles.name_title}>البريد الالكتروني</Text>
                            <Text style={styles.input_name_title}>{DataUser.email}</Text>
                            <View style={styles.view_line}></View>
                        </View>



                        <View style={{ marginTop: RFPercentage(2) }}>
                            <Text style={styles.name_title}>رقم الهاتف</Text>
                            <Text style={styles.input_name_title}>{DataUser.phoneNumber}</Text>
                            <View style={styles.view_line}></View>
                        </View>

                    </View>

                </SafeAreaView>

                <Large_button button_name="حذف الحساب" Confirm_press={() => logout()} />
            </ScrollView>
        </>
    )
}

export default Personal_Profile_page;