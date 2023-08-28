import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, TextInput, Dimensions, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import { COLORS, FONT, hp, wp, } from '../../constants/themes';
import { Share_The_Good_Dataset } from '../../Utils/DummyData';
import FlatlitShareTheGood from './componentsOf_Voluntary/FlatlitShareTheGood';
import { styles } from './Style_ShareTheGood';
import Archive from "../../../src/assets/Icons/Archive_icone.svg"
import Search from "../../../src/assets/Icons/search_icone.svg"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getcharities, getonecharity } from '../../Redux/Reducers/CharitiesSlice';
import { images } from '../../constants';


const ShareTheGoodPage = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    
      
  useFocusEffect(
    useCallback(() => {
      dispatch(getcharities());
    }, [dispatch])
  );
    const { charities, loading, error } = useSelector((state) => state.charities);
    console.log(charities)

    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const [data, setdata] = useState(charities)
    const [searchQuery, setSearchQuery] = useState('');




    const handleSearch = (text) => {
        setSearchQuery(text);
    };


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.green_mid} />
            </View>
        );
    }




    const filteredData = data.filter(item => item.name.includes(searchQuery));

    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>



                    <Back_arrow
                        onPress={() => navigation.replace("ServicesOil")}
                    />
                    <View>
                        <Text style={{
                            fontSize: RFPercentage(2.5),
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.white,
                        }}>شارك في الخير</Text>
                        <Text style={{
                            fontSize: RFPercentage(2.3),
                            fontFamily: FONT.font_Almarai_Regular,
                            color: COLORS.white,
                        }}>اتبرع بنقاطك بكل سهوله في الخير</Text>

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Voluntary_Archive")} >
                        <Archive height={hp(6)} width={wp(10)} fill="#fff" />
                    </TouchableOpacity>

                </View>




                <View style={styles.white_container}>


                    <View style={[{
                        borderWidth: 2,
                        borderColor: COLORS.green_mid,
                        borderRadius: 10,
                        marginBottom: 5,
                        width: w * 0.9,
                        flexDirection: "row"
                        , justifyContent: "space-between"
                    }]}>
                        <TextInput
                            style={{
                                color: COLORS.text_color,
                                width: w * 0.75,
                                padding: hp(1.5),
                                fontSize: RFPercentage(2.5),
                                fontFamily: FONT.font_Almarai_Regular,
                            }}

                            onChangeText={handleSearch}
                            value={searchQuery}
                            placeholder="ابحث عن مؤسسه خيريه"
                            placeholderTextColor={COLORS.text_color}
                        />
                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.green_mid
                            , alignItems: "center", justifyContent: "center", borderRadius: 6
                        }]} >
                            <Search height={hp(4.8)} width={wp(14)} fill="#fff" />
                        </View>

                    </View>



                    {charities.map((item, index) => (
                        <>
                            <TouchableOpacity
                                key={item.id}
                                
                                onPress={() => {
                                    dispatch(getonecharity(item.id)).then(() => {
                                        navigation.navigate("FoundationPage");
                                    });
                                }}

                                style={[styles.shadowProp, {
                                    backgroundColor: COLORS.white, alignSelf: "center",
                                    borderRadius: 10,
                                    margin: 10, padding: hp(1),
                                    flexDirection: "row", alignItems: "center"
                                }]}>
                                <Image source={{uri : item.imageUri}} resizeMode='center'
                                    style={{ backgroundColor: "#fff", width: hp(15), height: hp(15), alignSelf: "center" }} />

                                <View style={{ justifyContent: "space-between", maxWidth: wp(60), marginLeft: 10 }}>
                                    <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.5), }}>{item.name}</Text>
                                    <Text style={{ fontFamily: FONT.font_Almarai_Light, color: COLORS.black, fontSize: RFPercentage(2.5) }}>{item.description}</Text>
                                    <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFPercentage(2.5), }}>نقط {item.currentPoints}</Text>
                                </View>
                            </TouchableOpacity>

                        </>

                    ))}

                </View>


            </SafeAreaView>



        </>
    )


}

export default ShareTheGoodPage;