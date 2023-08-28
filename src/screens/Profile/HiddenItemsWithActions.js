
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes, hp } from '../../constants/themes';
import { styles } from '../Home/Style_Type_oil';
import DeleteSvg from "../../assets/Icons/delete.svg"
import { Dialog } from 'react-native-simple-dialogs';
import CloseSvg from "../../assets/Icons/close.svg"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrderline } from '../../Redux/Reducers/SubmitSlice';
import { getOrderLines } from '../../Redux/Reducers/CartOrdersLinesSlice';
const HiddenItemsWithActions = props => {
    const dispatch = useDispatch();
    const { onClose, onDelete, itemid  } = props
    const [isModalVisable, setISModalVisible] = useState(false)
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const { OrderLines, loading } = useSelector((state) => state.OrderLines);

    return (
        <>
            <View style={[styles.shadowProp,
            {
                backgroundColor: COLORS.green_light, alignSelf: "center",
                borderRadius: 10, margin: 10, padding: hp(2), width: w * 0.92,
                flex: 1, height: "100%",
                flexDirection: "row", alignItems: "center", justifyContent: "flex-start"
            }]}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={{ right: 10 }}

                        onPress={() => { setISModalVisible(true) }}
                    >
                        <DeleteSvg

                            width={RFPercentage(7)}
                            height={RFPercentage(7)} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onClose}
                        style={{ backgroundColor: COLORS.green_light, left: 10, top: 5 }}>
                        <CloseSvg width={RFPercentage(7)}

                            height={RFPercentage(6.5)} />
                    </TouchableOpacity>
                </View>
                <Dialog
                    dialogStyle={{ borderRadius: hp(1), alignSelf: "flex-end" }}
                    visible={isModalVisable}
                    onTouchOutside={() => setISModalVisible(true)}>
                    <View style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: hp(1.5),

                        height: h * 0.16,
                    }}>

                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFValue(18, Sizes.height) }}>هل أنت متأكد من حذف الطلب ؟</Text>
                        <View style={{
                            flexDirection: "row", alignItems: "center",
                            justifyContent: "space-around", width: Sizes.width * 0.7
                        }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setISModalVisible(false);
                                    dispatch(deleteOrderline({ id : itemid}));
                                    onDelete();
                                  }}

                                style={[styles.shadowProp, {
                                    paddingVertical: RFPercentage(1.5),
                                    width: w * 0.25,
                                    shadowColor: COLORS.black,
                                    borderRadius: hp(1),
                                    backgroundColor: COLORS.white,
                                    borderWidth: 2,
                                    borderColor: COLORS.green_mid,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }]}>
                                <Text style={{
                                    fontSize: RFPercentage(2.5),
                                    color: COLORS.green_mid,
                                    fontFamily: FONT.font_Almarai_Regular
                                }}>نعم</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { setISModalVisible(false); onClose() }}

                                style={[styles.shadowProp, {
                                    paddingVertical: RFPercentage(1.5),
                                    width: w * 0.25,

                                    shadowColor: COLORS.black,
                                    borderRadius: hp(1),
                                    backgroundColor: COLORS.red_logout,
                                    borderWidth: 2,
                                    borderColor: COLORS.green_mid,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }]}>
                                <Text style={{
                                    fontSize: RFPercentage(2.5),
                                    color: COLORS.white,
                                    fontFamily: FONT.font_Almarai_Regular
                                }}>لا</Text>

                            </TouchableOpacity>



                        </View>
                    </View>
                </Dialog >

            </View >



        </>


    )
}



export default HiddenItemsWithActions;


