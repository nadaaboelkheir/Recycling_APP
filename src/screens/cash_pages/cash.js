import React from 'react';
import { ScrollView,StyleSheet, Image,TextInput, TouchableOpacity,Text, View ,SafeAreaView} from 'react-native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import Back_arrow from '../../components/Back_arrow';
import { COLORS, FONT, Sizes,hp } from '../../constants/themes';
import { styles } from "./Style_money_archive";
import FlatList_money_archives from './FlatList_money_archives';
import { Share_The_Good_Dataset, Voluntary_dataset ,money_archives_data} from '../../Utils/DummyData';
import { useNavigation } from '@react-navigation/native';

const Cash = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState('اللغه العربيه');
    const [ choose,setChoose] = React.useState([
        {
        label : "فودافون كاش",
        selected : true
},
{
    label : "تحويل فلوس",
    selected : false
}

])
    return (
        <>


<SafeAreaView style={styles.Basic_container}>
                <View style={[styles.view_arrow_and_text_style]}>
                    <Back_arrow onPress={() => navigation.goBack()} />
                    <View>
                        <Text style={[styles.text_Bold_style, { textAlign: "center" }]}>أرشيف التبرعات</Text>
                    </View>
                </View>
                
                    <FlatList_money_archives data={Voluntary_dataset}  />
               
            </SafeAreaView>
        </>
    )


}

const styles_2 = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white,
    }, text_title_name: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        width: Sizes.width * 0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, touchableopacity_style: {
        width:Sizes.width*0.42,
        backgroundColor: COLORS.white
        , padding: RFPercentage(3.1),
        flexDirection: "row",
        margin: RFPercentage(2),
        // justifyContent:"space-between"
        // borderWidth: 2,
        // borderRadius: RFPercentage(1.5)

    }, view_outter: {
        backgroundColor: COLORS.white, width: 25, height: 25
        , borderRadius: 15, borderWidth: 1, alignItems: "center",
        justifyContent: "center"
    }, view_inner: {
        backgroundColor: COLORS.green_mid, alignSelf: "center",
        justifyContent: "center", width: 16, height: 16
        , borderRadius: 8
    }
})

export default Cash;