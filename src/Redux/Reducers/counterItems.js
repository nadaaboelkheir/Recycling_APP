import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const initialState = {
  error: null,
  loading: false,
  OrderLines: [],
};


export const PostIncrease = createAsyncThunk(
  'counterItems/PostIncrease',
  async (id, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/orderlines/${id.id}/increase`, null, {
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




export const postDecrease = createAsyncThunk(
  'counterItems/postDecrease',
  async (id, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/orderlines/${id.id}/decrease`, null, {
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


const counterItems = createSlice({
  name: "counterItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostIncrease.pending, (state ) => {
        console.log("PostIncrease.pending")
        state.loading = true;
        state.error = null;

      })
      .addCase(PostIncrease.fulfilled, (state, { payload }) => {
        console.log("PostIncrease.fulfilled")
        state.loading = false;
        state.OrderLines = payload
      })
      .addCase(PostIncrease.rejected, (state, action ) => {
        console.log("PostIncrease.rejected")
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(postDecrease.pending, (state ) => {
        console.log("postDecrease.pending")
        state.loading = true;
        state.error = null;

      })
      .addCase(postDecrease.fulfilled, (state, { payload }) => {
        console.log("postDecrease.fulfilled")
        state.loading = false;
        state.OrderLines = payload
        console.log(payload)
      })
      .addCase(postDecrease.rejected, (state, action ) => {
        console.log("postDecrease.rejected")
        state.error = action.error.message;
        state.loading = false;
        console.log(action)
        // console.log(error, " ==> ", payload)


      })
      
  }
})



export default counterItems.reducer;


// export const PostIncrease = createAsyncThunk(
//   'counterItems/PostIncrease',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/orderlines/${id}/increase`, body, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return rejectWithValue(error.response.data);
//       } else {
//         return rejectWithValue('An error occurred');
//       }
//     }
//   }
// );
// export const PostIncrease = createAsyncThunk(
//   'itemsIncreaseandDecrease/postIncrease',
//   async (rowKey, { rejectWithValue }) => { 
//     try {
//       const token = await AsyncStorage.getItem('accessToken');
//       const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/orderlines/${rowKey}/increase`, null, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const PostIncrease = createAsyncThunk(
//   'itemsIncreaseandDecrease/postIncrease',
//   async (id, { rejectWithValue }) => { 
//     try {
//       const token = await AsyncStorage.getItem('accessToken');
//       const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/orderlines/${id}/increase`, null, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         return rejectWithValue('Requested resource not found');
//       }
//       return rejectWithValue(error.message);
//     }
//   }
// );


// export const PostIncrease = createAsyncThunk(
//   'itemsIncreaseandDecrease/PostIncrease',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/orderlines/${id}/increase`, body, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const PostIncrease = createAsyncThunk(
//   'itemsIncreaseandDecrease/postIncrease',
//   async (id, { rejectWithValue }) => { 
//     try {
//       const token = await AsyncStorage.getItem('accessToken');
//       const response = await axios.post(`http://10.0.2.2:8080/api/v1/cart/orderlines/${id}/increase`, null, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         return rejectWithValue('Requested resource not found');
//       }
//       return rejectWithValue(error.message);
//     }
//   }
// );
// .addCase(postDecrease.pending, (state) => {
//   console.log("postDecrease.pending")

//   state.loading = true;
//   state.error = null;
// })
// .addCase(postDecrease.fulfilled, (state, { payload }) => {
//   console.log("postDecrease.fulfilled")
//   state.loading = false;
//   state.OrderLines = payload
// })
// .addCase(postDecrease.rejected, (state, { error, payload }) => {
//   console.log("postDecrease.rejected")
//   state.error = error.message;
//   state.loading = false;
//   console.log(error, " ==> ", payload)


// });