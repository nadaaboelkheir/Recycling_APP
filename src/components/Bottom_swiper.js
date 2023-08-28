import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar, Text } from 'react-native-paper';
import { COLORS } from '../constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FONT, hp, Sizes } from '../constants/themes';
import ExclamationSvg from "../assets/Icons/exclamation.svg"
const Bottom_swiper = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <SafeAreaProvider>

    <View style={styles.container}>
      {/* <Button  onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button> */}
      <Snackbar
      style={{
        alignSelf:"center",
        width : Sizes.width,
        height:50,
       backgroundColor:COLORS.white,
      color:COLORS.green,padding:0,
      borderTopLeftRadius : hp(1),
      borderLeftWidth : hp(2),
      borderLeftColor: COLORS.yellow_light
      }}
      
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{

          label: 'X',
          onPress: () => {
            setVisible(false)
            
          },
        }}>
          <View style={{flexDirection:"row"
          ,padding : hp(0),
          justifyContent :"space-between" ,
           alignItems : "center"
           }}>
            <View style={{flexDirection : "row" ,justifyContent :"space-between",alignItems:"center"}}>
            <ExclamationSvg width = {hp(4)} height = {hp(4)}/>
<Text style={{color :COLORS.gray_mid,left :hp(2),fontFamily : FONT.font_Almarai_Bold}}>كمية الزيت غير كافية</Text>
            </View>
        
          </View>
       
      </Snackbar>
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding :0
  },
});

export default Bottom_swiper;