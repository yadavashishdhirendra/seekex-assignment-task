import { createReducer } from '@reduxjs/toolkit';
const initialState = {}

export const UserManagementReducer = createReducer(initialState, {
    CreateUserRequest: (state) => {
        state.loading = true;
    },
    CreateUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload
    },
    CreateUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    clearErrors: (state) => {
        state.error = null
    },
})