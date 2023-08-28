import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS  } from '../constants/index';
import BackarrowSVG from "../../src/assets/Icons/arrow.svg"
import { hp, wp } from '../constants/themes';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Back_arrow = ({onPress}) => {


    return (
        <>


           
                <TouchableOpacity style={[ styles.shadowProp ,styles.button_touchableopacity]} onPress={onPress} >
                    <BackarrowSVG  height ={RFPercentage(4)}   />
                </TouchableOpacity>
     

        </>
    )
}
const styles = StyleSheet.create({

  
    button_touchableopacity:
    {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        height: h *0.04 ,
        width: h *0.04 ,
        borderRadius: RFPercentage(4)

    }, shadowProp: {  
        shadowOffset: {width: 10, height: 14 },  
        shadowColor: COLORS.black,  
        elevation: 15,
        shadowOpacity: .5,  
      },  

})

export default Back_arrow;