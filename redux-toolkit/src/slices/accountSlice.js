import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// here the initial state is the same state that we use to give in the reducer
const initialState = {
  amount: 0//we had the amount =0 in the state thus ,
}

// here the createasyncthunk will create 3 actions for us such as fulfilled,pending,rejected
// here the users/getUser is the action name that will be called
 export const getUserAccount= createAsyncThunk(
    'users/getUser',
    // here the userId is the id that we will pass as an arrgument when this function is called
    async (userId, thunkAPI) => {
      const {data}=await axios.get(`http://localhost:8080/accounts/${userId}`)
      return data.amount
    }
  )

export const accountSlice = createSlice({
    // the below name will come in fron of the actions as account/action_name
  name: 'account',
  initialState,
//   below are the reducers that we have to make
  reducers: {
    // below are the kind of the case that we use to write inside the switch statements also the below name are the actions
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
        if(state.amount>0){
            state.amount -= 1
        }
    },
    incrementByAmount: (state, action) => {
        if(action.payload>=0){
            state.amount += action.payload
        }
    },
  },
  extraReducers:(builder)=>{
    // here we just need to add .fulfilled ,pending etc in front of the getUserAccount to create the various actions for the api call
    builder.addCase(getUserAccount.fulfilled,(state,action)=>{
        state.amount=action.payload
    })
  }
})

// Action creators are generated for each case reducer function
// now the magic is that all the cases defined in the reducer will become actions with the action call as account/increment etc
export const { increment, decrement, incrementByAmount } = accountSlice.actions

// now to put the reducer inside  the configureStore we will get a accountSlice.reducer that we can import when ever needed
export default accountSlice.reducer