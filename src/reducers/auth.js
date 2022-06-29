

// {type: 'LOGGED_IN_USER', payload: {name: 'Jimmy', role: 'Seller'} }
export const authReducer = ( state = {name: 'Jimmy', role: 'Seller'}, action ) => {
    switch ( action.type ){
        case "LOGGED_IN_USER":
            return { ...state, ...action.payload }
        case "LOGOUT":
            return action.payload
        default:
            return state
    }
}

