import axios from "axios"
// Action names for the account reducer.............................
export const increment_account="account/increment"
export const init_account_fulfilled="account/init/fulfilled"
export const init_account_pending="account/init/pending"
export const init_account_rejected="account/init/rejected"
export const decrement_account="account/decrement"
export const incByAmount_account="account/incByAmount"

// action names for the bonus reducer
export const increment_bonus="bonus/increment"


// Action creators.............
export function account_init(id) {
    return (async (dispatch, getState) => {
        // now to handle the api calling correctly we have to create 3 action fulfilled,pending,rejected and handle each of them inside the reducer
        try{
            dispatch({type:init_account_pending})
        const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
        dispatch({ type: init_account_fulfilled, payload: data.amount })

        }catch(error){
            // In the dispatch we can pass the error also
            dispatch({type:init_account_rejected,error:error.message})
        }
    
    })

}

export function account_increment() {
    return { type: increment_account }
};
export function account_decrement() {
    return { type: decrement_account}
};
export function account_incrementByAmount(value) {
    return { type: incByAmount_account, payload: value }
};


export function bonus_increment(){
    return {type:increment_bonus}
}