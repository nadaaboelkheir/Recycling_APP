import {
    Image,
    TouchableOpacity, Text, View, ScrollView,
} from 'react-native';
import { styles } from '../Home/Style_Type_oil';
import { COLORS, FONT, Sizes } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Back_arrow from '../../components/Back_arrow';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { hp, wp } from '../../constants/themes';
import PlusCricleSvg from "../../assets/Icons/plus-circle.svg"
import HiddenItemWithActions from "./HiddenItemsWithActions"
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Dialog } from 'react-native-simple-dialogs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOrderLines } from '../../Redux/Reducers/CartOrdersLinesSlice';
import { PostIncrease, postDecrease } from '../../Redux/Reducers/counterItems';
import PlusSvg from "../../assets/Icons/plus.svg"
import MinusSvg from "../../assets/Icons/minus.svg"
import EditSvg from "../../assets/Icons/edit.svg"
import { ActivityIndicator } from 'react-native';
import { PostSubmitCart, deleteOrderline } from '../../Redux/Reducers/SubmitSlice';
import CorrectSvg from "../../assets/Icons/correct.svg"





const Request_car = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleConfirm, setisModalVisibleConfirm] = useState(false);

    const { OrderLines, loading } = useSelector((state) => state.OrderLines);

    useEffect(() => {
        dispatch(getOrderLines());
    }, [dispatch]);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (OrderLines && OrderLines.length > 0) {
            const formattedData = OrderLines.map((item, index) => ({
                key: `${index}`,
                Points: item.item.points,
                name: item.item.name,
                id: item.id,
                itemId: item.item.id,
                imageUrl: item.item.imageUrl,
                unit: item.item.unit,
                quantityin: item.item.quantity,
                quantityout: item.quantity,
            }));
            setData(formattedData);
        }
    }, [OrderLines]);

    console.log(data)

    const fetchOrderLines = () => {
        dispatch(getOrderLines());
    };

    const clearOrderLines = () => {
        setData([]);
    };

    const numberOfBottlesIncrement = (rowKey) => {
        const newData = [...data];
        newData[rowKey].quantityout += 1;
        dispatch(PostIncrease({ id: newData[rowKey].id }));
        setData(newData);
    };

    const numberOfBottlesDecrement = (rowKey) => {
        const newData = [...data];
        if (newData[rowKey].quantityout > 0) {
            newData[rowKey].quantityout -= 1;
            dispatch(postDecrease({ id: newData[rowKey].id }));
            setData(newData);
        }
    };

    const renderVisibleItem = ({ item }) => {
        return (
            <>

                <View
                    key={item.key}
                    style={[
                        styles.shadowProp,
                        {
                            backgroundColor: COLORS.white,
                            alignSelf: 'center',
                            borderRadius: 10,
                            margin: 10,
                            padding: RFPercentage(2),
                            width: wp(94),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }]} >
                    <View
                        style={{

                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{

                                width: hp(16),
                                height: hp(16),
                                borderRadius: RFPercentage(2),
                            }}

                            resizeMode="center"
                        />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: RFPercentage(1) }}>

                        <View style={{ justifyContent: "space-between", padding: hp(0.5) }}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    fontSize: RFPercentage(2.5),
                                    maxWidth: wp(35),
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.green_mid,
                                }}
                            >{item.name}
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    style={[styles.shadowProp, { marginRight: 5 }]}

                                    onPress={() => numberOfBottlesIncrement(item.key)}
                                >
                                    <PlusSvg width={RFPercentage(6)} height={RFPercentage(6)} />
                                </TouchableOpacity>
                                <View style={{ justifyContent: "center" }}>
                                    <Text
                                        style={{
                                            color: COLORS.black,
                                            fontFamily: FONT.font_Almarai_Bold,
                                            fontSize: RFPercentage(2.5),
                                            maxWidth: Sizes.width * 0.2,
                                        }}
                                        numberOfLines={1}
                                    >
                                        {item.quantityout}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={[styles.shadowProp, { marginLeft: 5 }]}
                                    disabled={item.quantityout == 1 ? true : false }
                                    onPress={() => numberOfBottlesDecrement(item.key)}
                                >
                                    <MinusSvg width={RFPercentage(6)} height={RFPercentage(6)} />
                                </TouchableOpacity>
                            </View>
                        </View>




                        <View
                            style={{
                                justifyContent: 'space-between',
                                // height: RFPercentage(15),
                                alignItems: 'flex-end',
                            }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                padding: RFPercentage(0.5),
                            }}>
                                <Text
                                    style={{
                                        color: COLORS.black,
                                        fontFamily: FONT.font_Almarai_Bold,
                                        fontSize: RFPercentage(2.65),
                                    }}
                                    numberOfLines={1}
                                >
                                    نقط
                                </Text>
                                <Text
                                    style={{
                                        marginLeft: RFPercentage(0.5),
                                        color: COLORS.black,
                                        fontFamily: FONT.font_Almarai_Bold,
                                        fontSize: RFPercentage(2.65),
                                        maxWidth: Sizes.width * 0.12,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.Points}
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Types_oil')}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    top: RFPercentage(-2),
                                }}
                            >
                                <View>
                                    <EditSvg
                                        style={{ right: RFPercentage(1) }}
                                        width={RFPercentage(2.5)}
                                        height={RFPercentage(2.5)}
                                    />
                                </View>

                                <View>
                                    <Text
                                        style={{
                                            color: COLORS.red_logout,
                                            fontFamily: FONT.font_Almarai_Bold,
                                            fontSize: RFPercentage(2.4),
                                            right: RFPercentage(0.5),
                                        }}
                                        numberOfLines={1}
                                    >
                                        تعديل
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>



            </>

        );
    }

    const renderHiddenItem = (data, rowMap) => {
        return (
            <HiddenItemWithActions
                data={data}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
                itemid={data.item.id}
            />
        );
    }


    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow(rowMap, rowKey);
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = data.filter((item) => item.key !== rowKey);
        setData(newData);
    };

    return (
        <>
            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>
                    <View>
                        <Back_arrow onPress={() => navigation.goBack()} />
                    </View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.white,
                            alignSelf: 'center',
                        }}
                    >
                        عربة الطلبات
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(PostSubmitCart());
                                setisModalVisibleConfirm(true)
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: FONT.font_Almarai_ExtraBold,
                                    color: COLORS.white,
                                    alignSelf: 'center',
                                }}
                            >
                                تأكيد
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.white_container}>
                    {loading ?
                        (<View style={{ flex: 1, margin: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color={COLORS.green_mid} />
                        </View>) : (
                            <View >
                                <SwipeListView
                                    showsVerticalScrollIndicator={false}
                                    data={data}
                                    renderItem={renderVisibleItem}
                                    renderHiddenItem={renderHiddenItem}
                                    leftOpenValue={0}
                                    rightOpenValue={-150}
                                />
                                <View
                                    style={{
                                        alignSelf: 'center',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        margin: hp(2),
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => setIsModalVisible(true)}
                                        style={[
                                            styles.shadowProp,
                                            {
                                                elevation: 4,
                                                elevation: 10,
                                            },
                                        ]}
                                    >
                                        <PlusCricleSvg
                                            width={RFPercentage(7)}
                                            height={RFPercentage(7)}
                                        />
                                    </TouchableOpacity>

                                </View>

                            </View>)
                    }

                </View>
                <Dialog
                    dialogStyle={{ borderRadius: hp(1), alignSelf: 'flex-end' }}
                    visible={isModalVisible}
                    onTouchOutside={() => setIsModalVisible(false)}
                >
                    <View
                        style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: hp(1.5),
                            height: Sizes.height * 0.16,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONT.font_Almarai_Bold,
                                fontSize: RFValue(18, Sizes.height),
                            }}
                        >
                            هل أنت متأكد من اضافة الطلب ؟
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: Sizes.width * 0.5,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setIsModalVisible(false);
                                    navigation.navigate('Types_oil');
                                }}
                                style={[
                                    styles.shadowProp,
                                    {
                                        width: hp(8),
                                        height: hp(6),
                                        borderRadius: hp(1),
                                        padding: hp(1),
                                        backgroundColor: COLORS.green_mid,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    },
                                ]}
                            >
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontFamily: FONT.font_Almarai_Regular,
                                    }}
                                >
                                    نعم
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setIsModalVisible(false);
                                }}
                                style={[
                                    styles.shadowProp,
                                    {
                                        shadowColor: COLORS.green_mid,
                                        width: hp(8),
                                        height: hp(6),
                                        borderRadius: hp(1),
                                        padding: hp(1),
                                        backgroundColor: COLORS.red_logout,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    },
                                ]}
                            >
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontFamily: FONT.font_Almarai_Regular,
                                    }}
                                >
                                    لا
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Dialog>
                <Dialog
                    dialogStyle={{ borderRadius: hp(1), alignSelf: "flex-end" }}
                    visible={isModalVisibleConfirm}
                    onTouchOutside={() => setisModalVisibleConfirm(true)}
                >
                    <View style={{ justifyContent: "space-between", alignItems: "center", padding: hp(1.5) }}>
                        <CorrectSvg width={RFPercentage(10)} height={RFPercentage(10)} />
                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(3.5), marginVertical: RFPercentage(2) }}>
                            تمت بنجاح
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: Sizes.width * 0.75 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(PostSubmitCart());
                                    clearOrderLines();
                                    fetchOrderLines();
                                    navigation.navigate('Types_oil');
                                    setisModalVisibleConfirm(false);
                                }}
                                style={[styles.shadowProp, {
                                    width: hp(12),
                                    height: hp(6),
                                    borderRadius: hp(1),
                                    padding: hp(1),
                                    backgroundColor: COLORS.white,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }]}
                            >
                                <Text style={{ color: COLORS.green_mid, fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.3) }}>
                                    تم
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Dialog>

            </SafeAreaView>
        </>
    );
};




export default Request_car;
