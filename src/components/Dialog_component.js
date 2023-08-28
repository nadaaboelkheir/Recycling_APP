import * as React from 'react';
import { TouchableOpacity, View } from "react-native"
import { Portal, Text, Provider, Modal, shadow, } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Sizes } from '../constants';
import { Dialog } from 'react-native-simple-dialogs';
import { FONT, hp } from '../constants/themes';
import { COLORS } from '../constants/themes';
import { styles } from '../screens/voluntary/Style_Foundation';
import { RFValue } from 'react-native-responsive-fontsize';

const Dialog_component = ({ isVisible }) => {

  const [isModalVisable, setISModalVisible] = React.useState(isVisible)
  return (
    <>

      <Dialog
        dialogStyle={{ borderRadius: hp(1), alignSelf: "flex-end" }}
        visible={isModalVisable}
        onTouchOutside={() => setISModalVisible(true)}>
        <View style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: hp(1.5),

          height: Sizes.height * 0.16,
          //  borderRadius :hp(3)
        }}>

          <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFValue(18, Sizes.height) }}>هل أنت متأكد من حذف الطلب ؟</Text>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: Sizes.width * 0.4 }}
          >
            <TouchableOpacity
              onPress={() => { setISModalVisible(false) }}

              style={[styles.shadowProp, {
                width: hp(8),
                height: hp(6),
                borderRadius: hp(1),
                padding: hp(1),
                backgroundColor: COLORS.red_logout,
                alignItems: "center",
                justifyContent: "center",
              }]}>
              <Text style={{
                color: COLORS.white,
                fontFamily: FONT.font_Almarai_Regular
              }}>نعم</Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setISModalVisible(false) }}

              style={[styles.shadowProp, {
                shadowColor: COLORS.green_mid,
                width: hp(8),
                height: hp(6),
                borderRadius: hp(1),
                padding: hp(1),
                backgroundColor: COLORS.accent,
                alignItems: "center",
                justifyContent: "center"
              }]}>
              <Text style={{
                color: COLORS.green_mid,
                fontFamily: FONT.font_Almarai_Regular
              }}>لا</Text>

            </TouchableOpacity>

          </View>
        </View>
      </Dialog>
    </>
  );
};

export default Dialog_component;