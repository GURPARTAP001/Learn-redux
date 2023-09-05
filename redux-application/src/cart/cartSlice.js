import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems,deleteItems,updateItems,addItems } from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};



export const fetchAsync = createAsyncThunk(
  'cart/fetchItems',
  async () => {
    const response = await fetchItems();
    // in axios we get the response and the data is present inside the data in response
    return response.data;
  }
);

export const addItemAsync = createAsyncThunk(
  'cart/addItems',
  async (item) => {
    const {title,price,thumbnail,id,brand}=item
    const response = await addItems({title,price,thumbnail,id,brand,quantity:1}); 
    return response.data;
  }
);

export const deleteItemAsync = createAsyncThunk(
  'cart/deleteItems',
  async (id) => {
    
     await deleteItems(id); 
     return id
  }
);

export const updateItemAsync = createAsyncThunk(
  'cart/updateItems',
  async ({id,change}) => {
    
     const resp=await updateItems(id,change); 
    //  we will return the updated item with the new value of the attribute inside it
     return resp.data
  }
);





export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;

      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // we want to add the item that is being push to the state thus using the push 
        state.items.push(action.payload);

      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex(item=>item.id===action.payload) 
        state.items.splice(index,1);

      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex(item=>item.id===action.payload.id) 
        state.items.splice(index,1,action.payload);

      })
  },
});

// export const {  } = productsSlice.actions;

export default cartSlice.reducer;
