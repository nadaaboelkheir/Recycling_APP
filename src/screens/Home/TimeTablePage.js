
import { ScrollView, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import { hp } from '../../constants/themes';
import { useState } from 'react';
import { Days } from '../../Utils/DummyData';
import DaysFLatlist from './components/DaysFlatlist';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
import { styles } from '../Home/Style_TimeTable';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const TimeTablePage = (props) => {

    const [data, Setdata] = useState(Days)

    // const navigation = useNavigation();

    return (
        <>



            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <SafeAreaView style={styles.Basic_container}>

                    <View style={styles.green_container}>

                        <View style={[styles.view_arrow_and_text_style]}>
                            <Back_arrow onPress={() => navigation.goBack()} />

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[styles.text_Bold_style]}>جدول المواعيد</Text>
                            </View>

                        </View>

                        <View style={[styles.View_days, {
                            justifyContent: "space-around"
                            , marginBottom: RFPercentage(2), marginLeft: RFPercentage(1)
                        }]}>

                            <DaysFLatlist data={data} />



                        </View>
                    </View>

                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(5) }}>

                            <TouchableOpacity
                                style={{
                                    marginBottom: 10,
                                    height: hp(9),
                                    width: w * 0.88,
                                    justifyContent: "center",
                                    backgroundColor: COLORS.green_mid,
                                    margin: RFPercentage(4),
                                    borderRadius: RFPercentage(1.5),
                                    elevation: 4,
                                    shadowColor: COLORS.black_light,
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    borderWidth: 1.2,
                                    borderColor : COLORS.green_mid
                                }}>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold, textAlign: "center",
                                    fontSize: RFPercentage(3.4), color: COLORS.white,
                                }}>منطقتك</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    marginBottom: 10,
                                    height: hp(9),
                                    width: w * 0.88,
                                    justifyContent: "center",
                                    backgroundColor: COLORS.white,
                                    margin: RFPercentage(4),
                                    borderRadius: RFPercentage(1.5),
                                    elevation: 4,
                                    shadowColor: COLORS.black_light,
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    borderWidth: 1.2,
                                    borderColor : COLORS.green_mid
                                }}>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold, textAlign: "center",
                                    fontSize: RFPercentage(3.4), color: COLORS.green_mid,
                                }}>سبرباي</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    marginBottom: 10,
                                    height: hp(9),
                                    width: w * 0.88,
                                    justifyContent: "center",
                                    backgroundColor: COLORS.white,
                                    margin: RFPercentage(4),
                                    borderRadius: RFPercentage(1.5),
                                    elevation: 4,
                                    shadowColor: COLORS.black_light,
                                    shadowOpacity: 0.2,
                                    shadowRadius: 2,
                                    borderWidth: 1.2,
                                    borderColor : COLORS.green_mid
                                }}>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold, textAlign: "center",
                                    fontSize: RFPercentage(3.4), color: COLORS.green_mid,
                                }}>الموقف</Text>
                            </TouchableOpacity>


                        </View>
                    </View>



                </SafeAreaView>


            </ScrollView>




        </>
    )


}

export default TimeTablePage;