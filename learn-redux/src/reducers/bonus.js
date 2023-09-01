import { increment_bonus } from "../actions";

export function bonusReducer(state = { points: 0 }, action) {

    switch (action.type) {

        case increment_bonus:
            return {points:state.points+1};

        default:
            return state

    }

}