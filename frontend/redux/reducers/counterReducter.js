import {IN_COUNTER, DE_COUNTER} from '../actions/conterActions'

const counterReducter = (state = {value:0}, action) => {

    switch(action.type){
        case IN_COUNTER:
            return {
                ...state,
                value: state.value + 1
            }
        case DE_COUNTER:
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return {
                ...state
            }
    }

}

export default counterReducter