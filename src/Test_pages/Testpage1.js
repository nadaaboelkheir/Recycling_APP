// import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import { COLORS, FONT, hp, icons, Sizes } from '../../src/constants/themes';
// // import SVGICONE from "../../src/assets/Icons/user.svg"
// import SVGICONE from "../../src/assets/Icons/try_svg.svg"
// import { useState } from 'react';

// const Testpage1 = () => {

//     const [checked, setChecked] = useState(false);
//     const [checked2, setChecked2] = useState(false);
//     const [selectedLanguage, setSelectedLanguage] = useState('');

//     const handleLanguagePress = (value) => {
//         setSelectedLanguage(value);
//     };

//     const handleFirstCircleCheckPress = () => {
//         handleLanguagePress('الدفع كاش');
//         setChecked(true);
//         setChecked2(false);
//     };


//     return (
//         <>

//             {/* <View
//                 onPress={handleFirstCircleCheckPress}
//                 style={[
//                     styles.touchableopacity_style,
//                     selectedLanguage === 'الدفع كاش' && styles.selectedButton,
//                 ]}
//             >
//                 <TouchableOpacity
//                     onPress={handleFirstCircleCheckPress}
//                     style={styles.circleOuter}
//                 >
//                     {checked ? <View style={styles.circleInner}></View> : null}
//                 </TouchableOpacity>
//                 <Text style={styles.buttonText}>الدفع كاش</Text>
//             </View>

//             <View
//                 onPress={() => {
//                     handleLanguagePress('Another Option');
//                     setChecked(false);
//                     setChecked2(true);
//                 }}
//                 style={[
//                     styles.touchableopacity_style,
//                     selectedLanguage === 'Another Option' && styles.selectedButton,
//                 ]}
//             >
//                 <TouchableOpacity
//                     onPress={() => {
//                         handleLanguagePress('Another Option');
//                         setChecked(false);
//                         setChecked2(true);
//                     }}
//                     style={styles.view_outter}
//                 >
//                     {checked2 ? <View style={styles.circleInner}></View> : null}
//                 </TouchableOpacity>
//                 <Text style={styles.buttonText}>Another Option</Text>
//             </View> */}

//             {/*
// http://10.0.2.2:8080/api/v1/charities/1
// {
//     "id": 1,
//     "name": "مؤسسة مجدى يعقوب للقلب",
//     "currentPoints": 605,
//     "numberOfDonors": 3,
//     "about": "تعتمد مؤسسة مجدى يعقوب للقلب على التبرع والدعم المالي للقيام بمهمتها وانقاذ قلوب أطفال حيث اننا نطمح ونعمل على توسيع نطاق عملياتنا لتلبية الطلب الكبير والمتزايد على علاج القلب والأوعية الدموية للذين هم في أمس الحاجة إليه، وذلك إلى جانب تطوير العلاج والبحث واستثمار المواهب، بطريقة غير مسبوقة في المنطقة.",
//     "site": "email@email.com",
//     "phone": "029876542",
//     "imageUri": "https://reoil-graduation-project.s3.us-east-1.amazonaws.com/charity-image/1/44b5efe1-5e2f-4daa-b46d-9755e1158bf5",
//     "programs": [
//         "برنامج القلب الأول",
//         "برنامج خيري",
//         "برنامج خيري يهدف إلى توفير العلاج للأطفال الذين يعانون من أمراض القلب والأوعية الدموية"
//     ]
// } */

//                 /**
//                  http://10.0.2.2:8080/api/v1/charities
//                  [
//                     {
//                         "id": 1,
//                         "name": "مؤسسة مجدى يعقوب للقلب",
//                         "description": "مؤسسة خيرية",
//                         "currentPoints": 605,
//                         "imageUri": "https://reoil-graduation-project.s3.us-east-1.amazonaws.com/charity-image/1/44b5efe1-5e2f-4daa-b46d-9755e1158bf5"
//                     }
//                 ]
//                  */

//                 /**
//                  http://10.0.2.2:8080/api/v1/donations
//                  {
//                     "donations": [
//                         {
//                             "charityId": 1,
//                             "charityName": "مؤسسة مجدى يعقوب للقلب",
//                             "programName": "برنامج القلب الأول",
//                             "points": 5,
//                             "createdAt": "2023-06-27T11:40:16.47785",
//                             "charityImageUri": "https://reoil-graduation-project.s3.us-east-1.amazonaws.com/charity-image/1/44b5efe1-5e2f-4daa-b46d-9755e1158bf5"
//                         },
//                         {
//                             "charityId": 1,
//                             "charityName": "مؤسسة مجدى يعقوب للقلب",
//                             "programName": "برنامج القلب الأول",
//                             "points": 100,
//                             "createdAt": "2023-06-27T11:29:01.914229",
//                             "charityImageUri": "https://reoil-graduation-project.s3.us-east-1.amazonaws.com/charity-image/1/44b5efe1-5e2f-4daa-b46d-9755e1158bf5"
//                         },
//                         {
//                             "charityId": 1,
//                             "charityName": "مؤسسة مجدى يعقوب للقلب",
//                             "programName": "برنامج خيري يهدف إلى توفير العلاج للأطفال الذين يعانون من أمراض القلب والأوعية الدموية",
//                             "points": 100,
//                             "createdAt": "2023-06-27T11:28:06.556301",
//                             "charityImageUri": "https://reoil-graduation-project.s3.us-east-1.amazonaws.com/charity-image/1/44b5efe1-5e2f-4daa-b46d-9755e1158bf5"
//                         }
//                     ]
//                 }
//                  */
//                 /**
//                  patch http://10.0.2.2:8080/api/v1/user
                
//                  {
//                     "fullName": "أمير طارق علي",
//                     "phoneNumber": "01068932068"
//                 }
                
//                 or
                
//                 {
//                     "fullName": "أمير طارق علي"
//                 }
                
//                 or
                
//                 {
//                     "phoneNumber": "01068932068"
//                 }
                
//                  */
//             }


//             {/**
//  * *
//  * 
//  * {"0":
//   {"id": 1,
//    "item": 
//   {"id": 1, "imageUrl": "https://post.healthline.com/wp-
//   content/uploads/2020/08/AN168-oil-fr
//   ying-pan-732x549-Thumb-1-732x549.jpg",
//  *  "name": "زيت طعام",
//  *  "points": 100,
//  *  "quantity": 1.5, 
//  * "unit": "لتر"},
//  *  "quantity": 3}}
//  * 
//  * ***/}

//             {/* try_svg.svg */}
//             {/* <Text>sdasd</Text>  */}

//             {/* <SVGICONE  height= {100}  width = {370} fill = "#00d" /> */}

//             {/* <Image style={{ width: hp(20), height: hp(20) }} resizeMode='contain'
//                 source={{ uri: "https://reoil-graduation-project.s3.us-east-1.amazonaws.com/charity-image/1/44b5efe1-5e2f-4daa-b46d-9755e1158bf5" }} /> */}
//         </>
//     )


// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     circleCheckContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     circleOuter: {
//         width: 20,
//         height: 20,
//         borderRadius: 10,
//         borderWidth: 2,
//         borderColor: '#000',
//         marginRight: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     circleInner: {
//         width: 10,
//         height: 10,
//         borderRadius: 5,
//         backgroundColor: '#000',
//     },
//     buttonText: {
//         fontSize: 16,
//     },
//     selectedButton: {
//         backgroundColor: 'lightblue',
//     },
// });
// export default Testpage1;

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Testpage1 = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguagePress = (value) => {
    setSelectedLanguage(value);
  };

  const handleFirstCircleCheckPress = () => {
    handleLanguagePress('الدفع كاش');
    setChecked(true);
    setChecked2(false);
  };

  return (
    <View style={styles.container}>
      <View
        onPress={handleFirstCircleCheckPress}
        style={[
          styles.circleCheckContainer,
          selectedLanguage === 'الدفع كاش' && styles.selectedButton,
        ]}
      >
        <TouchableOpacity
          onPress={handleFirstCircleCheckPress}
          style={styles.circleOuter}
        >
          {checked ? <View style={styles.circleInner}></View> : null}
        </TouchableOpacity>
        <Text style={styles.buttonText}>الدفع كاش</Text>
      </View>

      <View
        onPress={() => {
          handleLanguagePress('Another Option');
          setChecked(false);
          setChecked2(true);
        }}
        style={[
          styles.circleCheckContainer,
          selectedLanguage === 'Another Option' && styles.selectedButton,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            handleLanguagePress('Another Option');
            setChecked(false);
            setChecked2(true);
          }}
          style={styles.circleOuter}
        >
          {checked2 ? <View style={styles.circleInner}></View> : null}
        </TouchableOpacity>
        <Text style={styles.buttonText}>المحفظه الالكترونيه</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleCheckContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circleOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  buttonText: {
    fontSize: 16,
  },
//   selectedButton: {
//     backgroundColor: 'lightblue',
//   },
});

export default Testpage1;
