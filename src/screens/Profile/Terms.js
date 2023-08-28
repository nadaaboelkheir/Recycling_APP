import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Back_arrow from '../../components/Back_arrow';
import { wp } from '../../constants/themes';

const Terms = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style = {{flexDirection :"row" }}>
                <Back_arrow onPress={() => navigation.navigate("Profile_list")} />

                <Text style={styles.title}>الشروط والأحكام</Text>
            </View>
            <Text style={styles.sectionTitle}>1. خدمة تبديل الزيت القديم</Text>
            <Text style={styles.description}>
                يقدم تطبيق تبديل الزيت القديم خدمة تبديل زيت المحرك القديم للمركبات. يجب على المستخدمين قراءة وفهم الشروط والأحكام قبل استخدام التطبيق.
            </Text>

            <Text style={styles.sectionTitle}>2. المسؤولية</Text>
            <Text style={styles.description}>
                نحن لسنا مسؤولين عن أي ضرر يحدث للمركبة أو المستخدم نتيجة استخدام خدمة تبديل الزيت القديم. يتم استخدام التطبيق وجميع الخدمات على مسؤولية المستخدم النهائي.
            </Text>

            <Text style={styles.sectionTitle}>3. السرية والخصوصية</Text>
            <Text style={styles.description}>
                نحن نلتزم بحماية سرية وخصوصية المعلومات الشخصية للمستخدمين. لن نقوم بمشاركة أو بيع معلومات المستخدم لأي طرف ثالث دون إذن صريح من المستخدم.
            </Text>

            <Text style={styles.sectionTitle}>4. حقوق الطبع والنشر</Text>
            <Text style={styles.description}>
                جميع حقوق الطبع والنشر والملكية الفكرية المتعلقة بالتطبيق والمحتوى المقدم تعود لشركة تبديل الزيت القديم. يُحظر نسخ أو استخدام أو توزيع المحتوى دون إذن كتابي من الشركة.
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    title: {
        justifyContent :"center",
        width :wp(70),
        fontSize: 24,
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.green_mid,
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.gray_dark,
        marginBottom: 20,
    },
});

export default Terms;
