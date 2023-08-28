import { StyleSheet, ActivityIndicator, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import User_image from '../../components/User_image'
import { ProfilePagedata } from '../../Utils/DummyData';
import { useEffect, useState } from 'react';
import { hp } from '../../constants/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Reducers/authSlice';
import { fetchUserData } from '../../Redux/Reducers/ProfileSlice';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width




const Profile_list = () => {

    const navigation = useNavigation();

    const [data, setdata] = useState(ProfilePagedata)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
    const { DataUser } = useSelector((state) => state.profile);




    if (Object.keys(DataUser).length === 1) {
        return (
            <View style={{
                backgroundColor: COLORS.white,
                justifyContent: "center",
                flex: 1
            }}>
                <ActivityIndicator size="large" color="green" />
            </View>
        );
    }



    const Logout = () => {
        dispatch(logout())
        navigation.replace("Auth")
    }


    return (
        <>

            <SafeAreaView style={{
                flex: 1,
                padding: RFPercentage(2),
                width: Sizes.width,
                backgroundColor: COLORS.white
            }}>
                <View style={{
                    flexDirection: "row", justifyContent: "space-around",
                    alignItems: "center", paddingVertical: RFPercentage(2)
                }}>
                    <User_image />

                    <View style={{ justifyContent: "space-around", flex: 1, marginLeft: RFPercentage(2) }}>
                        <Text style={{ fontFamily: FONT.font_Almarai_Bold,textAlign :"left", color: COLORS.black, fontSize: RFPercentage(2.5) }}>{DataUser.fullName}</Text>
                        <Text style={{ fontFamily: FONT.font_Almarai_Light, color: COLORS.black, fontSize: RFPercentage(2.5), textAlign: "left" }}>{DataUser.email}</Text>
                    </View>

                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    scrollEnabled={false}
                    style={{ maxHeight: hp(57.2) }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.replace(item.navi)}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                            <View style={{ paddingVertical: hp(2), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                                <Icon
                                    name={item.icone}
                                    size={hp(4.2)} style={{ color: COLORS.green_mid }} />

                                <Text style={{
                                    marginLeft: RFPercentage(2.5),
                                    fontSize: RFPercentage(2.2),
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: item.id == 8 ? COLORS.red_logout : COLORS.black_mid
                                }}>{item.text_content}</Text>

                            </View>
                            <Icon name="angle-left" size={30} style={{ color: COLORS.green_mid }} />

                        </TouchableOpacity>


                    )}
                />
                <TouchableOpacity
                    onPress={() => Logout()}
                    style={{
                        // backgroundColor :"#00d",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <View style={{ paddingVertical: hp(2), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <Icon
                            name="sign-out"
                            size={hp(4.2)} style={{ color: COLORS.green_mid }} />

                        <Text style={{
                            marginLeft: RFPercentage(2.5),
                            fontSize: RFPercentage(2.2),
                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.red_logout
                        }}>تسجيل الخروج</Text>

                    </View>
                    <Icon name="angle-left" size={30} style={{ color: COLORS.green_mid }} />

                </TouchableOpacity>




            </SafeAreaView>


        </>
    );


}

const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center"
    }, green_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 5,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    },
    style_view_content_of_user_image_nameandemail: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: RFPercentage(1),
        alignContent: "center"
        , alignItems: "center"
    },


})
export default Profile_list