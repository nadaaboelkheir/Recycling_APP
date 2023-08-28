
import { Image, ScrollView, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from '../Home/Style_Type_oil';
import { COLORS, FONT, images, Sizes } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native"
import Back_arrow from '../../components/Back_arrow';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { hp } from '../../constants/themes';
import FlatList_money_archives from './FlatList_money_archives';
import { money_archives_data } from '../../Utils/DummyData';
import { useNavigation } from '@react-navigation/native';

const Archives = () => {
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const [number , setnumber] = useState(0)
    const [data, setdata] = useState(money_archives_data)
    const navigation = useNavigation();

    return (
        <>

     <SafeAreaView style={styles.Basic_container}>

                <View style={styles.green_container}>

               

                    <Back_arrow onPress={() => navigation.navigate("Money_transaction")} />
                    <Text style={{
                        right :RFValue(100,Sizes.height),
                        fontSize:RFPercentage(3) ,
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.white,
                        alignSelf: "center"
                    }}>أرشيف  الفلوس</Text>
           

                </View>



                <View style={styles.white_container}>
               <FlatList_money_archives data={money_archives_data}/>
                </View>
         

            </SafeAreaView>



        </>
    )


}

export default Archives;
