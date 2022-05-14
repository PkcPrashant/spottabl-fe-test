import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    filteredUsers: []
};

const usersReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser(state, action) {
            state.users = [...state.users, action.payload];
            state.filteredUsers = state.users;
        },
        deleteUser(state, action) {
            const index = state.users.find(user => user === action.payload);
            state.users.splice(index, 1);
        },
        filterUser(state, action) {
            state.filteredUsers = state.users.filter((user) => user.includes(action.payload));
        }
    }
})

export const usersAction = usersReducer.actions;
export default usersReducer;
