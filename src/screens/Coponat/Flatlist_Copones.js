// import React, { useState } from 'react';
// import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import { styles } from './Style_Offers';
// import { COLORS, FONT, Sizes } from '../../constants';
// import { hp } from '../../constants/themes';
// import PlusSvg from "../../assets/Icons/plus.svg";
// import MinusSvg from "../../assets/Icons/minus.svg";

// const Flatlist_Copones = ({ data }) => {
//   const [showCounters, setShowCounters] = useState(Array(data.length).fill(false));

//   const handleReplaceItem = (index) => {
//     const updatedShowCounters = [...showCounters];
//     updatedShowCounters[index] = true;
//     setShowCounters(updatedShowCounters);
//   }

//   const h = Dimensions.get("screen").height;
//   const w = Dimensions.get("screen").width;

//   return (
//     <>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={data}
//         numColumns={1}
//         renderItem={({ item, index }) => (
//           <>
//             <View style={[styles.shadowProp, {
//               backgroundColor: COLORS.white,
//               height: hp(16.5),
//               width: hp(48),
//               alignSelf: "center",
//               borderRadius: 10,
//               margin: 10,
//               padding: hp(1),
//               flexDirection: "row",
//               alignItems: "center"
//             }]}>
//               <Image
//                 source={item.image}
//                 style={{
//                   backgroundColor: "#fff",
//                   width: hp(12),
//                   height: hp(12),
//                   alignSelf: "center"
//                 }}
//               />

//               <View style={{
//                 padding: RFPercentage(1),
//                 justifyContent: "center",
//                 marginLeft: 5
//               }}>
//                 <View style={{ flexDirection: "row", justifyContent: "center" }}>
//                   <Text style={{
//                     fontFamily: FONT.font_Almarai_Bold,
//                     color: COLORS.black,
//                     fontSize: RFPercentage(2.5),
//                     padding: RFPercentage(1)
//                   }}>{item.name}</Text>
//                   <Text style={{
//                     fontFamily: FONT.font_Almarai_Bold,
//                     color: COLORS.green_mid,
//                     fontSize: RFPercentage(2.3),
//                     padding: RFPercentage(1)
//                   }}>نقطة {item.number_points}</Text>
//                 </View>

//                 {showCounters[index] ? (
//                   <>
//                     <View
//                       style={{
//                         minWidth: RFPercentage(18),
//                         height: RFPercentage(10),
//                         maxWidth: Sizes.width * 0.4,
//                         alignSelf: "flex-start",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         justifyContent: "space-between"
//                       }}
//                     >
//                       <TouchableOpacity
//                         style={styles.shadowProp}
//                         onPress={() => { }}
//                       >
//                         <PlusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
//                       </TouchableOpacity>
//                       <Text
//                         style={{
//                           color: COLORS.black,
//                           fontFamily: FONT.font_Almarai_Bold,
//                           fontSize: RFPercentage(2.5),
//                           maxWidth: Sizes.width * 0.2
//                         }}
//                         numberOfLines={1}
//                       >
//                         {item.number_points}
//                       </Text>
//                       <TouchableOpacity
//                         style={styles.shadowProp}
//                         disabled={data.number_points > 0 ? false : true}
//                         onPress={() => { }}
//                       >
//                         <MinusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
//                       </TouchableOpacity>
//                     </View>
//                   </>
//                 ) : (
//                   <>
//                     <TouchableOpacity
//                       onPress={() => handleReplaceItem(index)}
//                       style={[styles.shadowProp, {
//                         backgroundColor: COLORS.green_mid,
//                         width: hp(15),
//                         padding: RFPercentage(1.4),
//                         borderRadius: 15
//                       }]}
//                     >
//                       <Text style={{
//                         textAlign: "center",
//                         fontSize: RFPercentage(2.4),
//                         fontFamily: FONT.font_Almarai_Regular
//                       }}>بدل الان</Text>
//                     </TouchableOpacity>
//                   </>
//                 )}
//               </View>
//             </View>
//           </>
//         )}
//       />
//     </>
//   );
// }

// // // // // export default Flatlist_Copones;
// // // // import React, { useState } from 'react';
// // // // import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
// // // // import { RFPercentage } from 'react-native-responsive-fontsize';
// // // // import { styles } from './Style_Offers';
// // // // import { COLORS, FONT, Sizes } from '../../constants';
// // // // import { hp } from '../../constants/themes';
// // // // import PlusSvg from "../../assets/Icons/plus.svg";
// // // // import MinusSvg from "../../assets/Icons/minus.svg";

// // // // const Flatlist_Copones = ({ data }) => {
// // // //   const [counters, setCounters] = useState(Array(data.length).fill(0));
// // // //   const [showCounters, setShowCounters] = useState(Array(data.length).fill(false));


  
// // // //   const handleReplaceItem = (index) => {
// // // //     const updatedShowCounters = [...showCounters];
// // // //     updatedShowCounters[index] = true;
// // // //     setShowCounters(updatedShowCounters);
// // // //   }
// // // //   const handlePlusPress = (index) => {
// // // //     const updatedCounters = [...counters];
// // // //     updatedCounters[index] += 1;
// // // //     setCounters(updatedCounters);
// // // //   };

// // // //   const handleMinusPress = (index) => {
// // // //     if (counters[index] > 0) {
// // // //       const updatedCounters = [...counters];
// // // //       updatedCounters[index] -= 1;
// // // //       setCounters(updatedCounters);
// // // //     }
// // // //   };

// // // //   const h = Dimensions.get("screen").height;
// // // //   const w = Dimensions.get("screen").width;

// // // //   return (
// // // //     <>
// // // //       <FlatList
// // // //         showsVerticalScrollIndicator={false}
// // // //         data={data}
// // // //         numColumns={1}
// // // //         renderItem={({ item, index }) => (
// // // //           <>
// // // //             <View style={[styles.shadowProp, {
// // // //               backgroundColor: COLORS.white,
// // // //               height: hp(16.5),
// // // //               width: hp(48),
// // // //               alignSelf: "center",
// // // //               borderRadius: 10,
// // // //               margin: 10,
// // // //               padding: hp(1),
// // // //               flexDirection: "row",
// // // //               alignItems: "center"
// // // //             }]}>
// // // //               <Image
// // // //                 source={item.image}
// // // //                 style={{
// // // //                   backgroundColor: "#fff",
// // // //                   width: hp(12),
// // // //                   height: hp(12),
// // // //                   alignSelf: "center"
// // // //                 }}
// // // //               />

// // // //               <View style={{
// // // //                 padding: RFPercentage(1),
// // // //                 justifyContent: "center",
// // // //                 marginLeft: 5
// // // //               }}>
// // // //                 <View style={{ flexDirection: "row", justifyContent: "center" }}>
// // // //                   <Text style={{
// // // //                     fontFamily: FONT.font_Almarai_Bold,
// // // //                     color: COLORS.black,
// // // //                     fontSize: RFPercentage(2.5),
// // // //                     padding: RFPercentage(1)
// // // //                   }}>{item.name}</Text>
// // // //                   <Text style={{
// // // //                     fontFamily: FONT.font_Almarai_Bold,
// // // //                     color: COLORS.green_mid,
// // // //                     fontSize: RFPercentage(2.3),
// // // //                     padding: RFPercentage(1)
// // // //                   }}>نقطة {item.number_points}</Text>
// // // //                 </View>

// // // //                 {counters[index] > 0 ? (
// // // //                   <>
// // // //                     <View
// // // //                       style={{
// // // //                         minWidth: RFPercentage(18),
// // // //                         height: RFPercentage(10),
// // // //                         maxWidth: Sizes.width * 0.4,
// // // //                         alignSelf: "flex-start",
// // // //                         flexDirection: "row",
// // // //                         alignItems: "center",
// // // //                         justifyContent: "space-between"
// // // //                       }}
// // // //                     >
// // // //                       <TouchableOpacity
// // // //                         style={styles.shadowProp}
// // // //                         onPress={() => handlePlusPress(index)}
// // // //                       >
// // // //                         <PlusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
// // // //                       </TouchableOpacity>
// // // //                       <Text
// // // //                         style={{
// // // //                           color: COLORS.black,
// // // //                           fontFamily: FONT.font_Almarai_Bold,
// // // //                           fontSize: RFPercentage(2.5),
// // // //                           maxWidth: Sizes.width * 0.2
// // // //                         }}
// // // //                         numberOfLines={1}
// // // //                       >
// // // //                         {counters[index]}
// // // //                       </Text>
// // // //                       <TouchableOpacity
// // // //                         style={styles.shadowProp}
// // // //                         onPress={() => handleMinusPress(index)}
// // // //                       >
// // // //                         <MinusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
// // // //                       </TouchableOpacity>
// // // //                     </View>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <TouchableOpacity
// // // //                       onPress={() => handleReplaceItem(index)}
// // // //                       style={[styles.shadowProp, {
// // // //                         backgroundColor: COLORS.green_mid,
// // // //                         width: hp(15),
// // // //                         padding: RFPercentage(1.4),
// // // //                         borderRadius: 15
// // // //                       }]}
// // // //                     >
// // // //                       <Text style={{
// // // //                         textAlign: "center",
// // // //                         fontSize: RFPercentage(2.4),
// // // //                         fontFamily: FONT.font_Almarai_Regular
// // // //                       }}>بدل الان</Text>
// // // //                     </TouchableOpacity>
// // // //                   </>
// // // //                 )}
// // // //               </View>
// // // //             </View>
// // // //           </>
// // // //         )}
// // // //       />
// // // //     </>
// // // //   );
// // // // }

// // // // export default Flatlist_Copones;
// // // 

// import React, { useState } from 'react';
// import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import { styles } from './Style_Offers';
// import { COLORS, FONT, Sizes } from '../../constants';
// import { hp } from '../../constants/themes';
// import PlusSvg from "../../assets/Icons/plus.svg";
// import MinusSvg from "../../assets/Icons/minus.svg";

// const Flatlist_Copones = ({ data }) => {
//   const [counters, setCounters] = useState(Array(data.length).fill(0));
//   const [showCounters, setShowCounters] = useState(Array(data.length).fill(false));

//   const handleReplaceItem = (index) => {
//     const updatedShowCounters = [...showCounters];
//     updatedShowCounters[index] = true;
//     setShowCounters(updatedShowCounters);
//   };

//   const handlePlusPress = (index) => {
//     const updatedCounters = [...counters];
//     updatedCounters[index] += 1;
//     setCounters(updatedCounters);
//   };

//   const handleMinusPress = (index) => {
//     if (counters[index] > 0) {
//       const updatedCounters = [...counters];
//       updatedCounters[index] -= 1;
//       setCounters(updatedCounters);
//     }
//   };

//   const h = Dimensions.get("screen").height;
//   const w = Dimensions.get("screen").width;

//   return (
//     <>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={data}
//         numColumns={1}
//         renderItem={({ item, index }) => (
//           <>
//             <View style={[styles.shadowProp, {
//               backgroundColor: COLORS.white,
//               height: hp(16.5),
//               width: hp(48),
//               alignSelf: "center",
//               borderRadius: 10,
//               margin: 10,
//               padding: hp(1),
//               flexDirection: "row",
//               alignItems: "center"
//             }]}>
//               <Image
//                 source={item.image}
//                 style={{
//                   backgroundColor: "#fff",
//                   width: hp(12),
//                   height: hp(12),
//                   alignSelf: "center"
//                 }}
//               />

//               <View style={{
//                 padding: RFPercentage(1),
//                 justifyContent: "center",
//                 marginLeft: 5
//               }}>
//                 <View style={{ flexDirection: "row", justifyContent: "center" }}>
//                   <Text style={{
//                     fontFamily: FONT.font_Almarai_Bold,
//                     color: COLORS.black,
//                     fontSize: RFPercentage(2.5),
//                     padding: RFPercentage(1)
//                   }}>{item.name}</Text>
//                   <Text style={{
//                     fontFamily: FONT.font_Almarai_Bold,
//                     color: COLORS.green_mid,
//                     fontSize: RFPercentage(2.3),
//                     padding: RFPercentage(1)
//                   }}>نقطة {item.number_points}</Text>
//                 </View>

//                 {showCounters[index] > 0 ? (
//                   <>
//                     <View
//                       style={{
//                         minWidth: RFPercentage(18),
//                         height: RFPercentage(10),
//                         maxWidth: Sizes.width * 0.4,
//                         alignSelf: "flex-start",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         justifyContent: "space-between"
//                       }}
//                     >
//                       <TouchableOpacity
//                         style={styles.shadowProp}
//                         onPress={() => handlePlusPress(index)}
//                       >
//                         <PlusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
//                       </TouchableOpacity>
//                       <Text
//                         style={{
//                           color: COLORS.black,
//                           fontFamily: FONT.font_Almarai_Bold,
//                           fontSize: RFPercentage(2.5),
//                           maxWidth: Sizes.width * 0.2
//                         }}
//                         numberOfLines={1}
//                       >
//                         {counters[index]}
//                       </Text>
//                       <TouchableOpacity
//                         style={styles.shadowProp}
//                         onPress={() => handleMinusPress(index)}
//                       >
//                         <MinusSvg width={RFPercentage(7)} height={RFPercentage(7)} />
//                       </TouchableOpacity>
//                     </View>
//                   </>
//                 ) : (
//                   <>
//                     <TouchableOpacity
//                       onPress={() => handleReplaceItem(index)}
//                       style={[styles.shadowProp, {
//                         backgroundColor: COLORS.green_mid,
//                         width: hp(15),
//                         padding: RFPercentage(1.4),
//                         borderRadius: 15
//                       }]}
//                     >
//                       <Text style={{
//                         textAlign: "center",
//                         fontSize: RFPercentage(2.4),
//                         fontFamily: FONT.font_Almarai_Regular
//                       }}>بدل الان</Text>
//                     </TouchableOpacity>
//                   </>
//                 )}
//               </View>
//             </View>
//           </>
//         )}
//       />
//     </>
//   );
// }

// export default Flatlist_Copones;



