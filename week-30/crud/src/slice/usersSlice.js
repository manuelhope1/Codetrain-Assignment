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
    }
})

export const { addNewUser } = usersSlice.actions;
export default usersSlice.reducer;