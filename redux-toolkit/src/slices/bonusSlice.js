import { createAction, createSlice } from '@reduxjs/toolkit'

// here the initial state is the same state that we use to give in the reducer
const initialState = {
  points: 0//we had the points =0 in the state thus ,
}

// now for the extrareducer we have to create a action such that extrareducer and work based on the account reducer actions
const account_inc=createAction("account/incrementByAmount")

export const bonusSlice = createSlice({
    // the below name will come in fron of the actions as bonus/action_name
  name: 'bonus',
  initialState,
//   below are the reducers that we have to make
  reducers: {
    // below are the kind of the case that we use to write inside the switch statements also the below name are the actions
    increment: (state) => {
      state.points += 1
    },
  },
   // now when we want to do some thing in this reducer based on the another reducer for eg:if amount more tha  100 increment point to do so we use EXTRAREDUCERS
   extraReducers:(builder)=>{
    builder.addCase(account_inc,(state,action)=>{
        if(action.payload>=100){
            state.points+=1;
        }
    })
   }
})

// Action creators are generated for each case reducer function
// now the magic is that all the cases defined in the reducer will become actions with the action call as bonus/increment etc
export const { increment } = bonusSlice.actions

// now to put the reducer inside  the configureStore we will get a accountSlice.reducer that we can import when ever needed
export default bonusSlice.reducer