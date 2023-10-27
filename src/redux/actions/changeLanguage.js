export function changeLanguage(lang){
    return function (dispatch){
        dispatch({
            type: 'CHANGE_LANG',
            payload: lang
        })
    }
}