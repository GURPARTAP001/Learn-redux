import { init_account_fulfilled,init_account_pending,init_account_rejected,incByAmount_account,increment_account,decrement_account } from "../actions";


export function accountReducer(state = { amount: 0 }, action) {

    switch (action.type) {

        case init_account_fulfilled:
            return { amount: action.payload,pending:false };

            // In the pending the rest of the state remain so use the spread operator same just the pending get added
        case init_account_pending:
            return { ...state,pending:true };

            //In the case of the rejected we will pass the error in place of payload 
        case init_account_rejected:
            return { ...state,error:action.error ,pending:false};


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