const initialState = {
    emailSended: false,
    message: ''
}

const contactReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'SEND_EMAIL':
            return{
                ...state,
                emailSended: true,
                message: action.payload.message
            }
        case 'CLEAR_MESSAGE':
            return{
                ...state,
                emailSended:false,
                message: ''
            }
        default:
            return state
    }
}

export default contactReducer;