
import { Image, TouchableOpacity, Text, View, FlatList, Linking } from 'react-native';
import { styles } from './Style_Home_page';
import User_image from '../../components/User_image';
import { categories } from '../../Utils/DummyData';
import { Dimensions } from "react-native";
import Notificationicon from "../../../src/assets/Icons/Notificationicon.svg";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, hp } from '../../constants/themes';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import Share from 'react-native-share';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../Redux/Reducers/ProfileSlice';
import { useCallback, useEffect } from 'react';
import { getOrderLines, postOrderLines } from '../../Redux/Reducers/CartOrdersLinesSlice';
import { getOrdersStatus } from '../../Redux/Reducers/OrdersSlice';
import { getOrdersStatusAccepted } from '../../Redux/Reducers/OrdersAcceptedSlice';


const Home_page = () => {

    const dispatch = useDispatch();
    const { DataUser, loading } = useSelector((state) => state.profile);



    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const navigation = useNavigation();





    const handlePress = (item) => {
        if (item.id === 4) {
            SHAre();
        } else if (item.id === 5) {
            alert("soon");
        } else {
            navigation.navigate(item.navi);
        }
    };


    const SHAre = async () => {
        try {
            const options = {
                title: 'شارك البرنامج مع اصداقائك واربح نقط ',
                url: 'https://reactnative.dev/',
            };
            await Share.open(options);
        } catch (error) {
            Alert.alert(error.message);
        }
    };
    ;


    //     const { OrderLines } = useSelector((state) => state.OrderLines);
    // console.log(OrderLines)


    // useEffect(() => {
    //     dispatch(getOrdersStatusAccepted());
    // }, [dispatch]);
    // const { OrdersStatus } = useSelector((state) => state.OrdersStatus);
    // console.log(OrdersStatus , "== > trying")


    useFocusEffect(
        useCallback(() => {
            dispatch(fetchUserData());
        }, [dispatch])
    );

    const FirstFlatList = () => {

        return (
            <>


                <FlatList
                    data={categories}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <>

                            <View style={{
                                alignItems: "center", marginBottom: 20, marginTop: 15,
                                justifyContent: "space-around", width: w * 0.5
                            }}>
                                <TouchableOpacity
                                    onPress={() => handlePress(item)}
                                    style={{
                                        backgroundColor: COLORS.green_light,
                                        width: w * .45, borderRadius: RFPercentage(2), padding: hp(2)
                                    }}>
                                    <View style={{ alignItems: "center" }}>
                                        <Image source={item.image}
                                            style={styles.style_image_in_touchableopacity} />
                                        <Text style={styles.style_text_in_touchableopacity}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </>


                    }
                />
            </>
        )
    }




    return (
        <>

            {loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.green_mid} />
            </View> : (

                <SafeAreaView style={styles.Basic_container} >

                    <View style={styles.green_container}>

                        <View style={styles.view_photo_and_text_style}>

                            <View style={{ flexDirection: "row" }}>
                                <User_image />
                                <View style={{ flexDirection: "column", marginLeft: RFPercentage(2) }}>
                                    <Text numberOfLines={1} style={styles.text_Bold_style}>{DataUser.fullName}</Text>
                                    <Text numberOfLines={1} style={styles.text_thin_style}>النقط: {DataUser.points}</Text>
                                </View>
                            </View>
                            <View style={{ width: RFPercentage(8), alignItems: "center" }} >
                                <Notificationicon height={RFPercentage(5)} width={RFPercentage(5)} style={{ marginRight: RFPercentage(2) }} fill="#fff" />
                            </View>

                        </View>


                    </View>


                    <View style={styles.white_container}>

                        <View style={styles.style_of_container_for_touchableopacity}>

                            <FirstFlatList />




                        </View>



                    </View>

                </SafeAreaView >)}





        </>)


}

export default Home_page;