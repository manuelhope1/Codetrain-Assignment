import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addNewUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        editNewUser: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) return action.payload.newData
                return user
            })
        },
        deleteNewUser: (state, action) => {
            state.users = state.users.filter((user) => {
                if (user.id !== action.payload)
                    return user
            })

        }

    }
})

export const { addNewUser, editNewUser, deleteNewUser } = usersSlice.actions;
export default usersSlice.reducer;