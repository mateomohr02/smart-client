export function clearMessage(){
    return function (dispatch){
        dispatch({
            type: 'CLEAR_MESSAGE'
        })
    }
}