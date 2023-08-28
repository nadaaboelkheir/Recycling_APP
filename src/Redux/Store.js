import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Reducers/authSlice';
import thunk from 'redux-thunk';
import ProfileSlice from './Reducers/ProfileSlice';
import ProductSlice from './Reducers/ProductSlice';
import AddressSlice from './Reducers/AddressSlice';
import ChangePasswordSlice from './Reducers/ChangePasswordSlice';
import CharitiesSlice from './Reducers/CharitiesSlice';
import DonationSlice from './Reducers/DonationSlice';
import CartOrdersLinesSlice from "./Reducers/CartOrdersLinesSlice"
import SubmitSlice from './Reducers/SubmitSlice';
import passwordResetSlice from './Reducers/passwordResetSlice';
import counterItems from './Reducers/counterItems';
import OrdersSlice from './Reducers/OrdersSlice';
import OrdersAcceptedSlice from './Reducers/OrdersAcceptedSlice';
const store = configureStore({
  middleware : [thunk],
    reducer: {
      user : authSlice,
      profile : ProfileSlice,
      product : ProductSlice,
      Address : AddressSlice,
      ChangePassword : ChangePasswordSlice,
      charities :CharitiesSlice,
      donation : DonationSlice,
      OrderLines: CartOrdersLinesSlice,
      counterItems : counterItems,
      SubmitCart: SubmitSlice,
      EditDataUser : ProfileSlice ,
      passwordReset : passwordResetSlice,
      OrdersStatus : OrdersSlice,
      OrdersAcceptedStatus : OrdersAcceptedSlice
    }
})


export default store;