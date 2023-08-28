
import { Image, TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import { categories, Types_services } from '../../Utils/DummyData';
import { Dimensions } from "react-native";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const ServicesOil = () => {
    
    const navigation = useNavigation();

    const FirstFlatList = () => {
        return (
            <>

                <FlatList

                    data={Types_services}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <>
                            <TouchableOpacity  onPress={() => navigation.navigate(item.navi)} style={[styles.shadowProp, styles.style_touchableopacity_categories]} >
                                <View style={{ alignItems: "center" }}>
                                    <Image source={item.image}
                                        style={styles.style_image_in_touchableopacity} />
                                    <Text style={styles.style_text_in_touchableopacity}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </>
                    }
                />
            </>
        )
    }
    return (
        <>
            <SafeAreaView style={styles.Basic_container}>
            
               

                    <View style={[styles.view_arrow_and_text_style]}>

                        <Back_arrow  onPress={() => navigation.replace("Home")      }/>
                      
                        <View>
                         <Text style={[styles.text_Bold_style, { textAlign: "center" }]}>الخدمات المقابله</Text>


                        </View>


                    </View>


               

                    <View style={{alignItems :"center"}}>

                        <FirstFlatList />

                    </View>



                </SafeAreaView>

           


        </>
    )


}

const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white
        , alignContent: "center"
    }, text_Bold_style: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: 25,
        textAlign: "center",
        justifyContent: "center",
        width: w * 0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent :"space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, style_image_in_touchableopacity: {
        width: w * 0.34,
        height: h * 0.16,
    },
    white_container: {
        alignItems :"center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(4),
        borderTopStartRadius: RFPercentage(4)
        
    }, style_touchableopacity_categories: {
        
        backgroundColor: COLORS.green_light,
        width: w * 0.44,
        borderRadius: RFPercentage(2),
        alignItems: "center",
        marginVertical: h * 0.005,
        marginHorizontal: w * 0.02,
        marginTop : RFPercentage(3),
        marginBottom: RFPercentage(2),
        padding: RFPercentage(2)
    }, style_image_in_touchableopacity: {
        width: w * 0.33,
        height: w * 0.33,
    }, style_text_in_touchableopacity: {
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: RFPercentage(3),
         marginTop : RFPercentage(1),
        color: COLORS.green_mid

    }, shadowProp: {
        shadowOffset: { width: 10, height: 14 },
        shadowColor: COLORS.black,
        elevation: 10,
        shadowOpacity: .5,
    }
})
export default ServicesOil;