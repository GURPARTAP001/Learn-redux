import { createStore, applyMiddleware } from 'redux';
import axios from 'axios'
import thunk from 'redux-thunk'


// We will create a store 
//now to make the store usefull it need reduce(they are simple functions) inside it 

const store = createStore(reducer, applyMiddleware(thunk.default));


//  Reducer always have two parameter (state and action) also reducer always return us the state
// we can also assign the initial value to the state  by state={amount:1}...........................
function reducer(state = { amount: 0 }, action) {

    switch (action.type) {

        case "init":
            return { amount: action.payload };
        case "increment":
            return { amount: state.amount + 1 };

        case "decrement":
            return { amount: state.amount - 1 };

        case "incrementByAmount":
            return { amount: state.amount + action + payload };

        default:
            return state;
    }
}

//  Now to get the state from the store we use the store.getState() function............................
// also we can use the subscriber function which itself run when ever the state changes
store.subscribe(() => {
    console.log(store.getState());
})

//Async data call
//    async function getData(){
//     const {data}= await axios.get('http://localhost:3000/accounts');
//     console.log(data);
//    }



//   we  can simplfy the work of sending the actions using the Action Creatators
// Action Creatators......................................
//now we need the init to be such that it takes the payloads value from the api so we will use the middleware called as "Thunk"

//    now as we are using the thunk to call the api so now the init function will have two parameter dsipatch and getState thus we can dispatch inside the function insted of returning 

// now to pass the "id" we will pass the function inside the function

//INITIAL:-
//          async function init(dispatch, getState) {
//             const { data } = await axios.get('http://localhost:3000/accounts/2');
//        dispatch({ type: "init", payload: data.amount })
//        }
//FINAL:-
     function init(id) {
    return(async(dispatch,getState)=>{
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch({ type: "init", payload: data.amount })

    })
        
    }

function increment() {
    return { type: "increment" }
};
function decrement() {
    return { type: "decrement" }
};
function incrementByAmount(value) {
    return { type: "incrementByAmount", payload: value }
};


//  now in order to change the state we need a action 
// creating a action
// {type:"increment"}  //we are not sending any payload along with the action in this case
//now in order to send the action we need a eventhadler called as the dispatch


// Now when we are uisng the thunk we only send the function defination only in the dispatch we dont send the function call
setInterval(() => {
    store.dispatch(init(3));//now dispatch will send the action into the reducer
}, 2000)




