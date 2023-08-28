import React, { useState } from 'react';
import { Button, View , Text , Dimensions} from 'react-native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import { COLORS,Sizes,FONT } from '../../../constants';
import User_image from '../../../components/User_image';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const CustomDrawerContent = (props) => {
  
    const h = Dimensions.get("screen").height
  const w = Dimensions.get("screen").width

    const [data,setData] =useState({
        fullName :"الاء عبد الرازق محمود",
        email : "@nadaaboelkheir@gmail.com"
    })
    return (
      <View style={{ flex: 1,         
          // padding:RFPercentage(2),
    }}>
  
            <DrawerContentScrollView {...props} 
            // contentContainerStyle = {{}}
            >
<View style={{
                    width: Sizes.width *0.75,
                     flexDirection: "row",
                      justifyContent: "space-around",
                    alignItems: "center",
                    alignSelf:"flex-start",
                     margin: RFPercentage(2)
                }}>
                    <User_image />

                    <View style={{ 
                    justifyContent: "space-around",
                     marginLeft: RFPercentage(2) 
                     }}>
                        <Text style={{ 
                            fontFamily: FONT.font_Almarai_Bold,
                             color: COLORS.black,
                              fontSize: RFPercentage(2.4) 
                             }}
                             numberOfLines={1} 

                             >{data.fullName}</Text>
                        <Text style={{ fontFamily: FONT.font_Almarai_Light,
                             color: COLORS.black,
                              fontSize: RFPercentage(2.3),
                              }}
                              numberOfLines={1} 

                              >{data.email}</Text>
                    </View>

                </View>
                <View style={{width:w*0.75,alignSelf:"center",marginTop:RFPercentage(1),
                backgroundColor:COLORS.gray_light,height:RFPercentage(0.1)
            }}></View>

              <DrawerItemList {...props}
             
              />
              <View style={{width:w*0.75,alignSelf:"center",marginVertical:RFPercentage(2),
                backgroundColor:COLORS.gray_light,height:RFPercentage(0.1)
            }}></View>
            <View style = {{flexDirection:"row" ,alignItems:"center",justifyContent:"space-between" ,width:w*0.45,left:RFPercentage(1.5)}}>
          
            <Ionicons name="exit"  size={30} color ={COLORS.red_logout} />
            <Text style={{color:COLORS.red_logout ,fontFamily:FONT.font_Almarai_Bold , fontSize :RFPercentage(2.5)}}>تسجيل الحروج</Text>

            </View>
            </DrawerContentScrollView>
      </View>
    );
  };
export default CustomDrawerContent;