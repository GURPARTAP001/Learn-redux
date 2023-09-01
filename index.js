import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios'
import thunk from 'redux-thunk'

// Action names.............................
const increment_account="account/increment"
const init_account="account/init"
const decrement_account="account/decrement"
const incByAmount_account="account/incByAmount"

const increment_bonus="bonus/increment"


// We will create a store 
//now to make the store usefull it need reduce(they are simple functions) inside it 

// In order to give multiple reducer we use COMBINEREDUCER which is a object
const store = createStore(combineReducers({
                        account: accountReducer,
                        bonus: bonusReducer
                    }), applyMiddleware(thunk.default));




//  Reducer always have two parameter (state and action) also reducer always return us the state
// we can also assign the initial value to the state  by state={amount:1}...........................
function accountReducer(state = { amount: 0 }, action) {

    switch (action.type) {

        case init_account:
            return { amount: action.payload };
        case increment_account:
            return { amount: state.amount + 1 };

        case decrement_account:
            return { amount: state.amount - 1 };

        case incByAmount_account:
            return { amount: state.amount + action.payload };

        default:
            return state;
    }
}

function bonusReducer(state = { points: 1 }, action) {

    switch (action.type) {

        case increment_bonus:
            return {points:state.points+1};

        default:
            return state

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
function account_init(id) {
    return (async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch({ type: init_account, payload: data.amount })

    })

}

function account_increment() {
    return { type: increment_account }
};
function account_decrement() {
    return { type: decrement_account}
};
function account_incrementByAmount(value) {
    return { type: incByAmount_account, payload: value }
};


function bonus_increment(){
    return {type:increment_bonus}
}

//  now in order to change the state we need a action 
// creating a action
// {type:"increment"}  //we are not sending any payload along with the action in this case
//now in order to send the action we need a eventhadler called as the dispatch


// Now when we are uisng the thunk we only send the function defination only in the dispatch we dont send the function call
setInterval(() => {
    store.dispatch(bonus_increment());//now dispatch will send the action into the reducer
}, 2000)




