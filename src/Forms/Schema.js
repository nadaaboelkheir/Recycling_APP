import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),
  password: Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),
});


export const pointstodonate = Yup.object().shape({
  number : Yup.string().trim().required("برجاء ادخال عدد النقط"),
});


export const ForgetPasswordEmailSchema = Yup.object().shape({
  email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),
});


export const Change_passwordSchema = Yup.object().shape({
  oldPassword:  Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف').oneOf([Yup.ref("oldPassword") , null] , "كلمة المرور القديمة خاطئة"),
  password: Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),
  passwordConfirmation: Yup.string().required('برجاء تاكيد كلمة المرور').min(8,'يجب ان تكون اكثر من 8 ارقام او حروف').oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة')
    
});



export const Forget_passwordSchema = Yup.object().shape({
  password: Yup.string().trim().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),
  passwordConfirmation: Yup.string().trim().required('برجاء تاكيد كلمة المرور').min(8,'يجب ان تكون اكثر من 8 ارقام او حروف').oneOf([Yup.ref('passwordConfirmation'), null], 'كلمة المرور غير متطابقة')
});




export const SignupSchema = Yup.object().shape({
    
    username : Yup.string().trim().required("برجاء ادخال الاسم"),
    email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),
    phoneNumber : Yup.string().trim().min(8, 'برجاء ادخال رقم الهاتف صحيح ').required('برجاء ادخال رقم الهاتف ').matches(phoneRegExp, 'برجاء ادخال رقم الهاتف صحيح '),
    password: Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),
    passwordConfirmation: Yup.string().required('برجاء تاكيد كلمة المرور').min(8,'يجب ان تكون اكثر من 8 ارقام او حروف').oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة')
    

});


export const DeliveryLoginSchema = Yup.object().shape({
  email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),
  password: Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),

});

export const DeliveryEmailPageSchema = Yup.object().shape({
  email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),

});

export const DeliverySignupSchema = Yup.object().shape({

  nameValidation : Yup.string().trim().matches(/^[\p{L}\s]+$/u, 'برجاء إدخال اسم صحيح').min(10, 'الاسم يجب أن يتكون من حرفين على الأقل').max(50, 'الاسم يجب أن يتكون من 50 حرفًا على الأكثر').required('الرجاء إدخال الاسم'),
  password: Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),
  confirmPassword: Yup.string().required('برجاء تاكيد كلمة المرور').min(8,'يجب ان تكون اكثر من 8 ارقام او حروف').oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة')
  
});
