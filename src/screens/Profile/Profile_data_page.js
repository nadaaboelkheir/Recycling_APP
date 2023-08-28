import { useCallback, useEffect, useState } from "react"
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TouchableOpacity, Modal } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import User_image from '../../components/User_image'
import INputbutton from '../../components/INputbutton';
import { SafeAreaView } from "react-native-safe-area-context";
import Large_button from "../../components/Large_button";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { fetchUserData } from "../../Redux/Reducers/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { PatchEditDataUser } from "../../Redux/Reducers/EditDataUserSlice";
import { wp } from "../../constants/themes";

const Profile_data_page = ({ label, value }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { DataUser } = useSelector((state) => state.profile);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const [inputValue, setInputValue] = useState(value);
    const [Error, setError] = useState("");


    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const [phoneNumber, setPhoneNumber] = useState(value);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  
    const validatePhoneNumber = (number) => {
      const phoneNumberRegex = /^[1-9]\d{9}$/; 
      return phoneNumberRegex.test(number);
    };
  
    const handlePhoneNumberChange = (number) => {
      setPhoneNumber(number);
      setIsValidPhoneNumber(validatePhoneNumber(number));
    };
    

      const dispatchPatchEditDataUser = () => {
        dispatch(
          PatchEditDataUser({
            fullName: inputValue,
            phoneNumber: phoneNumber,
          })
        ).unwrap().then(res =>{dispatch(fetchUserData())})
        
        navigation.navigate('Personal_Profile_page');
      };
      

     
      
    return (
        <>
            <StatusBar hidden={true} />
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView>
                    <View style={{
                        flexDirection: "row",
                        paddingVertical: RFPercentage(3),
                        justifyContent: "space-around", alignItems: "center"
                    }}>
                        <View>
                            <Back_arrow onPress={() => navigation.navigate("Personal_Profile_page")} />
                        </View>
                        <View style={{ flexDirection: "row", width: Sizes.width * 0.7 }}>
                            <Text style={{ color: COLORS.black, fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(3) }}>تعديل الملف الشخصي</Text>

                        </View>

                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                        <User_image />
                    </View>

                    <View style={styles.style_view_content_of_user_image_nameandemail}>

                        <View>
                            <Text style={styles.style_Text_topof_points}>النقط الحاليه</Text>
                            <View style={styles.view_points}>
                                <TouchableOpacity onPress={() => setModalVisible(true)}>
                                    <Text numberOfLines={1} style={styles.style_text_in_box_ofpoints}>{DataUser.points}</Text>
                                </TouchableOpacity>
                            </View>
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
                                            fontFamily: FONT.font_Almarai_Bold,
                                            textAlign: 'center',
                                        }}>اغلق</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>







                        <View >
                            <Text style={styles.style_Text_topof_points} >النقط المستخدمه</Text>
                            <View style={styles.view_points}>
                                <Text onPress={() => setModalVisible2(true)} numberOfLines={1}
                                    style={styles.style_text_in_box_ofpoints}>{DataUser.usedPoints}</Text>
                            </View>
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
                                        marginBottom: 10,
                                        fontFamily: FONT.font_Almarai_Bold,

                                    }}>النقط : {DataUser.usedPoints}</Text>
                                    <TouchableOpacity onPress={() => setModalVisible2(false)}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: COLORS.green_mid,
                                            fontFamily: FONT.font_Almarai_Bold,
                                            textAlign: 'center',
                                        }}>اغلق</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                    </View>

                    <View style={{
                        flex: 0.75, justifyContent: "space-around",
                    }}>

                        <View style={{ marginTop: RFPercentage(5) }}>
                            <INputbutton
                                value={inputValue}
                                label="الاسم"
                                onChangeText={handleInputChange}
                            />
                            <INputbutton
                                value={phoneNumber}
                                label="رقم الهاتف"
                                onChangeText={handlePhoneNumberChange}
                            />
                            {isValidPhoneNumber !== "" && <Text style={styles.error}>{Error}</Text>}
                        </View>


                        <View style={{ marginTop: RFPercentage(10) }}>
                            <Large_button button_name="حفظ التعديلات" Confirm_press={dispatchPatchEditDataUser} />
                        </View>

                    </View>
                </ScrollView>
                {   hiddenSheet? 
    <>
    
    </> : <>
    <View style={{alignSelf:"center",
    width:w,alignItems:"center",justifyContent:"center",alignSelf:"center"}}>

    <BottomSheet
   
    isOpen ={SheetOpen}
    wrapperStyle={{
      width:w*0.9,
      flex:1,
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
                  // console.log("Close") ;
              setHiddenSheet(true)
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
            </SafeAreaView>

     
        </>
    )


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
        // flex: 5,
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
    }, error: {
        color: "red",
        marginTop: 5,
        width :wp(90),
        marginLeft : RFPercentage(5)
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
    style_Text_topof_points: {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.black,
        fontSize: RFPercentage(2.5),
        alignSelf: "center"
        , margin: RFPercentage(1)
    }, view_points: {
        alignSelf: "center",
        width: RFPercentage(15),
        backgroundColor: COLORS.white,
        borderWidth: RFPercentage(.25)
        , borderColor: COLORS.green_mid,
        alignItems: "center",
        borderRadius: RFPercentage(1.5),
    }
    , style_text_in_box_ofpoints: {
        fontSize: RFPercentage(4),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.green_mid,
        marginHorizontal: RFPercentage(1),
        height: RFPercentage(6),
        maxWidth: RFPercentage(20)
    },
    safeAreaView: {
        flex: 1,
        // justifyContent:"space-between",
        width: Sizes.width,
        backgroundColor: COLORS.white
    }

})
export default Profile_data_page;