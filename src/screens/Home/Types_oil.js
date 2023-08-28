
import { Image, ScrollView, TouchableOpacity, Text, View, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { styles } from './Style_Type_oil';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Back_arrow from '../../components/Back_arrow';
import Cart from "../../../src/assets/Icons/cart.svg"
import Large_button from '../../components/Large_button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../constants/themes';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from '../../Redux/Reducers/ProductSlice';
import { getOrderLines, postOrderLines } from '../../Redux/Reducers/CartOrdersLinesSlice';
import { PostDecrease, PostIncrease } from '../../Redux/Reducers/counterItems';


const Types_oil = () => {
    const dispatch = useDispatch();
    const { ALL_products, loading } = useSelector((state) => state.product);
    const { OrderLines } = useSelector((state) => state.OrderLines);

    const [data, setdata] = useState(ALL_products)

    useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch]);

    useFocusEffect(
        useCallback(() => {
            setdata(ALL_products);
        }, [ALL_products])
    );

    if (loading) {
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.green_mid} />
            </View>
        </>
    }






    const [number, setnumber] = useState(0)
    const navigation = useNavigation();

    const w = Dimensions.get("screen").width


    const updateCartNumber = useCallback(() => {
        const counter = OrderLines.length;
        setnumber(counter);
    }, [OrderLines]);

    useEffect(() => {
        updateCartNumber();
    }, [updateCartNumber]);

    const addToCart = (itemId) => {
        updateCartNumber();
    };


    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>


                    <Back_arrow onPress={() => navigation.goBack()} />
                    <Text style={{
                        fontSize: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.white,
                        alignSelf: "center"
                    }}>أنواع الزيوت</Text>

                    <View>
                        <Cart height={hp(6)} width={wp(12)} fill="#fff" />
                        {number > 0 ? <View style={{
                            height: hp(3.5), width: hp(3.5),
                            backgroundColor: COLORS.min_button, borderRadius: 20,
                            justifyContent: "center"
                            , alignItems: "center", position: "absolute", top: -10, left: -8
                        }} >
                            <Text style={{ color: COLORS.gray_dark, fontSize: RFPercentage(2) }} >{number}</Text>
                        </View> : null}


                    </View>

                </View>




                <View style={styles.white_container}>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        contentContainerStyle={{ marginBottom: RFPercentage(20) }}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <>
                                <View style={{ alignItems: "center", marginBottom: 20, marginTop: 10, justifyContent: "space-around", width: w * 0.5 }}>
                                    <View style={[styles.shadowProp, styles.style_touchableopacity_categories]} >

                                        <View style={{ alignItems: "center", paddingTop: RFPercentage(1.5) }}>
                                            <Image source={{ uri: item.imageUrl }}
                                                style={styles.style_image_in_touchableopacity} resizeMode='center' />
                                            <Text style={styles.style_text_in_touchableopacity}>{item.name}</Text>
                                            <Text style={styles.style_text_in_touchableopacit_pointsnumber}>النقط : {item.points}</Text>
                                        </View>



                                        <TouchableOpacity
                                            onPress={() => {
                                                dispatch(postOrderLines(item.id));
                                                addToCart(item.id)
                                            }}
                                            style={{
                                                backgroundColor: COLORS.green_mid,
                                                paddingHorizontal: RFPercentage(2.5),
                                                borderRadius: RFPercentage(2),
                                                margin: RFPercentage(1),
                                                marginHorizontal: RFPercentage(2)
                                            }}>
                                            <Text style={{
                                                paddingVertical: RFPercentage(2),
                                                fontSize: RFPercentage(2),
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.white
                                            }}>اضافة الي العربة</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>

                            </>
                        }
                    />


                    <View style={{ padding: RFPercentage(1) }}>
                        <Large_button button_name="الانتقال الي السلة" Confirm_press={() => {
                            navigation.navigate("Request_car")
                        }} />
                    </View>

                </View>


            </SafeAreaView>



        </>
    )


}

export default Types_oil;