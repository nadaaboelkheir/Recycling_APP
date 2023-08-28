import { images } from "../constants";

const categories =

    [
        {
            id: 1,
            name: "أنواع الزيوت",
            image: images.type_oil,
            navi: 'Types_oil'
        },
        {
            id: 2,
            name: "الخدمات المقابله",
            image: images.another_service,
            navi: 'ServicesOil'
        },
        {
            id: 3,
            name: "جدول المواعيد",
            image: images.tables,
            navi: 'TimeTablePage'
        },
        {
            id: 4,
            name: "شارك و اربح",
            image: images.share_and_win,
            // navi: 'Share_page'
            link: ''
        },
        {
            id: 5,
            name: "أخري",
            image: images.another,
            // navi: alert("SOON")
        },

    ]






const Types_services =

    [
        {
            name: "فلوس",
            image: images.Money_exchange,
            navi: 'MoneyStack'
        },
        {
            name: "تبرعات",
            image: images.Donations_exchange,
            navi: 'ShareTheGoodPage'
        },
        {
            name: "منتجات",
            image: images.Products_exchange,
            navi: 'Products'
        },
        {
            name: "كوبون خصم",
            image: images.Sale_exchange,
            navi: 'Discount_coupons'
        },

    ]



const Oils =

    [
        {
            id: 1,
            name: "زيت طعام 1 كيلو",
            image: images.type_oil,
            number_points: 10,
            initial: 0
        },
        {
            id: 2,
            name: "زيت طعام 5 كيلو",
            image: images.food_oil,
            number_points: 50,
            initial: 0
        },
        {
            id: 3,
            name: "زيت عربيات 1 كيلو",
            image: images.cars_oils,
            number_points: 20,
            initial: 0
        },
        {
            id: 4,
            name: "زيت عربيات 5 كيلو",
            image: images.cars_oil_for_3K,
            number_points: 100,
            initial: 0
        },

    ]



const Voluntary_dataset =

    [
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 10,
            date: "10/2/2023",
            // navi: 'History_profile'
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 50,
            date: "10/2/2023",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 20,
            date: "10/2/2023",
            // navi: 'ss'
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 100,
            date: "10/2/2023",
            // navi: 'ss'
        }, {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 10,
            date: "10/2/2023",
            // navi: 'History_profile'
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 50,
            date: "10/2/2023",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 20,
            date: "10/2/2023",
            // navi: 'ss'
        },


    ]


const Share_The_Good_Dataset =

    [
        {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 1000,
            about: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 1050,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "جمعية الاورمان",
            image: images.Elorman_foundation_logo,
            number_points: 100,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "مصر الخير",
            image: images.Masr_elkhar_foundation_logo,
            number_points: 1000,
            about: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "مصر الخير",
            image: images.Masr_elkhar_foundation_logo,
            number_points: 1050,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "جمعية الاورمان",
            image: images.Elorman_foundation_logo,
            number_points: 100,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },


    ]
const money_archives_data = [
    {
        status: "قيد الانتظار",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    },
    {
        status: "مكتمل",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }, {
        status: "قيد الانتظار",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }, {
        status: "مكتمل",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }, {
        status: "قيد الانتظار",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }
];


const Copones =

    [
        {
            id: 1,
            quantity: 0,
            name: "ماكدونلز خصم 25 %",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 1050,
        },
        {
            id: 2,
            quantity: 0,
            name: "ماكدونلز خصم 25 %",
            image: images.mac,
            number_points: 20,

        },
        {
            id: 3,
            quantity: 2,
            name: " ماكدونلز 25 %",
            image: images.Elorman_foundation_logo,
            number_points: 100,
          
        },
        {
            id: 4,
            quantity: 0,
            name: "ماكدونلز خصم 40%",
            image: images.Masr_elkhar_foundation_logo,
            number_points: 1000,
          
        },
        {
            id: 5,
            quantity: 0,
            name: "جمعية رسالة",
            image: images.mac,
            number_points: 1050,
          

        },
        {
            id: 6,
            quantity: 12,
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            

        },
        {
            id: 7,
            quantity: 0,
            name: "جمعية الاورمان",
            image: images.mac,
            number_points: 100,
           
        },



    ]



const CartData =
    [
        {
            id: 1,
            numOfBottles: 22,
            numOfPoints: 20,
            oilQuantity: 2
        },
        {
            id: 2,
            numOfBottles: 21,
            numOfPoints: 40,
            oilQuantity: 4

        }
        ,
        {
            id: 3,
            numOfBottles: 22,
            numOfPoints: 200,
            oilQuantity: 41
        }
        , {
            id: 4,
            numOfBottles: 2,
            numOfPoints: 202,
            oilQuantity: 12
        },
        {
            id: 5,
            numOfBottles: 12,
            numOfPoints: 20
            ,
            oilQuantity: 7
        }
    ]



const ProfilePagedata =
    [
        {
            id: 1,
            text_content: "معلومات الحساب",
            icone: "user-circle",
            navi: 'Personal_Profile_page'
        },
        {
            id: 2,
            text_content: "تغيير كلمة السر",
            icone: "expeditedssl",
            navi: 'Change_password1'
        },
        {
            id: 3,
            text_content: "العناوين",
            icone: "location-arrow",
            navi: 'Address_page'
        },
        {
            id: 4,
            text_content: "قائمة الطلبات المنتجات",
            icone: "shopping-bag",
            navi: 'ShowOrdersfromConfirm'
        },
        {
            id: 5,
            text_content: "تغيير اللغة",
            icone: "language",
            navi: 'Choose_language_page'
        },
        {
            id: 6,
            text_content: "الشكاوي والإقتراحات",
            icone: "question-circle",
            navi: 'Suggests'
        },
        {
            id: 7,
            text_content: "الشروط والأحكام",
            icone: "info-circle",
            navi: 'Terms'
        }
    ]


const Days = [
    {
        day: "السبت"
    },
    {
        day: "الاحد"
    },
    {
        day: "الاثنين"
    },
    {
        day: "الثلاثاء"
    },
    {
        day: "الاربعاء"
    },
    {
        day: "الخميس"
    },
    {
        day: "الجمعة"
    }
]



const orders_Data = [
    {
        statues: "done",
        orders_table: {
            id: 1,
            photo: images.type_oil,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
    {
        statues: "done",
        orders_table: {
            id: 2,
            photo: images.cars_oils,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "3",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"


        }

    },
    {
        statues: "Waiting",
        orders_table: {
            id: 3,
            photo: images.cars_oil_for_3K,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "51",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
    {
        statues: "Waiting",
        orders_table: {
            id: 4,
            photo: images.type_oil,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "52",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"
        }

    }, {
        statues: "Waiting",
        orders_table: {
            id: 5,
            photo: images.type_oil,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"
        }

    },
    {
        statues: "done",
        orders_table: {
            id: 6,
            photo: images.cars_oils,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "3",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
];



const CompletedOrdersData = [
    {
        statues: "مكتملة",
        orderData: {
            id: 1,
            name: "كريم احمد سامي",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341471231"
        },

    },
    {
        statues: "مكتملة",
        orderData: {
            id: 2,
            name: "عمر شعبان الوالي",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341230251"

        },

    },
    {
        statues: "مكتملة",
        orderData: {
            id: 3,
            name: "محمد أدم ",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل  نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341231231"
        },

    }
];





const CanceledOrdersData = [
    {
        statues: "ملغية",
        orderData: {
            id: 1,
            name: "أحمد حسام ",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341471231"
        },

    },
    {
        statues: "ملغية",
        orderData: {
            id: 2,
            name: "خالد محمد علي",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341230251"

        },

    },
    {
        statues: "ملغية",
        orderData: {
            id: 3,
            name: "أمير طارق البلعوطي",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل  نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341231231"
        },

    }
];





const UncompletedOrders = [
    {
        statues: "تحت التنفيذ",
        orderData: {
            id: 1,
            name: "سلام المحمدي  علي",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341471231"
        },

    },
    {
        statues: "تحت التنفيذ",
        orderData: {
            id: 2,
            name: "علي كامل سالم",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341230251"

        },

    },
    {
        statues: "تحت التنقيذ",
        orderData: {
            id: 3,
            name: "اسر محمد عبد السلام ",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل  نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341231231"
        },

    }
];





const Uncompleteorders_Data = [
    {
        statues: "done",
        orders_table: {
            id: 1,
            photo: images.type_oil,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
    {
        statues: "done",
        orders_table: {
            id: 2,
            photo: images.cars_oils,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "3",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"


        }

    },
    {
        statues: "Waiting",
        orders_table: {
            id: 3,
            photo: images.cars_oil_for_3K,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "51",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
    {
        statues: "Waiting",
        orders_table: {
            id: 4,
            photo: images.type_oil,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "52",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"
        }

    }, {
        statues: "Waiting",
        orders_table: {
            id: 5,
            photo: images.type_oil,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"
        }

    },
    {
        statues: "done",
        orders_table: {
            id: 6,
            photo: images.cars_oils,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "3",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
]



const Products_orders = [
    {
        statues: "done",
        id: 0,
        orders_table: {
            photo: images.OILSUNNY,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            num_points: "300",
            amount : 0

        }

    },
    {
        statues: "done",
        id: 1,
        orders_table: {
            photo: images.OILSUNNY,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            num_points: "300",
            amount : 0

        }

    },
    {
        statues: "Waiting",
        id: 2,
        orders_table: {
            photo: images.Pepsi,
            name_oil_order: "زجاجة بيبسي 2.5 لتر",
            amount_oil_order: "25",
            num_points: "50",
            amount : 0

        }

    },
    {
        statues: "Waiting",
        id: 3,
        orders_table: {
            photo: images.OILSUNNY,
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            num_points: "50",
            amount : 0

        }

    }, {
        statues: "Waiting",
        id: 4,
        orders_table: {
            photo: images.Pepsi,
            name_oil_order: "زجاجة بيبسي 2.5 لتر",
            amount_oil_order: "15",
            num_points: "50",
            amount : 0

        }

    },
    {
        statues: "done",
        id: 5,
        orders_table: {
            photo: images.Pepsi,
            name_oil_order: "زجاجة بيبسي 2.5 لتر",
            amount_oil_order: "12",
            num_points: "50",
            amount : 0

        }

    },
]



const Coupons_flatListData = [
    {
        company_logo: images.food_oil,
        company_name: "ماكدونالز",
        isUsed: false,
        numOfPoints: 100
    }, {
        company_logo: images.Vodafone_logo,
        company_name: "ماكدونالز",
        isUsed: true,
        numOfPoints: 100
    }, {
        company_logo: images.Vodafone_logo,
        company_name: "ماكدونالز",
        isUsed: true,
        numOfPoints: 100
    },
    {
        company_logo: images.Mac_logo,
        company_name: "ماكدونالز",
        isUsed: false,
        numOfPoints: 100
    },

]



const Deliveryorders = [
    {
        statues: "تحت التنفيذ",
        orderData: {
            id: 1,
            name: "أمير m علي",
            image: images.Real_user,
            name: "أمير طارق علي",
            image: images.TryMain,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341471231"
        },

    },
    {
        statues: "تحت التنفيذ",
        orderData: {
            id: 2,
            name: "أمير كامل علي",
            image: images.Real_user,
            name: "أمير طارق علي",
            image: images.TryMain,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341230251"

        },

    },
    {
        statues: "تحت التنفيذ",
        orderData: {
            id: 3,
            name: "أمير طارق علي",
            image: images.Real_user,
            amount_oil: "٢٠ لتر زيت طعام مقابل  نقطه",
            image: images.TryMain,
            amount_oil: "٢٠ لتر زيت طعام مقابل ٢٠٠ نقطه",
            phone_num: "01029201",
            address: "المحلة",
            order_serial: "2341231231"
        },

    }
]

export {
    categories,
    Types_services,
    Oils,
    Voluntary_dataset,
    Share_The_Good_Dataset,
    money_archives_data,
    CartData,
    ProfilePagedata,
    Days,
    orders_Data,
    Coupons_flatListData,
    Copones,
    Deliveryorders,
    CanceledOrdersData,
    CompletedOrdersData,UncompletedOrders,
    Products_orders,
    // Deliveryorders,
    Uncompleteorders_Data
}