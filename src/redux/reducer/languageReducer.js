const initialState = {
    language: 'Es'
}

const contactReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANG':
            return{
                ...state,
                language: action.payload
            }
        default:
            return state
    }
}

export default contactReducer;