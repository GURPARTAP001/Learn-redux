 import {createStore} from 'redux';
 

 // We will create a store 
 //now to make the store usefull it need reduce(they are simple functions) inside it 

 const store=createStore(reducer);

//  reducer always have twom parameter (state and action) also reducer always return us the state
// we can also assign the initial value to the state  by state={amount:1}
 function reducer(state={amount:0},action){

    if(action.type==='increment'){
        return {amount:state.amount+1};
    }
    if(action.type==='decrement'){
        return {amount:state.amount-1};
    }
    if(action.type==='incrementByAmount'){
        return {amount:state.amount+action.payload};
    }
    
    
    return state;
 }

//  now to get the state from the store we use the store.getState() function
//  const currentState=;
// also we can use the subscriber function which itself run when ever the state changes
   store.subscribe(()=>{
    console.log(store.getState());
   })


//  now in order to change the state we need a action 
// creating a action
// {type:"increment"}  //we are not sending any payload along with the action in this case
//now in order to send the action we need a eventhadler called as the dispatch
  store.dispatch({type:"incrementByAmount",payload:4}); //now dispatch will send the action into the reducer
  store.dispatch({type:"incrementByAmount",payload:4}); //now dispatch will send the action into the reducer
  store.dispatch({type:"incrementByAmount",payload:4}); //now dispatch will send the action into the reducer

//   we  can simplfy the work of sending the actions using the Action Creatators

  