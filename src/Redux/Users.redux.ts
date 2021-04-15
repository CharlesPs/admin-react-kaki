
export interface UserType {
    _id: string,
    name: string,
    email: string,
    status: number
}

const initialState = {
    result: [
        { _id: '1', name: 'Carlos Aguinaga', email: 'andres.aguinaga@gmail.com', status: 1 },
        { _id: '2', name: 'Ricardo Aguinaga', email: 'andres.aguinaga@gmail.com', status: 0 },
        { _id: '3', name: 'Victor Aguinaga', email: 'andres.aguinaga@gmail.com', status: 1 },
    ]
}

export const setUsersAction = (newUsers: any) => {

    return {
        type: 'USERS_SET',
        content: newUsers
    }
}

export const UsersReducer = (state = initialState, action: any) => {

    const newState = Object.assign({}, state)

    if (action.type === 'USERS_SET') {

        newState.result = action.content
    }

    return newState
}
