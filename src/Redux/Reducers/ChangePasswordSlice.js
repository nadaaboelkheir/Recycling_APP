// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import AsyncStorage from '@react-native-async-storage/async-storage';



// const initialState = {
//   error: null,
//   loading: false,
//   BodyofChangePassword: {},
// };



// export const ChangePasswordfetch = createAsyncThunk(
//     'ChangePassword/ChangePasswordfetch',
//     async (body) => {
//       const token = await AsyncStorage.getItem('accessToken');
//       console.log(token)
//       const response = await fetch('http://10.0.2.2:8080//api/v1/password/change', {
//         method: 'Post',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(body),
//       });

//       return await response.json();
//     }
//   );

// const ChangePasswordSlice = createSlice({
//   name: "ChangePassword",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//     .addCase(ChangePasswordfetch.pending, (state) => {
//         console.log("ChangePasswordfetch.pending")
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(ChangePasswordfetch.fulfilled, (state, action) => {
//         console.log("ChangePasswordfetch.fulfilled")
//         if (action.payload.error && action.payload.status === 400) {
//           console.log(action.payload)
//           state.loading = false;
//           console.log('Error in data from back');
//         } else {
//           state.loading = false;
//         }
//         console.log(action)
//       })
//       .addCase(ChangePasswordfetch.rejected, (state, {error}) => {
//         console.log("ChangePasswordfetch.rejected")
//         state.loading = false;
//         state.error = error.message

//       });
//   },
// });

// export default ChangePasswordSlice.reducer;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
};



export const ChangePasswordfetch = createAsyncThunk(
  'ChangePassword/ChangePasswordfetch',
  async (body, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post('http://10.0.2.2:8080/api/v1/password/change', body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const ChangePasswordSlice = createSlice({
  name: "ChangePassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ChangePasswordfetch.pending, (state) => {
        console.log("ChangePasswordfetch.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(ChangePasswordfetch.fulfilled, (state) => {
        console.log("ChangePasswordfetch.fulfilled")
        state.loading = false;
      })
      .addCase(ChangePasswordfetch.rejected, (state, action) => {
        console.log("ChangePasswordfetch.rejected")
        state.loading = false;
        state.error = action.error.message;
        console.log(action)
      });
  },
});

// Export the reducer
export default ChangePasswordSlice.reducer;
