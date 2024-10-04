import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IApiTypes'

export interface authState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user?: IUser,
    allUsers?: IUser[]
}

const initialState: authState = {
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setAllUsers: (state, action: PayloadAction<any>) => {
            state.allUsers = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setUser, setAllUsers } = userSlice.actions

export default userSlice.reducer